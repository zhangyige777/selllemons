export interface MainCalcInput {
  cashPerSecond: number
  cashPerLemon: number
  currentMultiplier: number
  boostMultiplier: number
  rebirthMultiplier: number
  investorBonus: number
  offlineHours: number
}

export interface MainCalcResult {
  effectiveCps: number
  perMinute: number
  perHour: number
  offlineIncome: number
  totalMultiplier: number
  lemonsPerHour: number
}

export function calculateMainEarnings(input: MainCalcInput): MainCalcResult {
  const {
    cashPerSecond,
    cashPerLemon,
    currentMultiplier = 1,
    boostMultiplier = 1,
    rebirthMultiplier = 1,
    investorBonus = 0,
    offlineHours = 0,
  } = input

  const totalMultiplier = currentMultiplier * boostMultiplier * rebirthMultiplier * (1 + investorBonus / 100)
  const effectiveCps = cashPerSecond * totalMultiplier
  const perMinute = effectiveCps * 60
  const perHour = effectiveCps * 3600
  const offlineIncome = effectiveCps * offlineHours * 3600
  const lemonsPerHour = cashPerLemon > 0 ? perHour / cashPerLemon : 0

  return {
    effectiveCps,
    perMinute,
    perHour,
    offlineIncome,
    totalMultiplier,
    lemonsPerHour,
  }
}
