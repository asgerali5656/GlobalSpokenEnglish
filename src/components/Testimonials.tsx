import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Mohammad Arif",
    location: "Ghosi",
    feedback: "Global Spoken English ने मेरी ज़िंदगी बदल दी। अब मैं आत्मविश्वास से English बोलता हूं। Interview में select हो गया।",
    rating: 5,
  },
  {
    name: "Salman Khan",
    location: "Mau",
    feedback: "Ghulam Nabi sir की teaching method बहुत unique है। एक महीने में ही मुझे फर्क नज़र आने लगा। Best decision!",
    rating: 5,
  },
  {
    name: "Abdul Rahman",
    location: "Kopaganj",
    feedback: "Ramzan batch में join किया था। Best decision of my life. अब interviews में confidently बोल पाता हूं।",
    rating: 5,
  },
  {
    name: "Mohd Faizan",
    location: "Ghosi",
    feedback: "मैं बिल्कुल beginner था लेकिन अब fluently English speak कर सकता हूं। Thank you GSE!",
    rating: 5,
  },
  {
    name: "Syed Adnan",
    location: "Mau",
    feedback: "बहुत अच्छी institute है। Teachers का support और guidance amazing है। Highly recommend!",
    rating: 5,
  },
  {
    name: "Imran Ali",
    location: "Azamgarh",
    feedback: "मैंने कई जगह try किया लेकिन Global Spoken English जैसी quality कहीं नहीं मिली। Excellent teaching!",
    rating: 5,
  },
  {
    name: "Rashid Hussain",
    location: "Ghosi",
    feedback: "Daily practice और speaking sessions ने मुझे confident बना दिया। Ab English bolne mein dar nahi lagta.",
    rating: 5,
  },
  {
    name: "Azhar Khan",
    location: "Mau",
    feedback: "Sir की motivational approach बहुत helpful है। English सीखने का मज़ा आ गया। Thank you sir!",
    rating: 5,
  },
  {
    name: "Wasim Ahmed",
    location: "Kopaganj",
    feedback: "Mera English zero tha, lekin ab main customers se confidently baat kar sakta hoon. Business mein bahut help mili.",
    rating: 5,
  },
  {
    name: "Shakeel Akhtar",
    location: "Ghosi",
    feedback: "Government job interview clear kiya sirf GSE ki wajah se. Vocabulary aur speaking dono improve hui.",
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
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm"
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-foreground">
                      {currentTestimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.location}
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex gap-0.5 ml-auto">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-lg text-foreground/80 leading-relaxed">
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
                className="w-10 h-10 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-5 bg-primary"
                      : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
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
