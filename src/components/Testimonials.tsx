import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Mohammad Arif",
    feedback: "Global Spoken English ने मेरी ज़िंदगी बदल दी। अब मैं आत्मविश्वास से English बोलता हूं।",
    rating: 5,
  },
  {
    name: "Salman Khan",
    feedback: "Ghulam Nabi sir की teaching method बहुत unique है। एक महीने में ही मुझे फर्क नज़र आने लगा।",
    rating: 5,
  },
  {
    name: "Abdul Rahman",
    feedback: "Ramzan batch में join किया था। Best decision of my life. अब interviews में confidently बोल पाता हूं।",
    rating: 5,
  },
  {
    name: "Mohd Faizan",
    feedback: "मैं बिल्कुल beginner था लेकिन अब fluently English speak कर सकता हूं। Thank you GSE!",
    rating: 5,
  },
  {
    name: "Syed Adnan",
    feedback: "बहुत अच्छी institute है। Teachers का support और guidance amazing है।",
    rating: 5,
  },
  {
    name: "Imran Ali",
    feedback: "मैंने कई जगह try किया लेकिन Global Spoken English जैसी quality कहीं नहीं मिली।",
    rating: 5,
  },
  {
    name: "Rashid Hussain",
    feedback: "Daily practice और speaking sessions ने मुझे confident बना दिया। Highly recommended!",
    rating: 5,
  },
  {
    name: "Azhar Khan",
    feedback: "Sir की motivational approach बहुत helpful है। English सीखने का मज़ा आ गया।",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Star className="w-4 h-4" />
            Student Feedback
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our students who transformed their English speaking skills.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {currentTestimonial.name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "{currentTestimonial.feedback}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
