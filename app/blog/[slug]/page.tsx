import { getAllPosts, getPostById } from "@/lib/blogData";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  BookOpen,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostById(slug);

  if (!post) {
    return {
      title: "Post Not Found | North Glass Blog",
    };
  }

  return {
    title: `${post.title} | North Glass Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Utility function to parse markdown content into sections
function parseContentIntoSections(content: string) {
  const sections: { title: string; content: string }[] = [];
  const lines = content.split("\n");

  let currentSection = { title: "", content: "" };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect H1 (# ) - skip title as it's in hero
    if (line.startsWith("# ")) {
      continue;
    }

    // Detect H2 (## ) as section breaks
    if (line.startsWith("## ")) {
      // Save previous section if it has content
      if (currentSection.content.trim()) {
        sections.push(currentSection);
      }
      // Start new section
      currentSection = {
        title: line.replace(/^##\s+/, "").trim(),
        content: "",
      };
    } else {
      // Add line to current section
      currentSection.content += line + "\n";
    }
  }

  // Add the last section
  if (currentSection.content.trim()) {
    sections.push(currentSection);
  }

  return sections;
}

// Convert markdown content to HTML
// Note: Content source is trusted (blogData.ts - controlled by dev team, not user input)
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Convert headers
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Convert bullets
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");

  // Wrap consecutive list items in <ul>
  html = html.replace(/(<li>.*?<\/li>\n?)+/g, "<ul>$&</ul>");

  // Convert paragraphs (lines not in lists or headers)
  const paragraphs = html.split("\n\n");
  html = paragraphs
    .map((para) => {
      para = para.trim();
      if (
        !para.startsWith("<h") &&
        !para.startsWith("<ul") &&
        !para.startsWith("<li") &&
        para.length > 0
      ) {
        return `<p>${para.replace(/\n/g, " ")}</p>`;
      }
      return para;
    })
    .join("\n");

  return html;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostById(slug);
  const allPosts = getAllPosts();

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // Parse content into sections
  const sections = parseContentIntoSections(post.content);

  return (
    <main className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-[var(--brand-teal)] hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <ArrowRight size={16} className="text-gray-400" />
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[var(--brand-teal)] hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <ArrowRight size={16} className="text-gray-400" />
            </li>
            <li className="text-gray-600 line-clamp-1">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-[var(--brand-teal)] hover:underline"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{post.estimatedReadTime} minute read</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>{post.author}</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[var(--brand-turquoise)]/10 text-[var(--brand-teal)] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content - Sectioned Layout */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-white" : "bg-gray-50";
        const isQuickRef =
          section.title.toLowerCase().includes("quick reference") ||
          section.title.toLowerCase().includes("summary") ||
          section.title.toLowerCase().includes("checklist");

        return (
          <section key={index} className={`py-16 ${bgColor}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Section Title with Icon */}
                <div className="flex items-center gap-4 mb-8">
                  {isQuickRef && (
                    <div className="w-12 h-12 bg-[var(--brand-turquoise)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen
                        className="text-[var(--brand-teal)]"
                        size={24}
                      />
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                {/* Special styling for Quick Reference sections */}
                {isQuickRef ? (
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div
                      className="prose prose-lg max-w-none
                        prose-headings:text-gray-900 prose-headings:font-bold
                        prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-8
                        prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-6
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-ul:space-y-3 prose-li:text-gray-700 prose-li:text-base
                        prose-a:text-blue-600 hover:prose-a:text-blue-700
                        [&_li]:flex [&_li]:items-start [&_li]:gap-2
                        [&_li:before]:content-['✓'] [&_li:before]:text-[var(--brand-turquoise)] [&_li:before]:font-bold [&_li:before]:mt-1"
                      dangerouslySetInnerHTML={{
                        __html: markdownToHtml(section.content),
                      }}
                    />
                  </div>
                ) : (
                  /* Regular section content */
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:text-gray-900 prose-headings:font-bold
                      prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-8 prose-h3:text-[var(--brand-teal)]
                      prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-6
                      prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
                      prose-strong:text-gray-900 prose-strong:font-semibold
                      prose-ul:space-y-3 prose-li:text-gray-700 prose-li:text-base
                      prose-a:text-blue-600 hover:prose-a:text-blue-700
                      [&_ul]:mt-6 [&_ul]:mb-6"
                    dangerouslySetInnerHTML={{
                      __html: markdownToHtml(section.content),
                    }}
                  />
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="py-16 bg-[var(--brand-turquoise)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--brand-teal)]">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-[var(--brand-teal)]/80 max-w-2xl mx-auto">
            Our Interior Architects are ready to help you choose the perfect
            glass and aluminum solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="inline-flex items-center px-8 py-3 bg-[var(--brand-teal)] text-white rounded-lg hover:bg-[var(--brand-teal)]/90 transition-colors font-semibold"
            >
              Get Free Design Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-[var(--brand-teal)] text-[var(--brand-teal)] rounded-lg hover:bg-[var(--brand-teal)] hover:text-white transition-colors font-semibold"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={relatedPost.href}
                    className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.featuredImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(
                              relatedPost.publishDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{relatedPost.estimatedReadTime} min</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--brand-teal)] transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-2 text-[var(--brand-turquoise)] font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.featuredImage,
            author: {
              "@type": "Organization",
              name: post.author,
              url: "https://northglassnc.com",
            },
            publisher: {
              "@type": "Organization",
              name: "North Glass LLC",
              logo: {
                "@type": "ImageObject",
                url: "https://northglassnc.com/images/north-glass-logo.png",
              },
            },
            datePublished: post.publishDate,
            dateModified: post.publishDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://northglassnc.com${post.href}`,
            },
            keywords: post.tags.join(", "),
            articleSection: post.category,
          }),
        }}
      />
    </main>
  );
}
