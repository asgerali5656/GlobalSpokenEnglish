import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Send, User, Phone, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const branches = [
  { value: "main", label: "Main Branch - Karimuddinpur Ghosi, Mau", phone: "918299324931" },
  { value: "sarvoday", label: "Sarvoday College, Majhwaramod Ghosi", phone: "919161981244" },
  { value: "kopaganj", label: "Near HDFC Bank, Kopaganj", phone: "917607979876" },
];

const englishLevels = [
  { value: "beginner", label: "Beginner", example: "My name is Ali." },
  { value: "intermediate", label: "Intermediate", example: "I am learning spoken English." },
  { value: "advanced", label: "Advanced", example: "I can communicate confidently in English." },
];

const AdmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    branch: "",
    englishLevel: "",
    education: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.branch) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and branch selection are required.",
        variant: "destructive",
      });
      return;
    }

    const selectedBranch = branches.find((b) => b.value === formData.branch);
    const whatsappNumber = selectedBranch?.phone || "918299324931";

    const levelInfo = englishLevels.find((l) => l.value === formData.englishLevel);

    const message = `*New Admission Request*%0A%0A👤 *Name:* ${formData.name}%0A📅 *Age:* ${formData.age || "Not specified"}%0A📞 *Phone:* ${formData.phone}%0A📍 *Address:* ${formData.address || "Not specified"}%0A🏫 *Branch:* ${selectedBranch?.label}%0A📚 *English Level:* ${levelInfo?.label || "Not specified"} (${levelInfo?.example || ""})%0A🎓 *Education:* ${formData.education || "Not specified"}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    toast({
      title: "Opening WhatsApp!",
      description: "Your admission request will be sent to the selected branch.",
    });

    setFormData({
      name: "",
      age: "",
      phone: "",
      address: "",
      branch: "",
      englishLevel: "",
      education: "",
    });
  };

  return (
    <section id="admission-form" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <GraduationCap className="w-4 h-4" />
              Enroll Now
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Admission Form
            </h2>
            <p className="text-lg text-muted-foreground">
              Start your English speaking journey today. Fill in your details below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-12 py-6 rounded-xl"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Age
                </label>
                <Input
                  type="number"
                  placeholder="Your age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="py-6 rounded-xl"
                />
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
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-12 py-6 rounded-xl"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Your address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="pl-12 py-6 rounded-xl"
                  />
                </div>
              </div>

              {/* Branch */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Branch *
                </label>
                <Select
                  value={formData.branch}
                  onValueChange={(value) => setFormData({ ...formData, branch: value })}
                >
                  <SelectTrigger className="py-6 rounded-xl bg-card">
                    <SelectValue placeholder="Choose a branch" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    {branches.map((branch) => (
                      <SelectItem key={branch.value} value={branch.value}>
                        {branch.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* English Level */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  English Level
                </label>
                <Select
                  value={formData.englishLevel}
                  onValueChange={(value) => setFormData({ ...formData, englishLevel: value })}
                >
                  <SelectTrigger className="py-6 rounded-xl bg-card">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    {englishLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        <div>
                          <span className="font-medium">{level.label}</span>
                          <span className="text-muted-foreground text-sm ml-2">
                            - "{level.example}"
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Education */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Education
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Your highest education"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="pl-12 py-6 rounded-xl"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Admission Request
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionForm;
