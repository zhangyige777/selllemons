export interface MultiplierCalcInput {
  baseIncome: number
  rebirthMultiplier: number
  boostMultiplier: number
  gamepassMultiplier: number
  investorBonus: number
  eventMultiplier: number
}

export interface MultiplierBreakdown {
  source: string
  value: number
  contribution: number // percentage of total multiplier
}

export interface MultiplierCalcResult {
  totalMultiplier: number
  finalIncome: number
  breakdown: MultiplierBreakdown[]
}

export function calculateMultiplier(input: MultiplierCalcInput): MultiplierCalcResult {
  const {
    baseIncome,
    rebirthMultiplier = 1,
    boostMultiplier = 1,
    gamepassMultiplier = 1,
    investorBonus = 0,
    eventMultiplier = 1,
  } = input

  const investorMultiplier = 1 + investorBonus / 100
  const totalMultiplier = rebirthMultiplier * boostMultiplier * gamepassMultiplier * investorMultiplier * eventMultiplier
  const finalIncome = baseIncome * totalMultiplier

  // Calculate breakdown - log scale for multiplicative contributions
  const sources: MultiplierBreakdown[] = [
    { source: 'Rebirth', value: rebirthMultiplier, contribution: 0 },
    { source: 'Boost', value: boostMultiplier, contribution: 0 },
    { source: 'Gamepass', value: gamepassMultiplier, contribution: 0 },
    { source: 'Investor', value: investorMultiplier, contribution: 0 },
    { source: 'Event', value: eventMultiplier, contribution: 0 },
  ]

  // Calculate percentage contribution (based on log for multiplicative factors)
  const totalLog = sources.reduce((sum, s) => sum + Math.log2(s.value), 0)
  sources.forEach((s) => {
    s.contribution = totalLog > 0 ? (Math.log2(s.value) / totalLog) * 100 : 0
  })

  return {
    totalMultiplier,
    finalIncome,
    breakdown: sources.filter((s) => s.value > 1),
  }
}
