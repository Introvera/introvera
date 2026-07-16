import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowLeft } from "lucide-react";

const renderContent = (content: string) => {
  return content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("## ")) {
      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace("## ", "")}</h2>;
    }
    
    const renderBold = (text: string) => {
      const parts = text.split(/\*\*(.*?)\*\*/g);
      return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part));
    };

    if (paragraph.startsWith("- ")) {
      return (
        <ul key={index} className="list-disc pl-6 mb-4 text-foreground/80">
          {paragraph.split("\n").map((item, i) => (
            <li key={i}>{renderBold(item.replace("- ", ""))}</li>
          ))}
        </ul>
      );
    }

    return <p key={index} className="mb-4 text-foreground/80 leading-relaxed">{renderBold(paragraph)}</p>;
  });
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found | Introvera" };

  return {
    title: `${post.title} | Introvera`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-44 pb-24">
      {/* Header Image Section */}
      <FadeInSection className="max-w-4xl mx-auto px-6 mb-12 relative z-10">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-[var(--color-accent)] transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        <div className="flex items-center gap-4 text-sm font-medium text-foreground/60 mb-6">
          <span className="px-3 py-1 rounded-full bg-foreground/[0.05] text-[var(--color-accent)] uppercase tracking-wider text-xs">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground leading-tight mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-purple-800 flex items-center justify-center text-white font-bold text-lg">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{post.author}</p>
            <p className="text-sm text-foreground/60">Software Engineering Team</p>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-16">
          <Image 
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-90"
            priority
            unoptimized
          />
        </div>
      </FadeInSection>

      {/* Content Section */}
      <FadeInSection className="max-w-3xl mx-auto px-6 relative z-10">
        <article className="prose prose-lg prose-headings:font-medium prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-[var(--color-accent)] hover:prose-a:text-purple-400 prose-strong:text-foreground prose-ul:text-foreground/80 dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </article>
      </FadeInSection>
    </main>
  );
}
