"use client"

import { useState } from "react"

export default function LifeHours() {
  const [price, setPrice] = useState("")
  const [wage, setWage] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    const p = parseFloat(price)
    const w = parseFloat(wage)

    if (!p || !w || w <= 0) {
      setResult(null)
      return
    }

    setResult(p / w)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">
        How Many Hours of Your Life Is This?
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Item price"
          className="border p-3 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Your hourly wage"
          className="border p-3 rounded"
          value={wage}
          onChange={(e) => setWage(e.target.value)}
        />

        <button
          onClick={calculate}
          className="bg-black text-white p-3 rounded"
        >
          Calculate
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 text-xl font-semibold">
          This costs you {result.toFixed(2)} hours of your life.
        </div>
      )}
    </div>
  )
}