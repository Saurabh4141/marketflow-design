import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Bookmark,
} from "lucide-react";

// Mock blog data - in production would come from API
const blogData = {
  title: "The Future of AI in Market Research: Trends to Watch in 2024",
  category: "AI & Technology",
  author: {
    name: "Dr. Sarah Chen",
    role: "Chief Research Officer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  publishDate: "January 20, 2024",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
  content: `
    <p class="lead">Artificial intelligence is revolutionizing how we gather and analyze market data. As we enter 2024, several emerging trends are reshaping the landscape of market research, offering unprecedented opportunities for businesses to gain deeper insights and make more informed decisions.</p>

    <h2>The Rise of Generative AI in Research</h2>
    <p>Generative AI technologies, including large language models like GPT-4, are transforming how researchers analyze qualitative data. These tools can process thousands of open-ended survey responses in minutes, identifying themes and sentiments that would take human analysts days or weeks to uncover.</p>
    <p>However, the key lies in knowing how to leverage these tools effectively. Organizations that combine AI capabilities with human expertise are seeing the best results. The AI handles the heavy lifting of data processing, while human researchers focus on interpretation, strategic recommendations, and ensuring ethical considerations are met.</p>

    <h2>Predictive Analytics Becomes Standard</h2>
    <p>Predictive analytics has moved from being a competitive advantage to a baseline expectation. Companies are no longer asking "if" they should implement predictive models, but "how" to maximize their effectiveness. Key developments include:</p>
    <ul>
      <li><strong>Real-time prediction:</strong> Models now update continuously as new data flows in, enabling faster response to market changes.</li>
      <li><strong>Multi-source integration:</strong> Combining survey data with behavioral signals, social media trends, and economic indicators for more accurate forecasts.</li>
      <li><strong>Explainable AI:</strong> Stakeholders increasingly demand transparency in how predictions are generated, driving adoption of interpretable models.</li>
    </ul>

    <h2>Synthetic Data and Privacy-First Research</h2>
    <p>With increasing privacy regulations and growing consumer concerns about data usage, synthetic data generation is emerging as a critical solution. AI-generated datasets that maintain statistical properties of real data while protecting individual privacy allow researchers to:</p>
    <ul>
      <li>Conduct research in regulated industries without compromising compliance</li>
      <li>Share datasets across teams and with external partners safely</li>
      <li>Augment limited sample sizes for more robust analysis</li>
    </ul>

    <h2>The Human Element Remains Critical</h2>
    <p>Despite rapid AI advancement, the human element in market research remains irreplaceable. AI excels at pattern recognition and processing scale, but strategic interpretation, creative problem-solving, and understanding cultural nuances require human intelligence.</p>
    <p>The most successful research teams in 2024 will be those that effectively orchestrate the collaboration between AI tools and human expertise, leveraging each for their unique strengths.</p>

    <blockquote>
      <p>"AI doesn't replace market researchers—it amplifies them. The organizations seeing the greatest ROI from AI are those investing equally in technology and talent development."</p>
      <cite>— Dr. Sarah Chen, Chief Research Officer</cite>
    </blockquote>

    <h2>Looking Ahead</h2>
    <p>As we move through 2024, expect to see continued convergence of AI capabilities with traditional research methodologies. The winners will be organizations that embrace these technologies thoughtfully, maintaining focus on research quality and ethical considerations while leveraging AI to scale their impact.</p>
    <p>The future of market research is not about choosing between human insight and artificial intelligence—it's about finding the optimal synthesis of both.</p>
  `,
  relatedPosts: [
    {
      title: "Understanding Consumer Behavior in the Post-Pandemic Era",
      slug: "consumer-behavior-post-pandemic",
      category: "Industry Insights",
    },
    {
      title: "5 Key Metrics Every Market Researcher Should Track",
      slug: "key-metrics-market-research",
      category: "Research Methods",
    },
    {
      title: "The Rise of Sentiment Analysis in Brand Research",
      slug: "sentiment-analysis-brand-research",
      category: "AI & Technology",
    },
  ],
};

const BlogDetail = () => {

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="pt-28 pb-6">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article>
        <header className="pb-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  {blogData.category}
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {blogData.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {blogData.publishDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blogData.readTime}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={blogData.author.avatar}
                    alt={blogData.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium text-foreground">
                      {blogData.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {blogData.author.role}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 mb-12">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <img
                src={blogData.image}
                alt={blogData.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              {/* Share Sidebar - Desktop */}
              <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 space-y-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-[#0077b5] hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-p.lead:text-xl prose-p.lead:text-foreground prose-p.lead:font-medium prose-p.lead:mb-8
                  prose-ul:my-6 prose-li:text-muted-foreground prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:bg-secondary/30 prose-blockquote:py-4 prose-blockquote:pr-6 prose-blockquote:rounded-r-xl
                  prose-blockquote:not-italic
                  [&_blockquote_p]:text-foreground [&_blockquote_p]:text-lg [&_blockquote_p]:font-medium [&_blockquote_p]:mb-2
                  [&_blockquote_cite]:text-muted-foreground [&_blockquote_cite]:text-sm [&_blockquote_cite]:not-italic
                "
                dangerouslySetInnerHTML={{ __html: blogData.content }}
              />

              {/* Mobile Share */}
              <div className="lg:hidden flex items-center justify-center gap-4 py-8 border-t border-b border-border my-8">
                <span className="text-muted-foreground text-sm">Share:</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-[#0077b5] hover:text-[#0077b5] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border hover:border-[#1877F2] hover:text-[#1877F2] transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
              </div>

              {/* Author Bio */}
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border my-12">
                <div className="flex items-start gap-4">
                  <img
                    src={blogData.author.avatar}
                    alt={blogData.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {blogData.author.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {blogData.author.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Dr. Sarah Chen leads our research division with over 15 years
                      of experience in AI and market analytics. She holds a Ph.D.
                      from Stanford and has published extensively on the
                      intersection of technology and consumer research.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {blogData.relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;
