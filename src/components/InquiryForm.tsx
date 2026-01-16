import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, User, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "918299324931";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    const message = `*New Inquiry*%0A%0A👤 *Name:* ${formData.name}%0A📞 *Phone:* ${formData.phone}%0A💬 *Message:* ${formData.message || "No message"}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "Opening WhatsApp!",
      description: "Your inquiry will be sent via WhatsApp.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="inquiry" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-4">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Have Questions?
              <span className="text-primary"> Let's Talk!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill in your details and we'll connect with you on WhatsApp. 
              Quick response guaranteed!
            </p>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">Direct WhatsApp Communication</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground">Quick Response Within Hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 py-6 rounded-xl"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pl-12 py-6 rounded-xl"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Tell us what you'd like to learn..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pl-12 min-h-[120px] rounded-xl"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
