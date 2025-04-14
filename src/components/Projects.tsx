
import { useState } from 'react';
import { Github, ExternalLink, MessageSquare, ShoppingBag, CheckSquare, MessagesSquare, Image } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projectsData = [
  {
    id: 1,
    title: "Chat App with Supabase",
    description: "A real-time chat application powered by Supabase, allowing users to send and receive messages instantly. Features include user authentication and live messaging.",
    image: "/placeholder.svg",
    tech: ["Flutter", "Supabase", "Real-time Database"],
    icon: <MessageSquare className="h-10 w-10" />,
    color: "border-blue-400",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "To-Do & Signals App",
    description: "A productivity app where users can manage tasks in real-time. Includes an admin feature to post trading signals, which users can follow for updates.",
    image: "/placeholder.svg",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    icon: <CheckSquare className="h-10 w-10" />,
    color: "border-green-400",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "E-Commerce App",
    description: "A fully functional e-commerce platform where users can browse products, add to cart, purchase, and view order history. Includes an admin panel for product and order management.",
    image: "/placeholder.svg",
    tech: ["Flutter", "Firebase", "Cloud Firestore", "Authentication"],
    icon: <ShoppingBag className="h-10 w-10" />,
    color: "border-orange-400",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "AI Chatbot App",
    description: "An interactive chatbot powered by the Gemini API, providing instant answers to user queries with an intuitive conversation interface.",
    image: "/placeholder.svg",
    tech: ["Flutter", "Gemini API", "State Management"],
    icon: <MessagesSquare className="h-10 w-10" />,
    color: "border-purple-400",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "AI Image Generator Tool",
    description: "A creative tool where users can generate unique images by entering prompts, leveraging cutting-edge AI technology for creative image synthesis.",
    image: "/placeholder.svg",
    tech: ["Flutter", "AI API Integration", "Image Processing"],
    icon: <Image className="h-10 w-10" />,
    color: "border-pink-400",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent Flutter projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id}
              className={`project-card border-t-4 ${project.color} opacity-0 animate-fade-in h-full flex flex-col`}
              style={{ 
                animationDelay: `${index * 0.1}s`, 
                animationFillMode: 'forwards' 
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-brand-purple">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-purple transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-orange transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <CardTitle className="mt-3">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-purple-100 text-brand-purple border-purple-200 hover:bg-purple-200">
                    {tech}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
