
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Flutter Development",
    excerpt: "A beginner's guide to setting up your Flutter environment and creating your first app.",
    date: "Coming Soon",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Firebase vs Supabase for Mobile Apps",
    excerpt: "Comparing two popular backend solutions for Flutter applications with practical examples.",
    date: "Coming Soon",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Essential UI/UX Tips for Mobile App Developers",
    excerpt: "Learn how to create intuitive and visually appealing interfaces for your Flutter apps.",
    date: "Coming Soon",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            App development insights and Flutter tips coming soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden project-card opacity-0 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-brand-purple hover:text-brand-purple/90 hover:bg-purple-50 p-0 flex items-center">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
