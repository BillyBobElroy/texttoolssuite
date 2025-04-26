"use client"
import React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Divider from "@/components/layout/Divider"
import HeroSection from "@/components/home/HeroSection"
import WhySection from "@/components/home/WhySection"
import FAQSection from "@/components/home/FAQSection"
import CTASection from "@/components/home/CTASection"



export default function HomePageClient() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySection />
        <FAQSection />
        <Divider />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
