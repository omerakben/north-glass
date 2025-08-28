import {
  getAllPosts,
  getFeaturedPosts,
  getPostsByCategory,
} from "@/lib/blogData";
import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Expert Glass & Aluminum Blog | Interior Architecture Insights | North Glass NC",
  description:
    "Professional insights on glass and aluminum solutions from our Interior Architects. Compare materials, explore design processes, and discover what works best for North Carolina homes and businesses.",
  keywords:
    "glass and aluminum blog, interior architect insights, autocad design process, north carolina glass solutions, aluminum vs glass comparisons, professional design tips",
  openGraph: {
    title: "Expert Glass & Aluminum Blog | Interior Architecture Insights",
    description:
      "Professional insights from Interior Architects specializing in glass and aluminum solutions across North Carolina.",
  },
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const aluminumPosts = getPostsByCategory("aluminum-vs-glass");
  const designPosts = getPostsByCategory("interior-architecture");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Insights on Glass & Aluminum Solutions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Expert guidance from our Interior Architects on choosing,
              designing, and installing the perfect glass and aluminum solutions
              for your North Carolina project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>Interior Architect Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={20} />
                <span>AutoCAD Design Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most comprehensive guides to help you make informed decisions
              about glass and aluminum installations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.estimatedReadTime} min read</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Topic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find expert insights organized by the topics that matter most to
              your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Aluminum vs Glass Category */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-xl">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Aluminum vs Glass Comparisons
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Data-driven comparisons to help you choose the right
                    material for your specific needs and budget.
                  </p>
                  <span className="text-sm text-blue-600 font-medium">
                    {aluminumPosts.length} Articles
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {aluminumPosts.slice(0, 2).map((post) => (
                  <Link
                    key={post.id}
                    href={post.href}
                    className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow group"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Interior Architecture Category */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-600 text-white p-3 rounded-xl">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Interior Architecture & Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional design insights and AutoCAD processes that
                    ensure exceptional results.
                  </p>
                  <span className="text-sm text-green-600 font-medium">
                    {designPosts.length} Articles
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {designPosts.slice(0, 2).map((post) => (
                  <Link
                    key={post.id}
                    href={post.href}
                    className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow group"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600">
              Complete collection of professional insights and guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.estimatedReadTime} min</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-turquoise)] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our Interior Architects are ready to help you choose the perfect
            glass and aluminum solutions for your North Carolina project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-quote"
              className="bg-white text-[var(--brand-teal)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Free Design Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[var(--brand-teal)] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
