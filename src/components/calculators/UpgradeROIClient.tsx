'use client'

import { useState, useMemo } from 'react'
import { calculateUpgradeROI, type UpgradeInput, type UpgradeResult } from '@/lib/calculators/upgrade-roi'
import { formatNumber, formatTime } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

const defaultUpgrades: UpgradeInput[] = [
  { name: 'Upgrade 1', cost: 1000, incomeBefore: 100, incomeAfter: 150 },
  { name: 'Upgrade 2', cost: 5000, incomeBefore: 150, incomeAfter: 400 },
  { name: 'Upgrade 3', cost: 25000, incomeBefore: 400, incomeAfter: 1200 },
]

export default function UpgradeROIClient() {
  const [upgrades, setUpgrades] = useState<UpgradeInput[]>(defaultUpgrades)

  const results = useMemo(() => calculateUpgradeROI(upgrades), [upgrades])

  const updateUpgrade = (index: number, field: keyof UpgradeInput, value: string) => {
    setUpgrades((prev) =>
      prev.map((u, i) =>
        i === index ? { ...u, [field]: field === 'name' ? value : parseFloat(value) || 0 } : u
      )
    )
  }

  const addUpgrade = () => {
    setUpgrades((prev) => [...prev, { name: `Upgrade ${prev.length + 1}`, cost: 0, incomeBefore: 0, incomeAfter: 0 }])
  }

  const removeUpgrade = (index: number) => {
    setUpgrades((prev) => prev.filter((_, i) => i !== index))
  }

  const resetForm = () => setUpgrades(defaultUpgrades)

  const resultText = results
    .map((r) => `${r.name}: ROI ${formatTime(r.roiSeconds)} | Priority ${r.priorityScore.toFixed(1)}`)
    .join('\n')

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {upgrades.map((upgrade, index) => (
          <div key={index} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <input
                id={`upgrade-name-${index}`}
                type="text"
                value={upgrade.name}
                onChange={(e) => updateUpgrade(index, 'name', e.target.value)}
                className="text-sm font-medium bg-transparent border-b border-gray-300 focus:border-primary-400 outline-none px-1"
                placeholder="Upgrade name"
              />
              <button onClick={() => removeUpgrade(index)} className="text-gray-400 hover:text-red-500 text-sm">✕</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label htmlFor={`upgrade-cost-${index}`} className="block text-xs text-gray-500">Cost</label>
                <input
                  id={`upgrade-cost-${index}`}
                  type="number"
                  value={upgrade.cost}
                  onChange={(e) => updateUpgrade(index, 'cost', e.target.value)}
                  min={0}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label htmlFor={`upgrade-before-${index}`} className="block text-xs text-gray-500">Income Before</label>
                <input
                  id={`upgrade-before-${index}`}
                  type="number"
                  value={upgrade.incomeBefore}
                  onChange={(e) => updateUpgrade(index, 'incomeBefore', e.target.value)}
                  min={0}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label htmlFor={`upgrade-after-${index}`} className="block text-xs text-gray-500">Income After</label>
                <input
                  id={`upgrade-after-${index}`}
                  type="number"
                  value={upgrade.incomeAfter}
                  onChange={(e) => updateUpgrade(index, 'incomeAfter', e.target.value)}
                  min={0}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button onClick={addUpgrade} className="text-sm px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
          + Add Upgrade
        </button>
        <button onClick={resetForm} className="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
          Reset
        </button>
      </div>

      {results.length > 0 && (
        <div className="result-box">
          <h3 className="font-semibold text-gray-900 mb-3">ROI Ranking (Best First)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-primary-200">
                  <th className="pb-2 pr-3">#</th>
                  <th className="pb-2 pr-3">Upgrade</th>
                  <th className="pb-2 pr-3">ROI Time</th>
                  <th className="pb-2 pr-3">Priority</th>
                  <th className="pb-2">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-2 pr-3 font-bold text-primary-600">{i + 1}</td>
                    <td className="py-2 pr-3 font-medium text-gray-900">{r.name}</td>
                    <td className="py-2 pr-3">{formatTime(r.roiSeconds)}</td>
                    <td className="py-2 pr-3">{r.priorityScore.toFixed(1)}</td>
                    <td className="py-2 text-xs">{r.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3">
            <CopyButton text={resultText} />
          </div>
        </div>
      )}
    </div>
  )
}
