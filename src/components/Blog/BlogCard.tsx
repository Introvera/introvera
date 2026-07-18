import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-[1rem] bg-foreground/[0.02] border border-foreground/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-foreground/10">
      
      {/* Image Section */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image 
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white text-xs font-semibold tracking-wider uppercase">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-8">
        <div className="flex items-center gap-4 text-xs font-medium text-foreground/50 mb-4">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground leading-tight mb-4 group-hover:text-[var(--color-accent)] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm text-foreground/70 leading-relaxed mb-8 flex-grow">
          {post.summary}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-foreground/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-purple-800 flex items-center justify-center text-white text-xs font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm font-medium text-foreground/80">{post.author}</span>
          </div>
          <span className="text-[var(--color-accent)] text-sm font-semibold group-hover:translate-x-1 transition-transform">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
