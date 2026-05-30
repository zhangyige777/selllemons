'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  network: 'highperformanceformat' | 'effectivecpmnetwork'
  keyId: string
  width?: number
  height?: number
  className?: string
}

export default function AdSlot({ network, keyId, width, height, className }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const container = document.createElement('div')
    container.id = `ad-${keyId}`
    ref.current.appendChild(container)

    if (network === 'highperformanceformat') {
      const configScript = document.createElement('script')
      configScript.type = 'text/javascript'
      configScript.text = `atOptions = {'key' : '${keyId}','format' : 'iframe','height' : ${height || 250},'width' : ${width || 300},'params' : {}};`
      ref.current.appendChild(configScript)

      const invokeScript = document.createElement('script')
      invokeScript.type = 'text/javascript'
      invokeScript.src = `https://www.highperformanceformat.com/${keyId}/invoke.js`
      invokeScript.async = true
      ref.current.appendChild(invokeScript)
    } else if (network === 'effectivecpmnetwork') {
      const invokeScript = document.createElement('script')
      invokeScript.type = 'text/javascript'
      invokeScript.async = true
      invokeScript.setAttribute('data-cfasync', 'false')
      invokeScript.src = `https://pl29593884.effectivecpmnetwork.com/${keyId}/invoke.js`
      ref.current.appendChild(invokeScript)
    }

    return () => {
      if (ref.current) ref.current.innerHTML = ''
    }
  }, [network, keyId, width, height])

  return <div ref={ref} className={`w-full flex justify-center ${className || ''}`} />
}
