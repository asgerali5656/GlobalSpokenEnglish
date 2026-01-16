import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DictionarySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const query = encodeURIComponent(`${searchTerm.trim()} meaning in Hindi and Urdu with example sentence`);
      window.open(`https://www.google.com/search?q=${query}`, "_blank");
    }
  };

  return (
    <section id="dictionary" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Search className="w-4 h-4" />
            Quick Lookup
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Dictionary Search
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Search any English word and instantly get its meaning in Hindi, Urdu, and see example sentences.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
            <div className="relative flex items-center">
              <div className="absolute left-4 pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Enter any English word..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-32 py-6 text-lg rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm"
              />
              <Button
                type="submit"
                className="absolute right-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </form>

          {/* Suggestions */}
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-3">Try these words:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Confidence", "Fluent", "Vocabulary", "Grammar", "Pronunciation"].map((word) => (
                <button
                  key={word}
                  onClick={() => setSearchTerm(word)}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DictionarySearch;
