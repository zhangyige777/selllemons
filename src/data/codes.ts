import type { CodeStatus } from './types'

export interface GameCode {
  code: string
  reward: string
  status: CodeStatus
  addedDate: string
  expiredDate?: string
  source: string
}

// No verified codes at this time - honest strategy
// We will add codes here only after they are confirmed in-game or by an official source.
export const codes: GameCode[] = []

export function getActiveCodes(): GameCode[] {
  return codes.filter((c) => c.status === 'active')
}

export function getExpiredCodes(): GameCode[] {
  return codes.filter((c) => c.status === 'expired')
}

export function getLastCheckedDate(): string {
  return 'June 8, 2026'
}

export const noCodesMessage =
  'No verified Sell Lemons codes are available right now. We check updates regularly and will list active codes here only after they are confirmed in-game or by an official source.'

export const codesFAQ = [
  {
    question: 'Are there Sell Lemons codes?',
    answer:
      'We check for new Sell Lemons codes regularly. When codes are confirmed, we list them here immediately. Currently, no verified codes are available.',
  },
  {
    question: 'How do I redeem codes in Sell Lemons?',
    answer:
      'In most Roblox games, you can redeem codes by opening the game, finding the codes or Twitter button (usually on the side of the screen or in settings), entering the code, and pressing redeem. If Sell Lemons does not have a code redemption system yet, codes may be added in a future update.',
  },
  {
    question: 'How often are codes checked?',
    answer:
      'We check for new Sell Lemons codes at least once per week. The "Last Checked" date on this page shows when we last verified.',
  },
  {
    question: 'Where do Sell Lemons codes come from?',
    answer:
      'Codes typically come from the game developer\'s social media (Twitter/X, Discord), Roblox game description updates, or special events. We only list codes that have been confirmed to work.',
  },
]
