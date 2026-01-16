import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// 50 tough English words with Hindi and Urdu meanings
const allWords = [
  { english: "Ephemeral", hindiMeaning: "क्षणिक", urduMeaning: "عارضی", explanation: "Lasting for a very short time", example: "Fame is often ephemeral in nature." },
  { english: "Ubiquitous", hindiMeaning: "सर्वव्यापी", urduMeaning: "ہر جگہ موجود", explanation: "Present everywhere at the same time", example: "Smartphones have become ubiquitous in modern life." },
  { english: "Eloquent", hindiMeaning: "वाक्पटु", urduMeaning: "فصیح", explanation: "Fluent and persuasive in speaking or writing", example: "She gave an eloquent speech at the conference." },
  { english: "Meticulous", hindiMeaning: "सूक्ष्म", urduMeaning: "محتاط", explanation: "Showing great attention to detail", example: "He is meticulous about his work." },
  { english: "Enigmatic", hindiMeaning: "रहस्यमय", urduMeaning: "پراسرار", explanation: "Difficult to understand or mysterious", example: "Her enigmatic smile left everyone puzzled." },
  { english: "Pragmatic", hindiMeaning: "व्यावहारिक", urduMeaning: "عملی", explanation: "Dealing with things sensibly and realistically", example: "We need a pragmatic approach to solve this problem." },
  { english: "Resilient", hindiMeaning: "लचीला", urduMeaning: "لچکدار", explanation: "Able to recover quickly from difficulties", example: "Children are often more resilient than adults." },
  { english: "Ambiguous", hindiMeaning: "अस्पष्ट", urduMeaning: "مبہم", explanation: "Open to more than one interpretation", example: "His ambiguous reply left us confused." },
  { english: "Benevolent", hindiMeaning: "परोपकारी", urduMeaning: "مہربان", explanation: "Well meaning and kindly", example: "The benevolent king helped his people." },
  { english: "Clandestine", hindiMeaning: "गुप्त", urduMeaning: "خفیہ", explanation: "Kept secret or done secretively", example: "They held a clandestine meeting at midnight." },
  { english: "Diligent", hindiMeaning: "परिश्रमी", urduMeaning: "محنتی", explanation: "Having or showing care in work", example: "Diligent students always succeed." },
  { english: "Exuberant", hindiMeaning: "उत्साही", urduMeaning: "پرجوش", explanation: "Filled with lively energy and excitement", example: "The children were exuberant at the party." },
  { english: "Fortuitous", hindiMeaning: "आकस्मिक", urduMeaning: "اتفاقی", explanation: "Happening by lucky chance", example: "Our meeting was completely fortuitous." },
  { english: "Gregarious", hindiMeaning: "मिलनसार", urduMeaning: "ملنسار", explanation: "Fond of company; sociable", example: "He is a gregarious person who loves parties." },
  { english: "Impeccable", hindiMeaning: "निर्दोष", urduMeaning: "بے عیب", explanation: "Perfect, without faults", example: "Her English pronunciation is impeccable." },
  { english: "Juxtapose", hindiMeaning: "साथ रखना", urduMeaning: "ملانا", explanation: "Place side by side for contrast", example: "The artist juxtaposed light and dark colors." },
  { english: "Kaleidoscopic", hindiMeaning: "रंग-बिरंगा", urduMeaning: "رنگارنگ", explanation: "Having complex patterns of colors", example: "The festival was a kaleidoscopic display of culture." },
  { english: "Lethargic", hindiMeaning: "सुस्त", urduMeaning: "کاہل", explanation: "Lacking energy or enthusiasm", example: "Hot weather makes me feel lethargic." },
  { english: "Magnanimous", hindiMeaning: "उदार", urduMeaning: "فراخ دل", explanation: "Very generous or forgiving", example: "She was magnanimous in victory." },
  { english: "Nonchalant", hindiMeaning: "उदासीन", urduMeaning: "لاپرواہ", explanation: "Calm and relaxed", example: "He gave a nonchalant shrug." },
  { english: "Ostentatious", hindiMeaning: "दिखावटी", urduMeaning: "نمائشی", explanation: "Showy, designed to impress", example: "His ostentatious lifestyle attracted attention." },
  { english: "Pernicious", hindiMeaning: "हानिकारक", urduMeaning: "نقصان دہ", explanation: "Having a harmful effect gradually", example: "Smoking has pernicious effects on health." },
  { english: "Quintessential", hindiMeaning: "सर्वोत्कृष्ट", urduMeaning: "مثالی", explanation: "Representing the most perfect example", example: "She is the quintessential professional." },
  { english: "Recalcitrant", hindiMeaning: "अड़ियल", urduMeaning: "ضدی", explanation: "Stubbornly resistant to authority", example: "The recalcitrant student refused to obey." },
  { english: "Sycophant", hindiMeaning: "चापलूस", urduMeaning: "چاپلوس", explanation: "A person who flatters to gain advantage", example: "He surrounded himself with sycophants." },
  { english: "Tenacious", hindiMeaning: "दृढ़", urduMeaning: "ثابت قدم", explanation: "Holding firmly to something", example: "Her tenacious spirit helped her succeed." },
  { english: "Unprecedented", hindiMeaning: "अभूतपूर्व", urduMeaning: "بے مثال", explanation: "Never done or known before", example: "The pandemic caused unprecedented challenges." },
  { english: "Vicarious", hindiMeaning: "परोक्ष", urduMeaning: "بالواسطہ", explanation: "Experienced through imagination", example: "She felt vicarious joy at his success." },
  { english: "Whimsical", hindiMeaning: "सनकी", urduMeaning: "من موجی", explanation: "Playfully quaint or unusual", example: "The garden had a whimsical design." },
  { english: "Xenophobic", hindiMeaning: "विदेशी-द्वेषी", urduMeaning: "غیر ملکیوں سے نفرت", explanation: "Having fear or dislike of foreigners", example: "Xenophobic attitudes harm society." },
  { english: "Yearn", hindiMeaning: "तड़पना", urduMeaning: "ترسنا", explanation: "Have an intense longing", example: "She yearned for her homeland." },
  { english: "Zealous", hindiMeaning: "उत्साही", urduMeaning: "جوشیلا", explanation: "Having great energy or enthusiasm", example: "He was zealous about learning English." },
  { english: "Aberration", hindiMeaning: "विचलन", urduMeaning: "انحراف", explanation: "A departure from what is normal", example: "This behavior is an aberration for him." },
  { english: "Cacophony", hindiMeaning: "कर्कश ध्वनि", urduMeaning: "شور", explanation: "A harsh discordant mixture of sounds", example: "The cacophony of traffic was unbearable." },
  { english: "Debilitate", hindiMeaning: "दुर्बल करना", urduMeaning: "کمزور کرنا", explanation: "Make weak or infirm", example: "The illness debilitated him for weeks." },
  { english: "Ebullient", hindiMeaning: "उत्साहपूर्ण", urduMeaning: "پرجوش", explanation: "Cheerful and full of energy", example: "Her ebullient personality is contagious." },
  { english: "Facetious", hindiMeaning: "हंसोड़", urduMeaning: "ہنسی مذاق", explanation: "Treating serious issues with humor", example: "He made a facetious remark about the situation." },
  { english: "Garrulous", hindiMeaning: "बातूनी", urduMeaning: "باتونی", explanation: "Excessively talkative", example: "The garrulous neighbor talked for hours." },
  { english: "Harbinger", hindiMeaning: "अग्रदूत", urduMeaning: "پیش خیمہ", explanation: "A sign of something to come", example: "The robin is a harbinger of spring." },
  { english: "Idiosyncrasy", hindiMeaning: "विशिष्टता", urduMeaning: "عجیب عادت", explanation: "A distinctive or peculiar characteristic", example: "Everyone has their own idiosyncrasies." },
  { english: "Judiciously", hindiMeaning: "विवेकपूर्ण", urduMeaning: "سمجھداری سے", explanation: "With good judgment", example: "Use your resources judiciously." },
  { english: "Kowtow", hindiMeaning: "झुकना", urduMeaning: "جھکنا", explanation: "Act excessively obedient", example: "He refused to kowtow to the boss." },
  { english: "Laconic", hindiMeaning: "संक्षिप्त", urduMeaning: "مختصر", explanation: "Using very few words", example: "His laconic reply surprised everyone." },
  { english: "Maverick", hindiMeaning: "स्वतंत्र विचारक", urduMeaning: "آزاد خیال", explanation: "An independent-minded person", example: "She was a maverick in her field." },
  { english: "Nebulous", hindiMeaning: "अस्पष्ट", urduMeaning: "دھندلا", explanation: "Vague or unclear", example: "The plans were still nebulous." },
  { english: "Obfuscate", hindiMeaning: "अस्पष्ट करना", urduMeaning: "مبہم کرنا", explanation: "Make unclear or confusing", example: "Don't try to obfuscate the truth." },
  { english: "Panacea", hindiMeaning: "रामबाण", urduMeaning: "علاج", explanation: "A solution for all problems", example: "Education is not a panacea for poverty." },
  { english: "Quagmire", hindiMeaning: "दलदल", urduMeaning: "دلدل", explanation: "A difficult situation", example: "The project became a legal quagmire." },
  { english: "Sanguine", hindiMeaning: "आशावादी", urduMeaning: "پرامید", explanation: "Optimistic in difficult situations", example: "She remained sanguine about the future." },
  { english: "Truculent", hindiMeaning: "झगड़ालू", urduMeaning: "جھگڑالو", explanation: "Eager to fight or argue", example: "His truculent attitude caused problems." },
];

const DailyWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get shuffled words based on day of the week (weekly cycle)
  const shuffledWords = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0-6
    const weekNumber = Math.floor(today.getTime() / (7 * 24 * 60 * 60 * 1000));
    
    // Create a seeded shuffle based on week number
    const seed = weekNumber;
    const shuffled = [...allWords].sort((a, b) => {
      const hashA = (seed * 31 + a.english.charCodeAt(0)) % 100;
      const hashB = (seed * 31 + b.english.charCodeAt(0)) % 100;
      return hashA - hashB;
    });
    
    // Return 7 words for each day of the week (show different 7 words each day)
    const wordsPerDay = 7;
    const startIndex = (dayOfWeek * wordsPerDay) % shuffled.length;
    return shuffled.slice(startIndex, startIndex + wordsPerDay).concat(
      shuffled.slice(0, Math.max(0, startIndex + wordsPerDay - shuffled.length))
    );
  }, []);

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledWords.length);
  };

  const prevWord = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledWords.length) % shuffledWords.length);
  };

  const currentWord = shuffledWords[currentIndex];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = dayNames[new Date().getDay()];

  return (
    <section id="daily-words" className="py-20 md:py-32 bg-background">
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
            <Sparkles className="w-4 h-4" />
            Learn Daily
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Daily English Words
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Expand your vocabulary with tough words every day. Each word comes with Hindi & Urdu meanings.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <Calendar className="w-4 h-4" />
            {today}'s Words • Weekly Cycle
          </div>
        </motion.div>

        {/* Word Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 md:p-10"
              >
                {/* Word Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-muted-foreground">
                    Word {currentIndex + 1} of {shuffledWords.length}
                  </span>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Volume2 className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                {/* English Word */}
                <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                  {currentWord.english}
                </h3>

                {/* Meanings Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-1">Hindi Meaning</p>
                    <p className="text-2xl font-semibold text-foreground">{currentWord.hindiMeaning}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-1">Urdu Meaning</p>
                    <p className="text-2xl font-semibold text-foreground" dir="rtl">{currentWord.urduMeaning}</p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Meaning</p>
                  <p className="text-lg text-foreground">{currentWord.explanation}</p>
                </div>

                {/* Example */}
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <p className="text-sm text-secondary font-medium mb-1">Example Sentence</p>
                  <p className="text-lg text-foreground italic">"{currentWord.example}"</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevWord}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextWord}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {shuffledWords.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyWords;
