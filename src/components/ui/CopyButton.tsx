'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  label?: string
  className?: string
}

export default function CopyButton({ text, label = 'Copy', className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
        copied
          ? 'bg-green-50 border-green-200 text-green-700'
          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
      } ${className || ''}`}
    >
      {copied ? '✓ Copied!' : label}
    </button>
  )
}
