'use client'

import { useState, useMemo } from 'react'
import { calculateMultiplier, type MultiplierCalcInput } from '@/lib/calculators/multiplier'
import { formatNumber } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

export default function MultiplierClient() {
  const [form, setForm] = useState<MultiplierCalcInput>({
    baseIncome: 100,
    rebirthMultiplier: 2,
    boostMultiplier: 1,
    gamepassMultiplier: 1,
    investorBonus: 0,
    eventMultiplier: 1,
  })

  const result = useMemo(() => calculateMultiplier(form), [form])

  const updateField = (field: keyof MultiplierCalcInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const resetForm = () => {
    setForm({ baseIncome: 100, rebirthMultiplier: 2, boostMultiplier: 1, gamepassMultiplier: 1, investorBonus: 0, eventMultiplier: 1 })
  }

  const resultText = `Total: ${result.totalMultiplier.toFixed(2)}x | Income: ${formatNumber(result.finalIncome)}/s | Breakdown: ${result.breakdown.map((b) => `${b.source}: ${b.value}x`).join(', ')}`

  const inputFields: { key: keyof MultiplierCalcInput; label: string; step?: number }[] = [
    { key: 'baseIncome', label: 'Base Income per Second' },
    { key: 'rebirthMultiplier', label: 'Rebirth Multiplier', step: 0.1 },
    { key: 'boostMultiplier', label: 'Boost Multiplier', step: 0.1 },
    { key: 'gamepassMultiplier', label: 'Gamepass Multiplier', step: 0.1 },
    { key: 'investorBonus', label: 'Investor Bonus (%)' },
    { key: 'eventMultiplier', label: 'Event Multiplier', step: 0.1 },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {inputFields.map(({ key, label, step }) => (
          <div key={key}>
            <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
            id={key}
              type="number"
              value={form[key]}
              onChange={(e) => updateField(key, e.target.value)}
              step={step || 1}
              min={0}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            />
          </div>
        ))}
      </div>

      <button onClick={resetForm} className="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
        Reset
      </button>

      <div className="result-box">
        <div className="text-center mb-4">
          <p className="text-gray-500 text-sm">Total Multiplier</p>
          <p className="font-bold text-primary-600 text-3xl">{result.totalMultiplier.toFixed(2)}x</p>
          <p className="text-gray-500 text-sm mt-1">Final Income: <span className="font-bold text-gray-900">{formatNumber(result.finalIncome)}/s</span></p>
        </div>

        {result.breakdown.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Multiplier Breakdown</h4>
            <div className="space-y-2">
              {result.breakdown.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.source}</span>
                      <span className="font-medium text-gray-900">{item.value.toFixed(2)}x ({item.contribution.toFixed(0)}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-400 rounded-full h-2" style={{ width: `${item.contribution}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
