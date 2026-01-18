import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Zap, ChevronLeft, ChevronRight, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ramzan1 from "@/assets/ramzan-1.jpg";
import ramzan2 from "@/assets/ramzan-2.jpg";
import ramzan3 from "@/assets/ramzan-3.jpg";
import ramzan4 from "@/assets/ramzan-4.jpg";
import ramzan5 from "@/assets/ramzan-5.jpg";
import ramzan6 from "@/assets/ramzan-6.jpg";

const batchImages = [ramzan1, ramzan2, ramzan3, ramzan4, ramzan5, ramzan6];

const RamzanBatch = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    address: "",
    branch: "",
    englishLevel: "",
    education: "",
  });

  const whatsappNumber = "918299324931";

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % batchImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + batchImages.length) % batchImages.length);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🌙 *RAMZAN BATCH INQUIRY/ADMISSION* 🌙

📋 *Student Details:*
━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.fullName}
🎂 *Age:* ${formData.age}
📞 *Phone:* ${formData.phone}
📍 *Address:* ${formData.address}
🏫 *Preferred Branch:* ${formData.branch}
📊 *English Level:* ${formData.englishLevel}
🎓 *Education:* ${formData.education}
━━━━━━━━━━━━━━━━━

I am interested in joining the Ramzan Special Intensive Batch at Global Spoken English.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setIsFormOpen(false);
    setFormData({
      fullName: "",
      age: "",
      phone: "",
      address: "",
      branch: "",
      englishLevel: "",
      education: "",
    });
  };

  return (
    <section id="ramzan-batch" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              <Calendar className="w-4 h-4" />
              Special Program
            </span>
          </div>

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
            
            <div className="relative p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                    Ramzan Special
                    <span className="text-secondary"> Intensive Batch</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    One-month intensive program designed to take you from scratch to confident 
                    English speaker. Perfect for beginners looking for fast results.
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">One Month Duration</p>
                        <p className="text-sm text-muted-foreground">Intensive daily sessions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Small Batch Size</p>
                        <p className="text-sm text-muted-foreground">Personal attention guaranteed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Fast Results</p>
                        <p className="text-sm text-muted-foreground">Speak with confidence in 30 days</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsFormOpen(true)}
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enroll Now
                  </Button>
                </div>

                {/* Image Slider */}
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={batchImages[currentImage]}
                        alt={`Ramzan Batch Students ${currentImage + 1}`}
                        loading="lazy"
                        decoding="async"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </div>
                  
                  {/* Navigation */}
                  <div className="absolute inset-0 flex items-center justify-between p-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full bg-background/80 hover:bg-background"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full bg-background/80 hover:bg-background"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {batchImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? "w-6 bg-secondary"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-xl font-semibold shadow-lg">
                    Limited Seats!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enrollment Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  🌙 Ramzan Batch Enrollment
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      required
                      placeholder="Your age"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                    placeholder="Your address"
                  />
                </div>

                <div>
                  <Label htmlFor="branch">Preferred Branch *</Label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) => handleInputChange("branch", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Karimuddinpur Ghosi (Main)">Karimuddinpur Ghosi (Main)</SelectItem>
                      <SelectItem value="Majhwaramod Ghosi">Majhwaramod Ghosi (Sarvoday College)</SelectItem>
                      <SelectItem value="Kopaganj">Kopaganj (Near HDFC Bank)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="englishLevel">Current English Level *</Label>
                  <Select
                    value={formData.englishLevel}
                    onValueChange={(value) => handleInputChange("englishLevel", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner - My name is...">Beginner - "My name is..."</SelectItem>
                      <SelectItem value="Intermediate - I am learning spoken English">Intermediate - "I am learning spoken English"</SelectItem>
                      <SelectItem value="Advanced - I can communicate confidently">Advanced - "I can communicate confidently"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="education">Education *</Label>
                  <Input
                    id="education"
                    value={formData.education}
                    onChange={(e) => handleInputChange("education", e.target.value)}
                    required
                    placeholder="Your highest education"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit via WhatsApp
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RamzanBatch;
