"use client"
import { useEffect, useState } from "react"

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const status = localStorage.getItem("analytics-consent")
    if (!status) setVisible(true)
  }, [])
  if (!visible) return null
  const accept = () => {
    // Update Consent Mode to grant analytics only
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    if (w.gtag) {
      w.gtag('consent','update', { analytics_storage: 'granted' })
    }
    localStorage.setItem("analytics-consent", "accepted")
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem("analytics-consent", "declined")
    setVisible(false)
  }
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 bg-white shadow-lg border border-black/10 rounded-md p-4 max-w-lg w-[92vw]">
      <p className="text-sm">
        We use cookies to analyze website traffic. You can accept analytics cookies or continue with minimal tracking.
      </p>
      <div className="mt-3 flex gap-3 justify-end">
        <button onClick={decline} className="h-9 px-3 rounded-md border border-black/15">Decline</button>
        <button onClick={accept} className="h-9 px-3 rounded-md text-white" style={{backgroundColor: 'var(--brand-turquoise)', color: '#00353f'}}>Accept</button>
      </div>
    </div>
  )
}
