'use client'

import { useState, useMemo } from 'react'
import { calculateAscend, type AscendCalcInput } from '@/lib/calculators/ascend'
import { formatNumber, formatTime } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'

export default function AscendCalculatorClient() {
  const [form, setForm] = useState<AscendCalcInput>({
    currentCash: 100000000,
    incomePerSecond: 500000,
    ascendBonus: 10,
    currentAscendBonus: 0,
    rebuildHours: 2,
  })

  const result = useMemo(() => calculateAscend(form), [form])

  const updateField = (field: keyof AscendCalcInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const resetForm = () => {
    setForm({ currentCash: 100000000, incomePerSecond: 500000, ascendBonus: 10, currentAscendBonus: 0, rebuildHours: 2 })
  }

  const resultText = result.recommendation === 'ASCEND'
    ? `ASCEND NOW! Bonus: +${result.permanentGain}% | Post-ascend income: ${formatNumber(result.postAscendIps)}/s | Recover in ${formatTime(result.timeToRecover)}`
    : `WAIT. Reason: ${result.reason}`

  const inputFields: { key: keyof AscendCalcInput; label: string; step?: number }[] = [
    { key: 'currentCash', label: 'Current Cash' },
    { key: 'incomePerSecond', label: 'Income per Second' },
    { key: 'ascendBonus', label: 'Ascend Bonus (%)', step: 1 },
    { key: 'currentAscendBonus', label: 'Current Ascend Bonus (%)', step: 1 },
    { key: 'rebuildHours', label: 'Rebuild Time (hours)', step: 0.5 },
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
          result.recommendation === 'ASCEND' ? 'bg-green-100 text-green-800' : 'bg-primary-100 text-primary-800'
        }`}>
          {result.recommendation === 'ASCEND' ? '⬆️ ASCEND NOW' : '⏳ WAIT'}
        </div>
        <p className="text-sm text-gray-600 mb-4">{result.reason}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-500">Post-Ascend Income</p>
            <p className="font-bold text-gray-900">{formatNumber(result.postAscendIps)}/s</p>
          </div>
          <div>
            <p className="text-gray-500">Recovery Time</p>
            <p className="font-bold text-gray-900">{formatTime(result.timeToRecover)}</p>
          </div>
          <div>
            <p className="text-gray-500">Permanent Bonus</p>
            <p className="font-bold text-primary-600">+{result.permanentGain}%</p>
          </div>
          <div>
            <p className="text-gray-500">Total Ascend Bonus</p>
            <p className="font-bold text-gray-900">{result.bonusAfter.toFixed(0)}%</p>
          </div>
        </div>
        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
