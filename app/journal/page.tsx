import React from "react";
import Link from "next/link";
import { getSubstackPosts, SUBSTACK_URL } from "@/lib/substack";
import { format } from "date-fns";

export const metadata = {
  title: "Journal | AIHQ",
  description: "The latest thoughts, research, and updates from the AIHQ community.",
};

// Revalidate the page every hour so new posts show up
export const revalidate = 3600;

export default async function JournalIndex() {
  const posts = await getSubstackPosts();

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="mb-24">
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-6">The Journal.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Thoughts, research breakdowns, and updates from the collective.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-12 border-t border-border">
          <p className="text-muted-foreground">No posts found. Check back soon.</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/journal/${post.slug}`}
              className="group py-12 border-t border-border flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-baseline"
            >
              <div className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                {format(new Date(post.pubDate), "MMM dd, yyyy")}
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-accent-indic transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                  {post.contentSnippet}
                </p>
                <div className="text-xs font-bold tracking-widest uppercase text-accent-indic pt-4 flex items-center gap-2">
                  Read Article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-24 pt-12 border-t border-border text-center">
        <a 
          href={SUBSTACK_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          Subscribe directly on Substack ↗
        </a>
      </div>
    </main>
  );
}
