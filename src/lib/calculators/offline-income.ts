export interface OfflineCalcInput {
  incomePerSecond: number
  offlineHours: number
  rebirthMultiplier: number
  boostMultiplier: number
  investorBonus: number
  capAmount?: number
}

export interface OfflineCalcResult {
  totalMultiplier: number
  offlineIncome: number
  cappedOfflineIncome: number
  isCapped: boolean
  incomePerHour: number
  projectedTotal: number
}

export function calculateOfflineIncome(input: OfflineCalcInput): OfflineCalcResult {
  const {
    incomePerSecond,
    offlineHours,
    rebirthMultiplier = 1,
    boostMultiplier = 1,
    investorBonus = 0,
    capAmount,
  } = input

  // 100% offline income rate confirmed by game description
  const totalMultiplier = rebirthMultiplier * boostMultiplier * (1 + investorBonus / 100)
  const effectiveCps = incomePerSecond * totalMultiplier
  const offlineIncome = effectiveCps * offlineHours * 3600
  const incomePerHour = effectiveCps * 3600

  const cappedOfflineIncome = capAmount ? Math.min(offlineIncome, capAmount) : offlineIncome
  const isCapped = capAmount ? offlineIncome > capAmount : false

  return {
    totalMultiplier,
    offlineIncome,
    cappedOfflineIncome,
    isCapped,
    incomePerHour,
    projectedTotal: cappedOfflineIncome,
  }
}
