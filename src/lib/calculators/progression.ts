import { stageConfigs, type StageConfig } from '@/data/game-config'

export interface ProgressionInput {
  stage: 'early' | 'mid' | 'late' | 'endgame'
  cash: number
  incomePerSecond: number
  rebirthCount: number
}

export interface ProgressionResult {
  stage: StageConfig
  nextSteps: string[]
  warnings: string[]
  estimatedTimeToGoal: string
}

export function getProgressionAdvice(input: ProgressionInput): ProgressionResult {
  const stageConfig = stageConfigs.find((s) => s.stage === input.stage) || stageConfigs[0]

  const nextSteps: string[] = [
    stageConfig.recommendedOrder,
    `Use the ${stageConfig.recommendedToolName} to optimize your decisions.`,
  ]

  const warnings: string[] = []
  if (stageConfig.warning) {
    warnings.push(stageConfig.warning)
  }

  if (input.stage === 'early' && input.rebirthCount > 0) {
    warnings.push('You have already rebirthed but selected Early Game. Consider switching to Mid Game.')
  }

  if (input.stage === 'mid' && input.incomePerSecond < 1000) {
    warnings.push('Your income seems low for mid game. Focus on upgrades before rebirth.')
  }

  // Rough time estimate based on income
  let estimatedTimeToGoal = 'N/A'
  if (input.incomePerSecond > 0) {
    const stageGoals: Record<string, number> = {
      early: 10000,
      mid: 1000000,
      late: 100000000,
      endgame: 10000000000,
    }
    const goal = stageGoals[input.stage] || 10000
    const secondsToGoal = Math.max(0, goal - input.cash) / input.incomePerSecond

    if (secondsToGoal < 60) estimatedTimeToGoal = 'Under 1 minute'
    else if (secondsToGoal < 3600) estimatedTimeToGoal = `${Math.round(secondsToGoal / 60)} minutes`
    else if (secondsToGoal < 86400) estimatedTimeToGoal = `${Math.round(secondsToGoal / 3600)} hours`
    else estimatedTimeToGoal = `${Math.round(secondsToGoal / 86400)} days`
  }

  return {
    stage: stageConfig,
    nextSteps,
    warnings,
    estimatedTimeToGoal,
  }
}
