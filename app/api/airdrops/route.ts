import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('hhttp://localhost:8000/airdrops/')
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch airdrops' }, { status: 500 })
  }
}

