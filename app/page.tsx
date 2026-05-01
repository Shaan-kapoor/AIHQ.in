"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const WHATSAPP_LINK = "/join"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent-indic selection:text-background font-sans overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-20"
      >
        <div className="text-2xl font-bold tracking-tighter uppercase">
          AIHQ <span className="text-muted-foreground/50 text-lg lowercase tracking-normal">by Shaan</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="#why" className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
            Thesis
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-widest uppercase text-accent-indic">India</span>
            <span className="text-lg leading-none" aria-hidden="true">🇮🇳</span>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-24 pb-40 flex flex-col items-center text-center relative">
        {/* Massive Devanagari Watermark: "Pragya" (Wisdom/Intelligence) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] lg:text-[40rem] font-indic text-foreground/5 select-none pointer-events-none tracking-tighter z-0"
        >
          प्रज्ञा
        </motion.div>
        
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent to-accent-indic/30 z-10" 
        />
        
        <motion.h1 
          style={{ y: textY }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] max-w-5xl mb-8 relative z-10"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            The deepest conversations
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="italic font-light text-accent-indic/80"
          >
            around AI in India.
          </motion.div>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 relative z-10"
        >
          A space built by people who are deeply interested in AI, exploring concepts from the ground up, and building with purpose rather than hype.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center relative z-10 mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Magnetic Button */}
            <Link 
              href={WHATSAPP_LINK}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative px-8 py-4 bg-accent-indic text-background font-semibold tracking-wide uppercase text-sm border border-accent-indic transition-colors duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white"
            >
              <motion.div
                animate={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className="relative z-10 flex items-center gap-3"
              >
                Join the WhatsApp Community
              </motion.div>
              {/* Indic Brutalism: Block-print style solid drop shadow */}
              <div className="absolute inset-0 border border-accent-indic -translate-x-1.5 translate-y-1.5 -z-10 group-hover:-translate-x-2.5 group-hover:translate-y-2.5 group-hover:border-[#25D366] transition-all duration-300 bg-background" />
              <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </Link>
            <Link
              href="#why"
              className="text-sm font-bold uppercase tracking-widest border-b border-foreground/20 hover:border-foreground hover:text-accent-indic transition-all pb-1"
            >
              Read the thesis
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-indic opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-indic"></span>
            </span>
            Curated for active builders
          </div>
        </motion.div>
      </section>

      {/* Why AIHQ exists */}
      <section id="why" className="w-full border-t border-border relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {/* Left Col */}
          <div className="px-6 py-24 md:py-32 md:border-r border-border md:pr-16 lg:pr-24 flex flex-col justify-between">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-bold tracking-widest uppercase text-accent-indic mb-16"
            >
              01 — The Void
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl md:text-5xl leading-snug tracking-tight"
            >
              AI is moving fast. Most spaces talk about it from a distance. <br /><br />
              <span className="text-muted-foreground">We needed a place closer to the work.</span>
            </motion.div>
          </div>
          {/* Right Col */}
          <div className="px-6 py-24 md:py-32 md:pl-16 lg:pl-24 bg-muted/30 relative flex flex-col items-center justify-center overflow-hidden">
            {/* Jali/Archway framing for the generated image */}
            <motion.div 
              style={{ y: mapY }}
              className="relative w-full max-w-sm aspect-[3/4] rounded-t-full border border-border/50 bg-background/50 overflow-hidden group shadow-sm flex items-end justify-center"
            >
              <div className="absolute inset-0 bg-accent-indic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <Image
                src="/abstract_indic_arch.png"
                alt="Abstract Indic Architectural Element"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-12 text-center max-w-md relative z-10"
            >
              <p className="font-serif italic text-2xl text-foreground mb-6">
                “If AI is something you think about even when no one asks you to, you will fit in.”
              </p>
              <div className="w-8 h-[1px] bg-accent-indic mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we focus on */}
      <section className="w-full max-w-5xl mx-auto px-6 py-32 md:py-48">
        <h2 className="text-xs font-bold tracking-widest uppercase text-accent-indic mb-16">02 — Our Focus</h2>
        <div className="flex flex-col">
          {[
            { num: "०१", title: "Understanding", desc: "Breaking down papers, architectures, and systems from the ground up." },
            { num: "०२", title: "Exploration", desc: "Following the research, tools, and shifts that actually matter, avoiding the noise." },
            { num: "०३", title: "Building", desc: "Sharing prototypes, local LLM experiments, and raw work-in-progress." },
            { num: "०४", title: "Conversation", desc: "Deep, unpretentious discussions with people who are equally invested." },
          ].map((item, i) => (
            <motion.div 
              key={item.num} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-baseline ${i !== 0 ? 'border-t border-border' : ''}`}
            >
              <span className="font-indic text-5xl md:text-6xl text-accent-indic/30 leading-none">
                {item.num}
              </span>
              <div className="flex-1 space-y-4">
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight">{item.title}</h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rooted in India */}
      <section className="w-full bg-[#141312] text-[#fcfbf9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-48 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square w-full max-w-md mx-auto rounded-full border border-[#3a3836] bg-[#1a1918] overflow-hidden flex items-center justify-center p-4 group shadow-2xl"
          >
             <Image
              src="/india_map.png"
              alt="India context map"
              fill
              className="object-contain p-8 opacity-90 group-hover:scale-110 transition-transform duration-1000 drop-shadow-2xl"
            />
          </motion.div>
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl tracking-tight text-[#e25822]"
            >
              Rooted in India.
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-[#fcfbf9]/30" 
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl leading-relaxed text-[#fcfbf9]/70"
            >
              Not as an afterthought, but as a starting point. We care about how AI is learned, built, and applied within the context of the Indian tech ecosystem. The constraints we work within and the massive opportunities here shape the conversations inside.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mindset - Sticky Scroll Area */}
      <section className="w-full bg-background relative h-[150vh]">
        <div className="sticky top-0 h-screen w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center md:items-start overflow-hidden">
          <h2 className="absolute top-24 left-6 md:left-12 text-xs font-bold tracking-widest uppercase text-accent-indic z-10">
            03 — The Mindset
          </h2>
          <div className="w-full flex flex-col gap-6 md:gap-10 relative z-0 mt-24">
            {[
              { text: "Curiosity drives everything.", offset: "md:pl-0" },
              { text: "Interest over credentials.", offset: "md:pl-24" },
              { text: "Build to understand.", offset: "md:pl-48" },
              { text: "Think long term.", offset: "md:pl-72" },
              { text: "Stay close to the work.", offset: "md:pl-96" },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0.1, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-10% 0px -40% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground/90 hover:text-accent-indic transition-colors duration-300 cursor-default w-full ${line.offset}`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* The Stewards */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 border-t border-border">
        <h2 className="text-xs font-bold tracking-widest uppercase text-accent-indic mb-16">04 — The Stewards</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-4xl md:text-5xl tracking-tight">Curated by builders.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              AIHQ is not managed by corporate community managers. It is stewarded by individuals who are actively building, researching, and contributing to the ecosystem.
            </p>
          </motion.div>
          <div className="flex flex-col gap-8">
            {/* Placeholder Steward */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 border border-border bg-muted/10 hover:border-accent-indic transition-colors group"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-accent-indic/20 flex items-center justify-center font-serif text-2xl text-accent-indic shrink-0">
                <Image 
                  src="/steward.jpg" 
                  alt="Steward" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">Shaan Kapoor</h4>
                <p className="text-sm text-muted-foreground">Building AI infrastructure.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Output */}
      <section className="w-full bg-[#141312] text-[#fcfbf9] py-32 md:py-48 border-t border-[#3a3836]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-bold tracking-widest uppercase text-[#e25822] mb-16">05 — Community Artifacts</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col border-t border-[#3a3836]"
          >
            {/* Artifact List */}
            {[
              { title: "Indic LLM Eval Framework", author: "Open Source", type: "Repository" },
              { title: "Local Voice Agent (On-Device)", author: "Experiment", type: "Codebase" },
              { title: "RAG over Dense Legal PDFs", author: "Pipeline", type: "Research" }
            ].map((proj, i) => (
              <div key={i} className="py-8 border-b border-[#3a3836] group hover:bg-[#1a1918] transition-colors cursor-pointer flex flex-col md:flex-row items-baseline justify-between gap-4 px-4 -mx-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                  <h3 className="font-serif text-2xl group-hover:text-[#e25822] transition-colors">{proj.title}</h3>
                  <span className="text-sm font-mono text-[#fcfbf9]/50">{proj.author}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs tracking-widest uppercase text-[#fcfbf9]/40">{proj.type}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#e25822] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transform duration-300">
                    View →
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Journal (Blog Link) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <h2 className="text-xs font-bold tracking-widest uppercase text-accent-indic mb-8">06 — The Journal</h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl tracking-tight mb-8"
        >
          Read our thoughts.
        </motion.h3>
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          We actively document what we learn, the papers we read, and the systems we build. 
        </p>
        <Link 
          href="/journal"
          className="text-sm font-bold uppercase tracking-widest border-b border-foreground hover:text-accent-indic hover:border-accent-indic pb-1 transition-all"
        >
          Go to Journal →
        </Link>
      </section>

      {/* Footer / CTA */}
      <footer className="w-full border-t border-border relative z-10 bg-background">
        <div className="max-w-5xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl tracking-tight mb-8"
          >
            Join the collective.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed"
          >
            If AI is a craft you take seriously and you want to be surrounded by builders and thinkers, request an invite.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href={WHATSAPP_LINK}
              className="group relative px-12 py-5 bg-accent-indic text-background font-semibold tracking-wider uppercase text-sm border border-accent-indic transition-colors duration-300 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white mb-16 inline-block"
            >
              <span className="relative z-10">Join the WhatsApp Community</span>
              <div className="absolute inset-0 border border-accent-indic -translate-x-1.5 translate-y-1.5 -z-10 group-hover:-translate-x-2.5 group-hover:translate-y-2.5 group-hover:border-[#25D366] transition-all duration-300 bg-background" />
              <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </Link>
          </motion.div>
          
          <div className="w-full border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
            <div className="text-sm font-bold tracking-widest uppercase">AIHQ by Shaan</div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Built in India. Shaped by curiosity.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
