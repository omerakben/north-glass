import { getAllPosts, getPostById } from "@/lib/blogData";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
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

  return (
    <main className="min-h-screen">
      {/* Header with breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.estimatedReadTime} minute read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg prose-blue max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
                [&>*:first-child]:mt-0"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n/g, "<br />")
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length;
                    return `<h${level} class="font-bold text-gray-900 mt-8 mb-4">`.replace(
                      /#{1,6}\s/,
                      ""
                    );
                  }),
              }}
            />
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[var(--brand-blue-primary)] to-[var(--brand-blue-secondary)] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Our Interior Architects are ready to help you choose the perfect
              glass and aluminum solutions for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request-quote"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Free Design Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Related Articles
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.featuredImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>

                      <Link
                        href={relatedPost.href}
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
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
              name: "North Glass",
              logo: {
                "@type": "ImageObject",
                url: "https://northglassnc.com/logo.png",
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
