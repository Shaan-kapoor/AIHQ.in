import Parser from "rss-parser";

// TODO: Replace this with the actual AIHQ Substack URL
export const SUBSTACK_URL = "https://pragmaticengineer.substack.com";
const FEED_URL = `${SUBSTACK_URL}/feed`;

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  id: string;
  slug: string;
}

const parser = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

export async function getSubstackPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(FEED_URL);
    
    return feed.items.map((item) => {
      // Extract the slug from the URL (e.g., https://substack.com/p/my-post -> my-post)
      const slug = item.link?.split("/p/")[1]?.split("?")[0] || 
                   item.link?.split("/").pop()?.split("?")[0] || 
                   "";

      return {
        title: item.title || "Untitled",
        link: item.link || "",
        pubDate: item.pubDate || new Date().toISOString(),
        content: item["content:encoded"] || item.content || "",
        contentSnippet: item.contentSnippet || "",
        id: item.guid || item.id || slug,
        slug,
      };
    });
  } catch (error) {
    console.error("Error fetching Substack RSS:", error);
    return [];
  }
}

export async function getSubstackPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getSubstackPosts();
  return posts.find((post) => post.slug === slug) || null;
}
