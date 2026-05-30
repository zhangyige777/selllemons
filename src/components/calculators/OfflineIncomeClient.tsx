'use client'

import { useState, useMemo } from 'react'
import { calculateOfflineIncome, type OfflineCalcInput } from '@/lib/calculators/offline-income'
import { formatNumber } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

export default function OfflineIncomeClient() {
  const [form, setForm] = useState<OfflineCalcInput>({
    incomePerSecond: 5000,
    offlineHours: 8,
    rebirthMultiplier: 2,
    boostMultiplier: 1,
    investorBonus: 0,
  })

  const result = useMemo(() => calculateOfflineIncome(form), [form])

  const updateField = (field: keyof OfflineCalcInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const resetForm = () => {
    setForm({ incomePerSecond: 5000, offlineHours: 8, rebirthMultiplier: 2, boostMultiplier: 1, investorBonus: 0 })
  }

  const resultText = `Offline ${form.offlineHours}h: ${formatNumber(result.projectedTotal)} | Rate: ${formatNumber(result.incomePerHour)}/hr | Multiplier: ${result.totalMultiplier.toFixed(2)}x`

  const inputFields: { key: keyof OfflineCalcInput; label: string; step?: number }[] = [
    { key: 'incomePerSecond', label: 'Income per Second' },
    { key: 'offlineHours', label: 'Offline Hours' },
    { key: 'rebirthMultiplier', label: 'Rebirth Multiplier', step: 0.1 },
    { key: 'boostMultiplier', label: 'Boost Multiplier', step: 0.1 },
    { key: 'investorBonus', label: 'Investor Bonus (%)' },
  ]

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800 mb-4">
        💡 Sell Lemons features <strong>100% offline income</strong> - you earn the same rate while offline!
      </div>

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
        <h3 className="font-semibold text-gray-900 mb-3">Offline Earnings Estimate</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-500">Total Multiplier</p>
            <p className="font-bold text-primary-600">{result.totalMultiplier.toFixed(2)}x</p>
          </div>
          <div>
            <p className="text-gray-500">Income per Hour</p>
            <p className="font-bold text-gray-900">{formatNumber(result.incomePerHour)}</p>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-primary-200">
          <p className="text-gray-500 text-sm">After {form.offlineHours} hours offline</p>
          <p className="font-bold text-gray-900 text-2xl">{formatNumber(result.projectedTotal)}</p>
          {result.isCapped && (
            <p className="text-xs text-red-600 mt-1">⚠️ This may be capped by the game. Actual amount may be lower.</p>
          )}
        </div>
        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
