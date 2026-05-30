export interface UpgradeInput {
  name: string
  cost: number
  incomeBefore: number
  incomeAfter: number
}

export interface UpgradeResult {
  name: string
  cost: number
  incomeBefore: number
  incomeAfter: number
  incomeGain: number
  roiSeconds: number
  priorityScore: number
  recommendation: string
}

export function calculateUpgradeROI(upgrades: UpgradeInput[]): UpgradeResult[] {
  const results = upgrades
    .filter((u) => u.cost > 0 && u.incomeAfter > u.incomeBefore)
    .map((u) => {
      const incomeGain = u.incomeAfter - u.incomeBefore
      const roiSeconds = u.cost / incomeGain
      const priorityScore = (incomeGain / u.cost) * 100

      let recommendation: string
      if (roiSeconds < 60) {
        recommendation = 'Buy now - pays for itself in under a minute!'
      } else if (roiSeconds < 300) {
        recommendation = 'Good buy - pays for itself in under 5 minutes.'
      } else if (roiSeconds < 3600) {
        recommendation = 'Decent - consider if you have no better options.'
      } else {
        recommendation = 'Wait - there may be better upgrades to buy first.'
      }

      return {
        name: u.name,
        cost: u.cost,
        incomeBefore: u.incomeBefore,
        incomeAfter: u.incomeAfter,
        incomeGain,
        roiSeconds,
        priorityScore,
        recommendation,
      }
    })

  return results.sort((a, b) => a.roiSeconds - b.roiSeconds)
}
