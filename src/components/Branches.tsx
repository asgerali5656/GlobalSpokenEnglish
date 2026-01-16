import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const branchesData = [
  {
    name: "Main Branch",
    address: "Karimuddinpur Ghosi, Mau",
    phone: "8299324931",
    whatsapp: "918299324931",
    mapQuery: "Karimuddinpur+Ghosi+Mau",
    isPrimary: true,
  },
  {
    name: "Sarvoday College Branch",
    address: "In front of Sarvoday College, Majhwaramod Ghosi, Dist. Mau",
    phone: "9161981244",
    whatsapp: "919161981244",
    mapQuery: "Majhwaramod+Ghosi+Mau",
    isPrimary: false,
  },
  {
    name: "Kopaganj Branch",
    address: "Near HDFC Bank, Kopaganj, Dist. Mau",
    phone: "7607979876",
    whatsapp: "917607979876",
    mapQuery: "Kopaganj+Mau",
    isPrimary: false,
  },
];

const Branches = () => {
  return (
    <section id="branches" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <MapPin className="w-4 h-4" />
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Visit Our Branches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have 3 convenient locations across Mau district. Choose the one nearest to you.
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {branchesData.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden ${
                branch.isPrimary ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="glass-card h-full p-6">
                {/* Primary Badge */}
                {branch.isPrimary && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    Main
                  </span>
                )}

                {/* Branch Name */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{branch.address}</p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Map Embed */}
                <div className="rounded-xl overflow-hidden mb-4 h-40">
                  <iframe
                    src={`https://maps.google.com/maps?q=${branch.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    title={`${branch.name} location`}
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl"
                  >
                    <a
                      href={`https://wa.me/${branch.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-xl"
                  >
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Directions
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
