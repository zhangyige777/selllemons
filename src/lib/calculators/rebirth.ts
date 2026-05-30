export interface RebirthCalcInput {
  currentCash: number
  incomePerSecond: number
  rebirthMultiplierBonus: number
  currentRebirthMultiplier: number
  rebuildMinutes: number
  targetCash: number
}

export interface RebirthCalcResult {
  recommendation: 'REBIRTH' | 'WAIT'
  reason: string
  postRebirthIps: number
  timeToRecover: number // seconds
  multiplierAfter: number
  breakEvenMinutes: number
  warning?: string
}

export function calculateRebirth(input: RebirthCalcInput): RebirthCalcResult {
  const {
    currentCash,
    incomePerSecond,
    rebirthMultiplierBonus,
    currentRebirthMultiplier,
    rebuildMinutes,
    targetCash,
  } = input

  if (incomePerSecond <= 0) {
    return {
      recommendation: 'WAIT',
      reason: 'Your income is too low to benefit from rebirth. Increase your income first.',
      postRebirthIps: 0,
      timeToRecover: Infinity,
      multiplierAfter: currentRebirthMultiplier,
      breakEvenMinutes: Infinity,
      warning: 'Rebirth requires a stable income stream.',
    }
  }

  const multiplierAfter = currentRebirthMultiplier + rebirthMultiplierBonus
  const postRebirthIps = (incomePerSecond / currentRebirthMultiplier) * multiplierAfter

  // Time to recover current cash at post-rebirth rate
  const timeToRecover = postRebirthIps > 0 ? currentCash / postRebirthIps : Infinity
  const breakEvenMinutes = timeToRecover / 60

  // Time to reach target cash at post-rebirth rate
  const timeToTarget = postRebirthIps > 0 ? targetCash / postRebirthIps : Infinity
  const timeToTargetAtCurrentRate = incomePerSecond > 0 ? targetCash / incomePerSecond : Infinity

  const shouldRebirth =
    breakEvenMinutes < rebuildMinutes * 2 && // Can recover within 2x rebuild time
    postRebirthIps > incomePerSecond * 0.8    // Post-rebirth income is at least 80% of current

  return {
    recommendation: shouldRebirth ? 'REBIRTH' : 'WAIT',
    reason: shouldRebirth
      ? `You can recover your current cash (${formatCash(currentCash)}) in ${Math.round(breakEvenMinutes)} minutes after rebirth. Your income rate increases by ${((multiplierAfter / currentRebirthMultiplier - 1) * 100).toFixed(0)}%.`
      : `Recovering would take ${Math.round(breakEvenMinutes)} minutes, which is too long. Wait until your income or multiplier improves.`,
    postRebirthIps,
    timeToRecover,
    multiplierAfter,
    breakEvenMinutes,
  }
}

function formatCash(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B'
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M'
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K'
  return n.toFixed(0)
}
