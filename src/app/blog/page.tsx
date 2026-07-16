import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/Blog/BlogCard";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata = {
  title: "Blog | Introvera",
  description: "Insights, thoughts, and technical deep dives from the Introvera team on software development, digital transformation, and business solutions.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background pt-44 pb-24 flex flex-col">
      <FadeInSection className="max-w-7xl mx-auto px-6 w-full relative z-10 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-6">
          Insights & <span className="text-[var(--color-accent)]">Updates</span>
        </h1>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Thoughts on technology, digital transformation, and building software that drives real business value.
        </p>
      </FadeInSection>

      <FadeInSection className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </FadeInSection>
    </main>
  );
}
