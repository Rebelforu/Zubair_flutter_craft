
import { Code, Smartphone, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-bold">Zubair Altaf</h3>
            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> Bahawalpur, Punjab, Pakistan
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate Flutter developer with over a year of experience crafting seamless Android 
              and iOS apps. Skilled in integrating Firebase and Supabase for robust backend solutions, 
              I love turning ideas into user-friendly applications. Let's build something amazing together!
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">Flutter</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">Dart</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">Android/iOS</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">Firebase</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">Supabase</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">API Integration</span>
              <span className="px-4 py-1.5 bg-purple-100 text-brand-purple rounded-full text-sm font-medium">UI/UX Design</span>
            </div>

            <div className="pt-4">
              <Button className="bg-brand-purple hover:bg-brand-purple/90">
                <a href="#" download className="text-white">Download Resume</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8 text-brand-purple" />,
                title: "Flutter Development",
                description: "Creating beautiful, natively compiled applications for mobile from a single codebase.",
                delay: "0.2s"
              },
              {
                icon: <Smartphone className="h-8 w-8 text-brand-orange" />,
                title: "Android & iOS Apps",
                description: "Building robust applications for both major mobile platforms with seamless experiences.",
                delay: "0.3s"
              },
              {
                icon: <Server className="h-8 w-8 text-brand-purple" />,
                title: "Backend Integration",
                description: "Expertise in Firebase and Supabase for authentication, databases, and storage solutions.",
                delay: "0.4s"
              },
              {
                icon: <Zap className="h-8 w-8 text-brand-orange" />,
                title: "API Implementation",
                description: "Connecting apps to various services and APIs for expanded functionality.",
                delay: "0.5s"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in" 
                style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
