const fs = require('fs');
const path = require('path');

const pages = [
  {s:'best-upgrades',h1:'Best Upgrades in Sell Lemons',t:'Best Upgrades in Sell Lemons — What to Buy First',d:'Discover the best upgrades in Sell Lemons.',k:"'Sell Lemons best upgrades'"},
  {s:'upgrade-priority',h1:'Sell Lemons Upgrade Priority',t:'Sell Lemons Upgrade Priority — What to Buy in Order',d:'Learn the recommended upgrade priority order.',k:"'Sell Lemons upgrade priority'"},
  {s:'when-to-rebirth',h1:'When to Rebirth in Sell Lemons',t:'When to Rebirth in Sell Lemons — Rebirth Timing Guide',d:'Learn the best time to rebirth in Sell Lemons.',k:"'Sell Lemons when to rebirth'"},
  {s:'when-to-ascend',h1:'When to Ascend in Sell Lemons',t:'When to Ascend in Sell Lemons — Ascend Timing Guide',d:'Learn when to ascend in Sell Lemons.',k:"'Sell Lemons when to ascend'"},
  {s:'money-fast',h1:'How to Make Money Fast in Sell Lemons',t:'How to Make Money Fast in Sell Lemons',d:'Learn the fastest ways to earn money in Sell Lemons.',k:"'Sell Lemons money fast'"},
  {s:'best-strategy',h1:'Sell Lemons Best Strategy',t:'Sell Lemons Best Strategy — Optimal Progression Guide',d:'The best overall strategy for Sell Lemons.',k:"'Sell Lemons best strategy'"},
  {s:'beginner-guide',h1:'Sell Lemons Beginner Guide',t:'Sell Lemons Beginner Guide — How to Get Started',d:'Everything you need to know to start playing Sell Lemons.',k:"'Sell Lemons beginner guide'"},
  {s:'guide',h1:'Sell Lemons Complete Guide',t:'Sell Lemons Complete Guide — Everything You Need to Know',d:'The complete guide to Sell Lemons on Roblox.',k:"'Sell Lemons guide'"},
  {s:'endgame',h1:'Sell Lemons Endgame Guide',t:'Sell Lemons Endgame Guide — Late Game Strategy',d:'Endgame strategies for Sell Lemons.',k:"'Sell Lemons endgame'"},
  {s:'offline-earnings',h1:'Sell Lemons Offline Earnings',t:'Sell Lemons Offline Earnings — How Offline Income Works',d:'Learn how offline earnings work in Sell Lemons.',k:"'Sell Lemons offline earnings'"},
  {s:'rebirth-multiplier',h1:'Sell Lemons Rebirth Multiplier',t:'Sell Lemons Rebirth Multiplier — How It Works',d:'Learn how the rebirth multiplier works.',k:"'Sell Lemons rebirth multiplier'"},
  {s:'ascend',h1:'Sell Lemons Ascend System Guide',t:'Sell Lemons Ascend System — How Ascension Works',d:'Learn how the Ascend system works.',k:"'Sell Lemons ascend system'"},
  {s:'multipliers',h1:'Sell Lemons Multipliers Guide',t:'Sell Lemons Multipliers Guide — All Multiplier Sources',d:'Complete guide to all multiplier sources.',k:"'Sell Lemons multipliers'"},
  {s:'boosts',h1:'Sell Lemons Boosts Guide',t:'Sell Lemons Boosts Guide — How Boosts Work',d:'Learn how boosts work in Sell Lemons.',k:"'Sell Lemons boosts'"},
  {s:'managers',h1:'Sell Lemons Managers Guide',t:'Sell Lemons Managers Guide — How Managers Work',d:'Learn how managers work in Sell Lemons.',k:"'Sell Lemons managers'"},
  {s:'alien-investors',h1:'Sell Lemons Alien Investors Guide',t:'Sell Lemons Alien Investors — How They Work',d:'Learn how alien investors work.',k:"'Sell Lemons alien investors'"},
  {s:'deals',h1:'Sell Lemons Deals Guide',t:'Sell Lemons Deals Guide — How Deals Work',d:'Learn how deals work in Sell Lemons.',k:"'Sell Lemons deals'"},
  {s:'npc-deals',h1:'Sell Lemons NPC Deals Guide',t:'Sell Lemons NPC Deals — All NPC Deals Explained',d:'Learn about NPC deals in Sell Lemons.',k:"'Sell Lemons NPC deals'"},
  {s:'phone-offers',h1:'Sell Lemons Phone Offers Guide',t:'Sell Lemons Phone Offers — All Phone Offers Explained',d:'Learn about phone offers in Sell Lemons.',k:"'Sell Lemons phone offers'"},
  {s:'powers',h1:'Sell Lemons Unique Powers Guide',t:'Sell Lemons Unique Powers — All Powers Explained',d:'Learn about unique powers in Sell Lemons.',k:"'Sell Lemons powers'"},
  {s:'gamepasses',h1:'Sell Lemons Gamepasses Guide',t:'Sell Lemons Gamepasses — Are They Worth It?',d:'Learn about all gamepasses in Sell Lemons.',k:"'Sell Lemons gamepasses'"},
  {s:'sewer-key',h1:'Sell Lemons Sewer Key Guide',t:'Sell Lemons Sewer Key — How to Find the Sewer Key',d:'Find the Sewer Key in Sell Lemons.',k:"'Sell Lemons sewer key'"},
  {s:'ufo-key',h1:'Sell Lemons UFO Key Guide',t:'Sell Lemons UFO Key — How to Find the UFO Key',d:'Find the UFO Key in Sell Lemons.',k:"'Sell Lemons UFO key'"},
  {s:'cosmic-cash',h1:'Sell Lemons Cosmic Cash Guide',t:'Sell Lemons Cosmic Cash — What Is Cosmic Cash',d:'Learn about Cosmic Cash in Sell Lemons.',k:"'Sell Lemons Cosmic Cash'"},
  {s:'purity-fruit',h1:'Sell Lemons Purity Fruit Guide',t:'Sell Lemons Purity Fruit — What Is Purity Fruit',d:'Learn about the Purity Fruit in Sell Lemons.',k:"'Sell Lemons Purity Fruit'"},
  {s:'badges',h1:'Sell Lemons Badges Guide',t:'Sell Lemons Badges — All Badges and How to Get Them',d:'Complete list of all Sell Lemons badges.',k:"'Sell Lemons badges'"},
  {s:'cosmic-farmer-badge',h1:'Sell Lemons Cosmic Farmer Badge',t:'Sell Lemons Cosmic Farmer Badge — How to Get It',d:'Learn how to earn the Cosmic Farmer Badge.',k:"'Sell Lemons Cosmic Farmer badge'"},
  {s:'good-samaritan-badge',h1:'Sell Lemons Good Samaritan Badge',t:'Sell Lemons Good Samaritan Badge — How to Get It',d:'Learn how to earn the Good Samaritan Badge.',k:"'Sell Lemons Good Samaritan badge'"},
  {s:'secrets',h1:'Sell Lemons Secrets Guide',t:'Sell Lemons Secrets — All Known Secrets',d:'Discover all known secrets in Sell Lemons.',k:"'Sell Lemons secrets'"},
  {s:'hidden-items',h1:'Sell Lemons Hidden Items Guide',t:'Sell Lemons Hidden Items — All Hidden Items List',d:'Complete list of hidden items in Sell Lemons.',k:"'Sell Lemons hidden items'"},
  {s:'redacted-area',h1:'Sell Lemons Redacted Area Guide',t:'Sell Lemons Redacted Area — What Is the Redacted Area',d:'Learn about the Redacted Area in Sell Lemons.',k:"'Sell Lemons redacted area'"},
  {s:'lemon-dash',h1:'Sell Lemons Lemon Dash Guide',t:'Sell Lemons Lemon Dash — Complete Guide',d:'Learn about Lemon Dash in Sell Lemons.',k:"'Sell Lemons Lemon Dash'"},
  {s:'lemon-depot',h1:'Sell Lemons Lemon Depot Guide',t:'Sell Lemons Lemon Depot — Complete Guide',d:'Learn about Lemon Depot in Sell Lemons.',k:"'Sell Lemons Lemon Depot'"},
  {s:'lemon-trading',h1:'Sell Lemons Lemon Trading Guide',t:'Sell Lemons Lemon Trading — Complete Guide',d:'Learn about Lemon Trading in Sell Lemons.',k:"'Sell Lemons Lemon Trading'"},
  {s:'lemon-labs',h1:'Sell Lemons Lemon Labs Guide',t:'Sell Lemons Lemon Labs — Complete Guide',d:'Learn about Lemon Labs in Sell Lemons.',k:"'Sell Lemons Lemon Labs'"},
  {s:'robotics',h1:'Sell Lemons Robotics Guide',t:'Sell Lemons Robotics — Complete Guide',d:'Learn about the Robotics system in Sell Lemons.',k:"'Sell Lemons Robotics'"},
  {s:'void-evolution',h1:'Sell Lemons Void Evolution Guide',t:'Sell Lemons Void Evolution — Complete Guide',d:'Learn about Void Evolution in Sell Lemons.',k:"'Sell Lemons Void Evolution'"},
  {s:'oranges',h1:'Sell Lemons Oranges Guide',t:'Sell Lemons Oranges — How Oranges Work',d:'Learn about the Oranges system in Sell Lemons.',k:"'Sell Lemons oranges'"},
  {s:'hill-expansion',h1:'Sell Lemons Hill Expansion Guide',t:'Sell Lemons Hill Expansion — Complete Guide',d:'Learn about Hill Expansion in Sell Lemons.',k:"'Sell Lemons hill expansion'"}
];

let count = 0;
for (const p of pages) {
  const dir = path.join('src/app', p.s);
  fs.mkdirSync(dir, { recursive: true });
  const fp = path.join(dir, 'page.tsx');
  if (fs.existsSync(fp)) { console.log('SKIP: ' + p.s); continue; }

  const fn = p.s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');

  const template = `import type { Metadata } from 'next'
import { generateSEOMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import LastUpdated from '@/components/ui/LastUpdated'
import { getPageBySlug } from '@/data/pages'
import ContentPageTemplate from '@/components/ContentPageTemplate'

const pageData = getPageBySlug('${p.s}')

export const metadata: Metadata = generateSEOMetadata({
  title: '${p.t}',
  description: '${p.d}',
  path: '/${p.s}/',
  keywords: [${p.k}],
})

export default function ${fn}Page() {
  if (pageData) {
    return <ContentPageTemplate page={pageData} />
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumbs items={[{ label: '${p.h1}' }]} />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">${p.h1}</h1>
      <p className="text-gray-600">${p.d}</p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800">
        <p className="font-medium">Content Coming Soon</p>
        <p>This page is being updated with verified information. Check back regularly for the latest details.</p>
      </div>
      <LastUpdated />
    </div>
  )
}
`;

  fs.writeFileSync(fp, template);
  count++;
}
console.log('Created ' + count + ' content pages');
