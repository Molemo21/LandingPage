import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("proliink") // Use your database name here

    // Insert the form data into the contacts collection
    const result = await db.collection("contacts").insertOne({
      ...body,
      createdAt: new Date(),
    })

    return NextResponse.json(
      { message: "Contact form submitted successfully", id: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { message: "Error submitting contact form" },
      { status: 500 }
    )
  }
} 