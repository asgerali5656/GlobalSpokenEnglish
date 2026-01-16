import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  { text: "The more you speak, the more fluent you become.", category: "Speaking" },
  { text: "Confidence comes from practice, not perfection.", category: "Confidence" },
  { text: "Every expert was once a beginner.", category: "Learning" },
  { text: "Language is the road map of a culture.", category: "Culture" },
  { text: "Don't be afraid to make mistakes. They are your best teachers.", category: "Learning" },
  { text: "Speaking English opens doors to global opportunities.", category: "Motivation" },
  { text: "A journey of a thousand words begins with a single conversation.", category: "Speaking" },
  { text: "Your only limit is your mind. Start speaking today!", category: "Confidence" },
  { text: "The best time to start learning was yesterday. The second best time is now.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Confidence" },
  { text: "Education is the passport to the future.", category: "Learning" },
  { text: "Learning another language is like becoming another person.", category: "Growth" },
  { text: "Words are the voice of the heart.", category: "Speaking" },
  { text: "A different language is a different vision of life.", category: "Culture" },
  { text: "One language sets you in a corridor for life. Two languages open every door.", category: "Motivation" },
  { text: "To have another language is to possess a second soul.", category: "Culture" },
  { text: "Language is the blood of the soul into which thoughts run.", category: "Speaking" },
  { text: "The limits of my language mean the limits of my world.", category: "Growth" },
  { text: "Speak a new language so that the world will be a new world.", category: "Confidence" },
  { text: "You can never understand one language until you understand at least two.", category: "Learning" },
  { text: "Learning is a treasure that will follow its owner everywhere.", category: "Learning" },
  { text: "Knowledge of languages is the doorway to wisdom.", category: "Growth" },
  { text: "The tongue can paint what the eyes can't see.", category: "Speaking" },
  { text: "Change your language and you change your thoughts.", category: "Growth" },
  { text: "Who does not know another language, does not know his own.", category: "Culture" },
  { text: "Language shapes the way we think, and determines what we can think about.", category: "Learning" },
  { text: "If you talk to a man in a language he understands, that goes to his head.", category: "Communication" },
  { text: "If you talk to him in his language, that goes to his heart.", category: "Communication" },
  { text: "Language is the dress of thought.", category: "Speaking" },
  { text: "With languages, you are at home anywhere.", category: "Confidence" },
];

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Quote */}
          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground leading-relaxed mb-4">
                  "{currentQuote.text}"
                </p>
                <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-secondary/20 text-secondary">
                  {currentQuote.category}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-8 flex-wrap max-w-md mx-auto">
            {quotes.map((_, index) => (
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
    </section>
  );
};

export default Quotes;
