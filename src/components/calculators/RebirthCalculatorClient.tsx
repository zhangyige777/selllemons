'use client'

import { useState, useMemo } from 'react'
import { calculateRebirth, type RebirthCalcInput } from '@/lib/calculators/rebirth'
import { formatNumber, formatTime } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

export default function RebirthCalculatorClient() {
  const [form, setForm] = useState<RebirthCalcInput>({
    currentCash: 1000000,
    incomePerSecond: 5000,
    rebirthMultiplierBonus: 0.5,
    currentRebirthMultiplier: 2,
    rebuildMinutes: 30,
    targetCash: 5000000,
  })

  const result = useMemo(() => calculateRebirth(form), [form])

  const updateField = (field: keyof RebirthCalcInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const resetForm = () => {
    setForm({ currentCash: 1000000, incomePerSecond: 5000, rebirthMultiplierBonus: 0.5, currentRebirthMultiplier: 2, rebuildMinutes: 30, targetCash: 5000000 })
  }

  const resultText = result.recommendation === 'REBIRTH'
    ? `REBIRTH NOW! Post-rebirth income: ${formatNumber(result.postRebirthIps)}/s | Recover in ${formatTime(result.timeToRecover)} | New multiplier: ${result.multiplierAfter.toFixed(2)}x`
    : `WAIT. Reason: ${result.reason}`

  const inputFields: { key: keyof RebirthCalcInput; label: string; step?: number }[] = [
    { key: 'currentCash', label: 'Current Cash' },
    { key: 'incomePerSecond', label: 'Income per Second' },
    { key: 'rebirthMultiplierBonus', label: 'Rebirth Multiplier Bonus', step: 0.1 },
    { key: 'currentRebirthMultiplier', label: 'Current Rebirth Multiplier', step: 0.1 },
    { key: 'rebuildMinutes', label: 'Rebuild Time (minutes)' },
    { key: 'targetCash', label: 'Target Cash' },
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
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
          result.recommendation === 'REBIRTH' ? 'bg-green-100 text-green-800' : 'bg-primary-100 text-primary-800'
        }`}>
          {result.recommendation === 'REBIRTH' ? '✓ REBIRTH NOW' : '⏳ WAIT'}
        </div>
        <p className="text-sm text-gray-600 mb-4">{result.reason}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-500">Post-Rebirth Income</p>
            <p className="font-bold text-gray-900">{formatNumber(result.postRebirthIps)}/s</p>
          </div>
          <div>
            <p className="text-gray-500">Recovery Time</p>
            <p className="font-bold text-gray-900">{formatTime(result.timeToRecover)}</p>
          </div>
          <div>
            <p className="text-gray-500">New Multiplier</p>
            <p className="font-bold text-primary-600">{result.multiplierAfter.toFixed(2)}x</p>
          </div>
          <div>
            <p className="text-gray-500">Break-Even</p>
            <p className="font-bold text-gray-900">{Math.round(result.breakEvenMinutes)} min</p>
          </div>
        </div>
        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
