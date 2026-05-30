'use client'

import { useState, useMemo } from 'react'
import { getProgressionAdvice, type ProgressionInput } from '@/lib/calculators/progression'
import { formatNumber } from '@/lib/utils'
import CopyButton from '@/components/ui/CopyButton'
import Link from 'next/link'

const stages = [
  { value: 'early' as const, label: 'Early Game', description: 'Basic upgrades, under 10K cash' },
  { value: 'mid' as const, label: 'Mid Game', description: 'Automation, first rebirth, 10K-1M cash' },
  { value: 'late' as const, label: 'Late Game', description: 'Advanced systems, 1M+ cash, multi-rebirth' },
  { value: 'endgame' as const, label: 'Endgame', description: 'Cosmic content, ascend, hidden items' },
]

export default function ProgressionPlannerClient() {
  const [form, setForm] = useState<ProgressionInput>({
    stage: 'early',
    cash: 5000,
    incomePerSecond: 50,
    rebirthCount: 0,
  })

  const result = useMemo(() => getProgressionAdvice(form), [form])

  const updateField = (field: keyof ProgressionInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: field === 'stage' ? value : parseFloat(value) || 0 }))
  }

  const resultText = `Stage: ${result.stage.label} | Next Goal: ${result.stage.nextGoal} | Est. Time: ${result.estimatedTimeToGoal}`

  return (
    <div className="space-y-4">
      {/* Stage selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Stage</label>
        <div className="grid grid-cols-2 gap-2">
          {stages.map((s) => (
            <button
              key={s.value}
              onClick={() => updateField('stage', s.value)}
              className={`p-3 rounded-lg border text-left text-sm transition-colors ${
                form.stage === s.value
                  ? 'border-primary-400 bg-primary-50 text-primary-800'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="font-medium">{s.label}</span>
              <p className="text-xs text-gray-500 mt-0.5">{s.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label htmlFor="current-cash" className="block text-sm font-medium text-gray-700 mb-1">Current Cash</label>
          <input
            id="current-cash"
            type="number"
            value={form.cash}
            onChange={(e) => updateField('cash', e.target.value)}
            min={0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
          />
        </div>
        <div>
          <label htmlFor="income-per-second" className="block text-sm font-medium text-gray-700 mb-1">Income per Second</label>
          <input
            id="income-per-second"
            type="number"
            value={form.incomePerSecond}
            onChange={(e) => updateField('incomePerSecond', e.target.value)}
            min={0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
          />
        </div>
        <div>
          <label htmlFor="rebirth-count" className="block text-sm font-medium text-gray-700 mb-1">Rebirth Count</label>
          <input
            id="rebirth-count"
            type="number"
            value={form.rebirthCount}
            onChange={(e) => updateField('rebirthCount', e.target.value)}
            min={0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
          />
        </div>
      </div>

      <div className="result-box">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">{result.stage.label}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{result.stage.description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-700">🎯 Next Goal</h4>
            <p className="text-sm text-gray-900">{result.stage.nextGoal}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">📋 Recommended Order</h4>
            <p className="text-sm text-gray-900">{result.stage.recommendedOrder}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">⏱️ Estimated Time to Goal</h4>
            <p className="text-sm font-bold text-primary-600">{result.estimatedTimeToGoal}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-700">🔧 Recommended Tool</h4>
            <Link href={result.stage.recommendedTool} className="text-sm text-primary-600 hover:underline">
              {result.stage.recommendedToolName} →
            </Link>
          </div>
        </div>

        {result.warnings.length > 0 && (
          <div className="mt-3 pt-3 border-t border-primary-200 space-y-1">
            {result.warnings.map((w, i) => (
              <p key={i} className="text-xs text-primary-700">⚠️ {w}</p>
            ))}
          </div>
        )}

        <div className="mt-3">
          <CopyButton text={resultText} />
        </div>
      </div>
    </div>
  )
}
