import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
})

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "http://localhost:3000"

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price: "price_ABC123...", // Replace with your actual Stripe price ID
        quantity: 1,
      },
    ],
    success_url: `${origin}/download`,
    cancel_url: `${origin}/`,
  })

  return NextResponse.json({ url: session.url })
}
