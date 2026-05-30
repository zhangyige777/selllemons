'use client'

import { useState, useMemo } from 'react'
import { calculateMainEarnings, type MainCalcInput } from '@/lib/calculators/main-calculator'
import { formatNumber, formatTime } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

export default function MainCalculatorClient() {
  const [form, setForm] = useState<MainCalcInput>({
    cashPerSecond: 100,
    cashPerLemon: 1,
    currentMultiplier: 1,
    boostMultiplier: 1,
    rebirthMultiplier: 1,
    investorBonus: 0,
    offlineHours: 8,
  })

  const result = useMemo(() => calculateMainEarnings(form), [form])

  const updateField = (field: keyof MainCalcInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const resetForm = () => {
    setForm({ cashPerSecond: 100, cashPerLemon: 1, currentMultiplier: 1, boostMultiplier: 1, rebirthMultiplier: 1, investorBonus: 0, offlineHours: 8 })
  }

  const resultText = `Earnings: ${formatNumber(result.effectiveCps)}/s | ${formatNumber(result.perHour)}/hr | Offline ${form.offlineHours}h: ${formatNumber(result.offlineIncome)} | Total Multiplier: ${result.totalMultiplier.toFixed(2)}x`

  const inputFields: { key: keyof MainCalcInput; label: string; step?: number }[] = [
    { key: 'cashPerSecond', label: 'Cash per Second' },
    { key: 'cashPerLemon', label: 'Cash per Lemon' },
    { key: 'currentMultiplier', label: 'Current Multiplier', step: 0.1 },
    { key: 'boostMultiplier', label: 'Boost Multiplier', step: 0.1 },
    { key: 'rebirthMultiplier', label: 'Rebirth Multiplier', step: 0.1 },
    { key: 'investorBonus', label: 'Investor Bonus (%)', step: 1 },
    { key: 'offlineHours', label: 'Offline Hours', step: 1 },
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

      <div className="flex gap-2">
        <button onClick={resetForm} className="text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
          Reset
        </button>
      </div>

      <div className="result-box">
        <h3 className="font-semibold text-gray-900 mb-3">Results</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-500">Per Second</p>
            <p className="font-bold text-gray-900 text-lg">{formatNumber(result.effectiveCps)}</p>
          </div>
          <div>
            <p className="text-gray-500">Per Minute</p>
            <p className="font-bold text-gray-900">{formatNumber(result.perMinute)}</p>
          </div>
          <div>
            <p className="text-gray-500">Per Hour</p>
            <p className="font-bold text-gray-900">{formatNumber(result.perHour)}</p>
          </div>
          <div>
            <p className="text-gray-500">Total Multiplier</p>
            <p className="font-bold text-primary-600">{result.totalMultiplier.toFixed(2)}x</p>
          </div>
        </div>
        {form.offlineHours > 0 && (
          <div className="mt-3 pt-3 border-t border-primary-200">
            <p className="text-gray-500 text-sm">Offline Income ({form.offlineHours}h)</p>
            <p className="font-bold text-gray-900 text-xl">{formatNumber(result.offlineIncome)}</p>
          </div>
        )}
        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
