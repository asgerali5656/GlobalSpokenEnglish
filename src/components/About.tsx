import { motion } from "framer-motion";
import { Award, Users, BookOpen, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "11+ Years Experience",
    description: "Proven track record of transforming students into confident English speakers",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced trainers who understand your learning journey",
  },
  {
    icon: BookOpen,
    title: "Practical Approach",
    description: "Focus on speaking practice, not just grammar rules and theory",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Courses designed for all levels - from beginners to advanced",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Your Journey to
              <span className="text-primary"> Fluent English </span>
              Starts Here
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>Global Spoken English</strong> stands as a beacon of excellence in the realm of spoken English education, 
              having been meticulously established and nurtured by the visionary educator <strong>Ghulam Nabi</strong>. 
              With an unwavering commitment spanning over eleven years, this distinguished institution has metamorphosed 
              the linguistic capabilities of countless aspirants, transmuting their hesitant utterances into eloquent, 
              articulate expressions.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ghulam Nabi, the esteemed architect of this educational edifice, has had the extraordinary privilege 
              of being mentored by <strong>Munawar Zama</strong>, the preeminent motivational orator whose profound 
              insights and transformative pedagogical philosophies have profoundly influenced the teaching methodology 
              employed at Global Spoken English. This intellectual lineage ensures that every student receives not 
              merely linguistic instruction, but a comprehensive cognitive transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our bespoke curriculum transcends conventional rote memorization, instead emphasizing practical verbal 
              communication, phonetic precision, and authentic conversational proficiency. Whether you are an absolute 
              novice embarking upon your inaugural foray into English communication or a seasoned learner seeking to 
              refine and polish your existing capabilities, our institution provides the quintessential environment 
              for your linguistic advancement.
            </p>

            {/* Hindi Slogan */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-2xl font-semibold text-primary text-center">
                "फ़र्राटेदार अंग्रेज़ी बोलना सीखें"
              </p>
              <p className="text-muted-foreground text-center mt-2">
                Master the art of speaking English fluently and with unwavering confidence
              </p>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
