import React from "react";
import { notFound } from "next/navigation";
import { getSubstackPostBySlug, getSubstackPosts } from "@/lib/substack";
import { format } from "date-fns";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

// Generate static params for fast loading if possible
export async function generateStaticParams() {
  const posts = await getSubstackPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate SEO metadata with Canonical Tag
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getSubstackPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | AIHQ Journal`,
    description: post.contentSnippet,
    alternates: {
      canonical: post.link, // THIS IS THE SEO MAGIC to avoid duplicate content penalties
    },
    openGraph: {
      title: post.title,
      description: post.contentSnippet,
      type: "article",
      publishedTime: post.pubDate,
      url: post.link,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getSubstackPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-32 px-6 max-w-3xl mx-auto">
      <Link href="/journal" className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-accent-indic transition-colors mb-16 inline-block">
        ← Back to Journal
      </Link>

      <article>
        <header className="mb-16">
          <div className="text-sm font-mono text-accent-indic mb-6">
            {format(new Date(post.pubDate), "MMMM dd, yyyy")}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          <div className="w-12 h-[1px] bg-border" />
        </header>

        {/* The Substack Content */}
        <div 
          className="prose prose-lg dark:prose-invert prose-p:leading-relaxed prose-a:text-accent-indic hover:prose-a:text-foreground prose-headings:font-serif max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm">
          Originally published on Substack.
        </p>
        <a 
          href={post.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border hover:border-accent-indic hover:text-accent-indic transition-colors text-sm font-bold tracking-wide uppercase"
        >
          Comment on original post ↗
        </a>
      </div>
    </main>
  );
}
