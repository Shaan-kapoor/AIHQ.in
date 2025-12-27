import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Monitor, Cpu, Network, MessageSquare, Zap } from "lucide-react"

const WHATSAPP_LINK = "/join"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* Header / Nav */}
      <header className="w-full max-w-5xl px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">AIHQ</div>
        <div className="flex items-center gap-6">
          <Link href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Why
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">India</span>
            <span className="text-lg" aria-hidden="true">
              🇮🇳
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-40 flex flex-col items-start relative">
        <div className="absolute top-20 -right-20 md:-right-40 w-full h-full -z-10 opacity-[0.03] pointer-events-none">
          <svg
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-3xl ml-auto"
          >
            <circle cx="400" cy="400" r="399.5" stroke="currentColor" />
            <circle cx="400" cy="400" r="299.5" stroke="currentColor" strokeDasharray="4 4" />
            <path d="M400 0V800M0 400H800" stroke="currentColor" strokeOpacity="0.5" />
            <path
              d="M117.157 117.157L682.843 682.843M682.843 117.157L117.157 682.843"
              stroke="currentColor"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">AIHQ</h1>
        <p className="text-xl md:text-2xl font-medium mb-8 text-foreground/90">
          The one stop community for all things AI
        </p>
        <p className="max-w-xl text-lg text-muted-foreground mb-12 leading-relaxed">
          Built by people in India who are deeply interested in AI and spend their time learning, exploring, and
          building with it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link href={WHATSAPP_LINK}>
            <Button size="lg" className="px-8 h-12 text-base font-medium">
              Join AIHQ
            </Button>
          </Link>
          <Link
            href="#why"
            className="text-base font-medium border-b border-foreground/20 hover:border-foreground transition-all py-1"
          >
            Why this exists
          </Link>
        </div>
      </section>

      {/* Why AIHQ exists */}
      <section id="why" className="w-full border-y border-border bg-white">
        <div className="max-w-5xl px-6 py-24 md:py-32 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Why we needed this</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>AI is moving fast. Most spaces talk about it from a distance. We wanted a place closer to the work.</p>
              <p>
                AIHQ is for people who actively follow what is happening, experiment on their own, and keep thinking
                about how AI can be understood and built with.
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto group">
            <div className="absolute inset-0 bg-black/5 -rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700 flex items-center justify-center">
              <Cpu className="w-32 h-32 text-black/5" strokeWidth={0.5} />
            </div>
            <Image
              src="/india_map_web_optimized.webp?height=600&width=600"
              alt="AI technical signal"
              width={600}
              height={600}
              className="relative grayscale contrast-125 mix-blend-multiply transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Who this is really for</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl font-medium mb-8">AIHQ is for people who are naturally drawn to AI.</p>
            <ul className="space-y-6 text-lg text-muted-foreground">
              <li className="flex gap-4">
                <span className="text-foreground shrink-0">—</span>
                People who follow AI closely and explore things on their own
              </li>
              <li className="flex gap-4">
                <span className="text-foreground shrink-0">—</span>
                People who experiment even without immediate outcomes
              </li>
              <li className="flex gap-4">
                <span className="text-foreground shrink-0">—</span>
                People building projects, prototypes, or tools out of interest
              </li>
              <li className="flex gap-4">
                <span className="text-foreground shrink-0">—</span>
                People who enjoy deep, thoughtful discussions about AI
              </li>
            </ul>
          </div>
          <div className="flex items-end">
            <p className="text-2xl italic text-foreground/80 font-medium">
              “If AI is something you think about even when no one asks you to, you will fit in.”
            </p>
          </div>
        </div>
      </section>

      {/* What we focus on */}
      <section className="w-full border-t border-border bg-[#111] text-white overflow-hidden">
        <div className="max-w-5xl px-6 py-24 md:py-32 mx-auto relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Network pattern"
              fill
              className="object-cover grayscale"
            />
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-16">What we spend time on</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Understanding", desc: "breaking down ideas and systems from the ground up", icon: Monitor },
              { title: "Exploration", desc: "following research, tools, and shifts that actually matter", icon: Zap },
              { title: "Building", desc: "sharing projects, experiments, and work in progress", icon: Network },
              {
                title: "Conversation",
                desc: "thoughtful discussions with people who are equally invested",
                icon: MessageSquare,
              },
            ].map((item) => (
              <div key={item.title} className="space-y-4 relative group">
                <div className="h-px w-8 bg-white/30 transition-all group-hover:w-12 group-hover:bg-white" />
                {React.createElement(item.icon, {
                  className: "w-5 h-5 text-white/40 mb-2 group-hover:text-white transition-colors",
                  strokeWidth: 1.5,
                })}
                <h3 className="text-xl font-bold uppercase tracking-wider">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India-first perspective */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Rooted in India</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>AIHQ is built from an India-first point of view. Not as an afterthought, but as a starting point.</p>
              <p>
                We care about how AI is learned, built, and applied in the Indian ecosystem. The problems we see, the
                constraints we work within, and the opportunities that exist here shape the conversations and work
                inside.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 relative aspect-[4/5] opacity-80 group">
            <div className="absolute inset-0 border border-black/5 scale-105 -z-10 group-hover:scale-100 transition-transform duration-500" />
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="India context"
              fill
              className="object-contain grayscale brightness-90 transition-all group-hover:brightness-100"
            />
          </div>
        </div>
      </section>

      {/* Mindset section */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-40">
        <h2 className="text-3xl font-bold tracking-tight mb-16">The mindset</h2>
        <div className="flex flex-col gap-8">
          {[
            "Curiosity drives everything",
            "Interest over credentials",
            "Build to understand",
            "Think long term",
            "Stay close to the work",
          ].map((line) => (
            <p
              key={line}
              className="text-4xl md:text-6xl font-bold tracking-tighter hover:translate-x-4 transition-transform duration-500 cursor-default"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full border-t border-border bg-white">
        <div className="max-w-5xl px-6 py-32 md:py-48 mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Join AIHQ</h2>
          <p className="max-w-xl text-xl text-muted-foreground mb-12 leading-relaxed">
            If AI genuinely interests you and you want to be around others who are equally invested, this is the place.
          </p>
          <Link href={WHATSAPP_LINK}>
            <Button size="lg" className="px-12 h-14 text-lg font-medium mb-6">
              Join the community
            </Button>
          </Link>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Built in India. Shaped by people who care.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border">
        <div className="max-w-5xl px-6 py-12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">AIHQ.in</span>
            <span className="text-xl" aria-hidden="true">
              🇮🇳
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <Link
              href={WHATSAPP_LINK}
              className="text-sm font-medium hover:underline underline-offset-4 transition-all"
            >
              Join
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
