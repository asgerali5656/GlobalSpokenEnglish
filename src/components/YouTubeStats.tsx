import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeStats = () => {
  const [count, setCount] = useState(0);
  const targetCount = 1000;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-600 text-white p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Youtube className="w-10 h-10" />
                  <span className="text-xl font-semibold">YouTube Channel</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Global Spoken English
                </h3>
                <p className="text-white/80 max-w-md">
                  Subscribe to our YouTube channel for free English lessons, 
                  speaking tips, and vocabulary building videos.
                </p>
              </div>

              {/* Stats */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Users className="w-8 h-8" />
                  <span className="text-5xl md:text-6xl font-display font-bold">
                    {count}++
                  </span>
                </div>
                <p className="text-white/80 text-lg mb-6">Subscribers</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90 font-semibold px-8 py-6 rounded-xl shadow-lg"
                >
                  <a
                    href="https://www.youtube.com/@globalspokenenglishup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Subscribe Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeStats;
