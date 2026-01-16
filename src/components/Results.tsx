import { motion } from "framer-motion";
import { Trophy, ExternalLink, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  return (
    <section id="results" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Trophy className="w-4 h-4" />
            Student Achievements
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Our Students'
            <span className="text-primary"> Success Stories</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See the remarkable results achieved by our students. Their success is our pride. 
            View detailed results and achievements of Global Spoken English students.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">95%</p>
              <p className="text-muted-foreground text-sm">Success Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">1000+</p>
              <p className="text-muted-foreground text-sm">Students Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">11+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            <a
              href="https://globalspokenenglishresultout.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Results
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
