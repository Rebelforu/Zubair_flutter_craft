
import { ClipboardList, PaintBucket, Code, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-white" />,
    title: "1. Understand Client Needs",
    description: "I start by deeply understanding your requirements, goals, and target audience to lay a solid foundation for the project.",
    color: "bg-brand-purple"
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-white" />,
    title: "2. Design Intuitive UI",
    description: "Creating user-friendly interfaces that balance aesthetics with functionality for an optimal user experience.",
    color: "bg-brand-orange"
  },
  {
    icon: <Code className="h-10 w-10 text-white" />,
    title: "3. Develop Robust Code",
    description: "Implementing clean, efficient code with Flutter and integrating the right backend solutions for your specific needs.",
    color: "bg-brand-purple"
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-white" />,
    title: "4. Test and Deliver",
    description: "Rigorous testing across devices to ensure quality, followed by deployment and continued support as needed.",
    color: "bg-brand-orange"
  }
];

const Process = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            How I approach app development to deliver high-quality results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "Every successful app starts with a clear understanding and a thoughtful approach."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
