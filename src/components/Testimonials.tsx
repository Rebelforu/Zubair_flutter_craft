
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Zubair delivered an amazing app that exceeded my expectations. His attention to detail and ability to translate my ideas into a functional product was impressive.",
    author: "Sarah Johnson",
    position: "CEO, TechVision Solutions",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "Working with Zubair was a great experience. He is attentive to client needs and delivers high-quality Flutter applications on time and within budget.",
    author: "Michael Chen",
    position: "Founder, InnovateMobile",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "The e-commerce app Zubair built for us has significantly improved our online presence. His technical skills and problem-solving abilities are top-notch.",
    author: "Emily Rodriguez",
    position: "Marketing Director, StyleCart Inc.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-brand-purple mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here's what clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-0 md:left-10 text-brand-purple opacity-20">
            <Quote size={60} />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative z-10">
            <div className="min-h-[200px]">
              <p className="text-gray-700 text-lg md:text-xl italic mb-6">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-brand-purple' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
