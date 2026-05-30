export interface AscendCalcInput {
  currentCash: number
  incomePerSecond: number
  ascendBonus: number
  currentAscendBonus: number
  rebuildHours: number
}

export interface AscendCalcResult {
  recommendation: 'ASCEND' | 'WAIT'
  reason: string
  postAscendIps: number
  timeToRecover: number
  bonusAfter: number
  permanentGain: number
}

export function calculateAscend(input: AscendCalcInput): AscendCalcResult {
  const {
    currentCash,
    incomePerSecond,
    ascendBonus,
    currentAscendBonus,
    rebuildHours,
  } = input

  if (incomePerSecond <= 0) {
    return {
      recommendation: 'WAIT',
      reason: 'Your income is too low. Build up your income before ascending.',
      postAscendIps: 0,
      timeToRecover: Infinity,
      bonusAfter: currentAscendBonus,
      permanentGain: 0,
    }
  }

  const bonusAfter = currentAscendBonus + ascendBonus
  const permanentGain = ascendBonus
  const postAscendIps = incomePerSecond * (1 + bonusAfter / 100)
  const timeToRecover = postAscendIps > 0 ? (currentCash / postAscendIps) : Infinity
  const rebuildSeconds = rebuildHours * 3600

  const shouldAscend =
    timeToRecover < rebuildSeconds * 3 && // Recover within 3x rebuild time
    ascendBonus > 0

  return {
    recommendation: shouldAscend ? 'ASCEND' : 'WAIT',
    reason: shouldAscend
      ? `Ascending grants +${ascendBonus}% permanent bonus. You can recover in ${formatTime(timeToRecover)}.`
      : `Recovery would take ${formatTime(timeToRecover)}. Wait until your income is higher.`,
    postAscendIps,
    timeToRecover,
    bonusAfter,
    permanentGain,
  }
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return '∞'
  if (seconds < 60) return `${Math.round(seconds)}s`
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h`
  return `${Math.round(seconds / 86400)}d`
}
