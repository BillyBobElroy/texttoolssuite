import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
})

export async function GET(req: NextRequest) {
  const session_id = req.nextUrl.searchParams.get("session_id")

  if (!session_id) {
    return NextResponse.json({ error: "No session_id provided" }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(session_id)

  if (session.payment_status === "paid") {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Payment not completed" }, { status: 403 })
  }
}
