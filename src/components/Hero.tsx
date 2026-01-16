import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "918299324931";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in learning spoken English at Global Spoken English.");

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-20 h-20 bg-secondary/20 rounded-2xl backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-primary/10 rounded-full backdrop-blur-sm hidden lg:block"
      />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          11+ Years of Excellence
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
        >
          Global Spoken
          <span className="block text-primary">English</span>
        </motion.h1>

        {/* Hindi Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-4"
        >
          "फ़र्राटेदार अंग्रेज़ी बोलना सीखें"
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Transform your English speaking skills from basic to fluent. 
          Join thousands of students who've built confidence with us.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Inquire on WhatsApp
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            <a href="#admission-form">
              <FileText className="mr-2 h-5 w-5" />
              Admission Form
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">11+</p>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">1000+</p>
            <p className="text-muted-foreground text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">3</p>
            <p className="text-muted-foreground text-sm">Branches</p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
