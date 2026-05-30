import type { DataStatus, SourceRef } from './types'

export interface GameArea {
  slug: string
  name: string
  description: string
  unlockRequirement: string
  dataStatus: DataStatus
  sources: SourceRef[]
}

export interface UpgradeTier {
  name: string
  baseCost: number
  incomeGain: number
  stage: 'early' | 'mid' | 'late' | 'endgame'
  description: string
}

export interface MultiplierSource {
  name: string
  type: 'rebirth' | 'boost' | 'gamepass' | 'investor' | 'event' | 'manager'
  description: string
  defaultValue: number
  min: number
  max: number
  dataStatus: DataStatus
}

export interface StageConfig {
  stage: 'early' | 'mid' | 'late' | 'endgame'
  label: string
  description: string
  nextGoal: string
  recommendedOrder: string
  warning: string | null
  recommendedTool: string
  recommendedToolName: string
}

export const multiplierSources: MultiplierSource[] = [
  {
    name: 'Rebirth Multiplier',
    type: 'rebirth',
    description: 'Multiplier gained from rebirthing. Increases with each rebirth.',
    defaultValue: 1,
    min: 1,
    max: 1000,
    dataStatus: 'confirmed',
  },
  {
    name: 'Boost Multiplier',
    type: 'boost',
    description: 'Temporary boost multiplier from in-game boosts or gamepasses.',
    defaultValue: 1,
    min: 1,
    max: 10,
    dataStatus: 'possible',
  },
  {
    name: 'Gamepass Multiplier',
    type: 'gamepass',
    description: 'Permanent multiplier from purchased gamepasses.',
    defaultValue: 1,
    min: 1,
    max: 5,
    dataStatus: 'possible',
  },
  {
    name: 'Alien Investor Bonus',
    type: 'investor',
    description: 'Bonus percentage from alien investors.',
    defaultValue: 0,
    min: 0,
    max: 500,
    dataStatus: 'possible',
  },
  {
    name: 'Event Multiplier',
    type: 'event',
    description: 'Special event multiplier (seasonal or limited time).',
    defaultValue: 1,
    min: 1,
    max: 5,
    dataStatus: 'unconfirmed',
  },
  {
    name: 'Manager Bonus',
    type: 'manager',
    description: 'Bonus from hired managers.',
    defaultValue: 1,
    min: 1,
    max: 3,
    dataStatus: 'unconfirmed',
  },
]

export const upgradeTiers: UpgradeTier[] = [
  // Early game
  { name: 'Lemon Stand Upgrade', baseCost: 100, incomeGain: 5, stage: 'early', description: 'Increases lemons sold per second.' },
  { name: 'Cash Register', baseCost: 500, incomeGain: 20, stage: 'early', description: 'Boosts cash per lemon sold.' },
  { name: 'Lemon Quality', baseCost: 1000, incomeGain: 50, stage: 'early', description: 'Higher quality lemons sell for more.' },
  { name: 'Storage Expansion', baseCost: 2500, incomeGain: 100, stage: 'early', description: 'Hold more lemons for bulk selling.' },
  // Mid game
  { name: 'Lemon Factory', baseCost: 10000, incomeGain: 400, stage: 'mid', description: 'Automated lemon production.' },
  { name: 'Delivery Truck', baseCost: 25000, incomeGain: 800, stage: 'mid', description: 'Passive income from deliveries.' },
  { name: 'Market Stall', baseCost: 50000, incomeGain: 1500, stage: 'mid', description: 'Sell at premium market prices.' },
  { name: 'Manager Hire', baseCost: 100000, incomeGain: 3000, stage: 'mid', description: 'Manager runs operations automatically.' },
  // Late game
  { name: 'Lemon Lab', baseCost: 500000, incomeGain: 10000, stage: 'late', description: 'Research better lemon varieties.' },
  { name: 'Trade Route', baseCost: 1000000, incomeGain: 20000, stage: 'late', description: 'Export lemons globally.' },
  { name: 'Robotics Bay', baseCost: 5000000, incomeGain: 80000, stage: 'late', description: 'Robot-assisted production.' },
  { name: 'Void Portal', baseCost: 25000000, incomeGain: 300000, stage: 'late', description: 'Sell lemons across dimensions.' },
  // Endgame
  { name: 'Cosmic Farm', baseCost: 100000000, incomeGain: 1000000, stage: 'endgame', description: 'Cosmic-scale lemon production.' },
  { name: 'Alien Deal', baseCost: 500000000, incomeGain: 4000000, stage: 'endgame', description: 'Interstellar lemon trade.' },
  { name: 'Purity Engine', baseCost: 2500000000, incomeGain: 15000000, stage: 'endgame', description: 'Pure lemon essence extraction.' },
  { name: 'Ascension Gate', baseCost: 10000000000, incomeGain: 50000000, stage: 'endgame', description: 'Transcend to lemon godhood.' },
]

export const stageConfigs: StageConfig[] = [
  {
    stage: 'early',
    label: 'Early Game',
    description: 'Focus on basic lemon production and selling. Build up your first income streams.',
    nextGoal: 'Reach 10,000 cash to unlock Lemon Factory.',
    recommendedOrder: 'Lemon Stand → Cash Register → Lemon Quality → Storage Expansion',
    warning: null,
    recommendedTool: '/upgrade-calculator/',
    recommendedToolName: 'Upgrade ROI Calculator',
  },
  {
    stage: 'mid',
    label: 'Mid Game',
    description: 'Automate production with factories and managers. Start thinking about your first rebirth.',
    nextGoal: 'Reach 1M cash and prepare for first rebirth.',
    recommendedOrder: 'Lemon Factory → Manager Hire → Delivery Truck → Market Stall',
    warning: 'Do not rebirth until your income is stable above 5,000/sec after rebirth.',
    recommendedTool: '/rebirth-calculator/',
    recommendedToolName: 'Rebirth Calculator',
  },
  {
    stage: 'late',
    label: 'Late Game',
    description: 'Optimize multipliers and unlock advanced systems like Robotics and Void Evolution.',
    nextGoal: 'Unlock Void Portal and maximize rebirth multiplier.',
    recommendedOrder: 'Lemon Lab → Trade Route → Robotics Bay → Void Portal',
    warning: 'Check your multiplier breakdown before committing to expensive late-game upgrades.',
    recommendedTool: '/multiplier-calculator/',
    recommendedToolName: 'Multiplier Calculator',
  },
  {
    stage: 'endgame',
    label: 'Endgame',
    description: 'Pursue Cosmic Cash, Purity Fruit, and hidden content. Consider ascending for permanent bonuses.',
    nextGoal: 'Collect all hidden items and maximize ascend bonuses.',
    recommendedOrder: 'Cosmic Farm → Alien Deal → Purity Engine → Ascension Gate',
    warning: 'Ascension resets progress but grants permanent multipliers. Use the Ascend Calculator first.',
    recommendedTool: '/ascend-calculator/',
    recommendedToolName: 'Ascend Calculator',
  },
]

export function getUpgradesByStage(stage: string): UpgradeTier[] {
  return upgradeTiers.filter((u) => u.stage === stage)
}

export function getStageConfig(stage: string): StageConfig | undefined {
  return stageConfigs.find((s) => s.stage === stage)
}
