import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Lightbulb, ChevronLeft, ChevronRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const myths = [
  {
    myth: "Grammar is the most important part of learning English.",
    reality: "Communication and fluency matter more. Grammar can be improved over time.",
    mythHindi: "व्याकरण अंग्रेजी सीखने का सबसे महत्वपूर्ण हिस्सा है।",
    realityHindi: "संवाद और प्रवाह अधिक महत्वपूर्ण हैं। व्याकरण समय के साथ सुधर सकता है।"
  },
  {
    myth: "You must have a native accent to speak good English.",
    reality: "Clarity matters more than accent. Many successful speakers have non-native accents.",
    mythHindi: "अच्छी अंग्रेजी बोलने के लिए native accent होना जरूरी है।",
    realityHindi: "उच्चारण की स्पष्टता accent से ज्यादा महत्वपूर्ण है।"
  },
  {
    myth: "Children learn languages faster than adults.",
    reality: "Adults can learn faster with proper methods and motivation.",
    mythHindi: "बच्चे वयस्कों से तेज़ भाषा सीखते हैं।",
    realityHindi: "वयस्क सही तरीके और motivation से तेज़ सीख सकते हैं।"
  },
  {
    myth: "You need to live in an English-speaking country to become fluent.",
    reality: "With internet and proper practice, you can achieve fluency anywhere.",
    mythHindi: "fluent बनने के लिए English-speaking देश में रहना जरूरी है।",
    realityHindi: "Internet और सही practice से कहीं भी fluency पा सकते हैं।"
  },
  {
    myth: "Making mistakes means you are bad at English.",
    reality: "Mistakes are essential for learning. Every expert was once a beginner.",
    mythHindi: "गलती करना मतलब आप English में कमजोर हैं।",
    realityHindi: "गलतियाँ सीखने के लिए जरूरी हैं। हर expert कभी beginner था।"
  },
  {
    myth: "You should only learn British or American English.",
    reality: "Any form of English is valid. Focus on clear communication.",
    mythHindi: "सिर्फ British या American English सीखनी चाहिए।",
    realityHindi: "English का कोई भी form valid है। Clear communication पर focus करें।"
  },
  {
    myth: "Reading and writing are more important than speaking.",
    reality: "All skills are equally important for complete language proficiency.",
    mythHindi: "पढ़ना-लिखना बोलने से ज्यादा important है।",
    realityHindi: "सभी skills पूर्ण language proficiency के लिए equal important हैं।"
  },
  {
    myth: "You need to memorize thousands of words to speak English.",
    reality: "300-500 common words cover 80% of daily conversations.",
    mythHindi: "English बोलने के लिए हजारों words याद करने होंगे।",
    realityHindi: "300-500 common words 80% daily conversations cover करते हैं।"
  },
  {
    myth: "English grammar is the hardest part to learn.",
    reality: "English grammar is simpler than many other languages.",
    mythHindi: "English grammar सबसे कठिन part है।",
    realityHindi: "English grammar कई भाषाओं से सरल है।"
  },
  {
    myth: "You must think in English to speak fluently.",
    reality: "Translation is natural at first. Thinking in English comes with practice.",
    mythHindi: "Fluently बोलने के लिए English में सोचना जरूरी है।",
    realityHindi: "शुरू में translation natural है। Practice से English में सोचना आएगा।"
  },
  {
    myth: "Only expensive courses can teach you English.",
    reality: "Free resources and consistent practice can be equally effective.",
    mythHindi: "सिर्फ महंगे courses ही English सिखा सकते हैं।",
    realityHindi: "Free resources और consistent practice भी उतने ही effective हैं।"
  },
  {
    myth: "You are too old to learn English.",
    reality: "Age is never a barrier. Many learn fluently at 50, 60, or beyond.",
    mythHindi: "आप English सीखने के लिए बहुत बूढ़े हो गए।",
    realityHindi: "उम्र कभी barrier नहीं। लोग 50, 60+ में भी fluently सीखते हैं।"
  },
  {
    myth: "You need a teacher to learn English.",
    reality: "Self-learning with proper resources is highly effective.",
    mythHindi: "English सीखने के लिए teacher जरूरी है।",
    realityHindi: "सही resources के साथ self-learning बहुत effective है।"
  },
  {
    myth: "English is the hardest language to learn.",
    reality: "English is actually one of the easier languages for many learners.",
    mythHindi: "English सबसे कठिन भाषा है।",
    realityHindi: "English असल में कई learners के लिए आसान भाषाओं में से एक है।"
  },
  {
    myth: "Watching English movies won't help you learn.",
    reality: "Movies and shows are excellent for learning natural expressions.",
    mythHindi: "English movies देखने से कुछ नहीं सीखेंगे।",
    realityHindi: "Movies और shows natural expressions सीखने के लिए excellent हैं।"
  },
  {
    myth: "You must learn all tenses before you can speak.",
    reality: "Simple present and past tenses cover most daily communication.",
    mythHindi: "बोलने से पहले सभी tenses सीखने होंगे।",
    realityHindi: "Simple present और past tenses ज्यादातर daily communication cover करते हैं।"
  },
  {
    myth: "Reading books is boring and won't help speaking.",
    reality: "Reading improves vocabulary, grammar, and expression naturally.",
    mythHindi: "Books पढ़ना boring है और speaking में help नहीं करेगा।",
    realityHindi: "Reading naturally vocabulary, grammar और expression improve करती है।"
  },
  {
    myth: "You can become fluent in just 30 days.",
    reality: "Fluency takes consistent effort over months or years.",
    mythHindi: "आप सिर्फ 30 दिनों में fluent बन सकते हैं।",
    realityHindi: "Fluency में महीनों या सालों की consistent effort लगती है।"
  },
  {
    myth: "Pronunciation is fixed and cannot be improved.",
    reality: "Pronunciation can always be improved with practice.",
    mythHindi: "Pronunciation fixed है और improve नहीं हो सकती।",
    realityHindi: "Pronunciation हमेशा practice से improve हो सकती है।"
  },
  {
    myth: "Using a dictionary makes you a weak learner.",
    reality: "Dictionaries are essential tools for vocabulary building.",
    mythHindi: "Dictionary use करना weak learner की निशानी है।",
    realityHindi: "Dictionaries vocabulary building के लिए essential tools हैं।"
  },
  {
    myth: "English has too many rules to learn.",
    reality: "Most rules have simple patterns that become intuitive with practice.",
    mythHindi: "English में बहुत ज्यादा rules हैं।",
    realityHindi: "ज्यादातर rules simple patterns हैं जो practice से intuitive बन जाते हैं।"
  },
  {
    myth: "You need perfect vocabulary to have a conversation.",
    reality: "Basic vocabulary with good delivery is more effective.",
    mythHindi: "Conversation के लिए perfect vocabulary चाहिए।",
    realityHindi: "Basic vocabulary with good delivery ज्यादा effective है।"
  },
  {
    myth: "Silent reading is enough to improve English.",
    reality: "Speaking aloud and listening are crucial for spoken English.",
    mythHindi: "Silent reading English improve करने के लिए काफी है।",
    realityHindi: "Spoken English के लिए बोलना और सुनना crucial है।"
  },
  {
    myth: "You should avoid your native language completely.",
    reality: "Your native language can help you understand concepts better.",
    mythHindi: "अपनी मातृभाषा पूरी तरह avoid करनी चाहिए।",
    realityHindi: "मातृभाषा concepts समझने में help कर सकती है।"
  },
  {
    myth: "Slang and informal English should not be learned.",
    reality: "Informal English is essential for real-world conversations.",
    mythHindi: "Slang और informal English नहीं सीखनी चाहिए।",
    realityHindi: "Real-world conversations के लिए informal English जरूरी है।"
  },
  {
    myth: "Online learning is not as effective as classroom learning.",
    reality: "Online learning can be equally or more effective with discipline.",
    mythHindi: "Online learning classroom learning जितनी effective नहीं है।",
    realityHindi: "Discipline के साथ online learning उतनी ही या ज्यादा effective है।"
  },
  {
    myth: "You can only learn English from native speakers.",
    reality: "Non-native teachers often understand learner struggles better.",
    mythHindi: "सिर्फ native speakers से ही English सीख सकते हैं।",
    realityHindi: "Non-native teachers अक्सर learner की problems बेहतर समझते हैं।"
  },
  {
    myth: "Speaking fast means you are fluent.",
    reality: "Clarity and coherence matter more than speed.",
    mythHindi: "Fast बोलना मतलब fluent होना।",
    realityHindi: "Clarity और coherence speed से ज्यादा matter करते हैं।"
  },
  {
    myth: "English is only useful for business and education.",
    reality: "English opens doors to entertainment, travel, and global friendships.",
    mythHindi: "English सिर्फ business और education के लिए useful है।",
    realityHindi: "English entertainment, travel, और global friendships के doors खोलती है।"
  },
  {
    myth: "Learning phrasal verbs is too confusing.",
    reality: "Phrasal verbs become natural with exposure and practice.",
    mythHindi: "Phrasal verbs सीखना बहुत confusing है।",
    realityHindi: "Exposure और practice से phrasal verbs natural बन जाते हैं।"
  },
  {
    myth: "You need to know all idioms to speak fluently.",
    reality: "Knowing 50-100 common idioms is sufficient for most situations.",
    mythHindi: "Fluently बोलने के लिए सभी idioms जानने होंगे।",
    realityHindi: "50-100 common idioms ज्यादातर situations के लिए काफी हैं।"
  },
  {
    myth: "Practicing alone won't improve speaking skills.",
    reality: "Self-practice, recording, and mirror practice are very effective.",
    mythHindi: "अकेले practice करने से speaking improve नहीं होगी।",
    realityHindi: "Self-practice, recording, और mirror practice बहुत effective हैं।"
  },
  {
    myth: "English pronunciation follows strict rules.",
    reality: "English has many exceptions; learning by exposure is key.",
    mythHindi: "English pronunciation strict rules follow करती है।",
    realityHindi: "English में बहुत exceptions हैं; exposure से सीखना key है।"
  },
  {
    myth: "You should only read academic books to improve.",
    reality: "Novels, magazines, and even comics help improve English.",
    mythHindi: "Improve करने के लिए सिर्फ academic books पढ़नी चाहिए।",
    realityHindi: "Novels, magazines, और comics भी English improve करते हैं।"
  },
  {
    myth: "Making notes won't help in language learning.",
    reality: "Notes help reinforce memory and organize learning.",
    mythHindi: "Notes बनाना language learning में help नहीं करेगा।",
    realityHindi: "Notes memory reinforce करने और learning organize करने में help करते हैं।"
  },
  {
    myth: "You need a large vocabulary to express yourself.",
    reality: "Creative use of known words is more valuable.",
    mythHindi: "खुद को express करने के लिए बड़ी vocabulary चाहिए।",
    realityHindi: "Known words का creative use ज्यादा valuable है।"
  },
  {
    myth: "Texting and chatting ruins your English.",
    reality: "Digital communication provides constant practice opportunities.",
    mythHindi: "Texting और chatting English खराब करती है।",
    realityHindi: "Digital communication constant practice opportunities देता है।"
  },
  {
    myth: "You should learn writing before speaking.",
    reality: "Speaking can be learned independently and often faster.",
    mythHindi: "Speaking से पहले writing सीखनी चाहिए।",
    realityHindi: "Speaking independently और अक्सर तेज़ी से सीखी जा सकती है।"
  },
  {
    myth: "Listening to English songs won't teach you anything.",
    reality: "Songs improve pronunciation, vocabulary, and rhythm.",
    mythHindi: "English songs सुनने से कुछ नहीं सीखेंगे।",
    realityHindi: "Songs pronunciation, vocabulary, और rhythm improve करते हैं।"
  },
  {
    myth: "You must be confident to start speaking English.",
    reality: "Confidence comes from speaking, not before it.",
    mythHindi: "English बोलना शुरू करने के लिए पहले confident होना जरूरी है।",
    realityHindi: "Confidence बोलने से आता है, पहले से नहीं।"
  },
  {
    myth: "Formal English is the only correct English.",
    reality: "Context determines which style of English is appropriate.",
    mythHindi: "Formal English ही सही English है।",
    realityHindi: "Context decide करता है कि कौन सी English style appropriate है।"
  },
  {
    myth: "You cannot learn multiple languages at once.",
    reality: "Many people successfully learn multiple languages simultaneously.",
    mythHindi: "एक साथ कई भाषाएं नहीं सीख सकते।",
    realityHindi: "कई लोग successfully एक साथ multiple languages सीखते हैं।"
  },
  {
    myth: "Translation apps make language learning useless.",
    reality: "Apps are tools; real learning requires practice and effort.",
    mythHindi: "Translation apps ने language learning बेकार कर दी।",
    realityHindi: "Apps tools हैं; real learning में practice और effort लगती है।"
  },
  {
    myth: "Podcasts are too advanced for beginners.",
    reality: "There are many podcasts designed specifically for beginners.",
    mythHindi: "Podcasts beginners के लिए बहुत advanced हैं।",
    realityHindi: "Beginners के लिए specifically designed कई podcasts हैं।"
  },
  {
    myth: "You need expensive software to learn English.",
    reality: "YouTube, free apps, and practice partners are enough.",
    mythHindi: "English सीखने के लिए महंगे software चाहिए।",
    realityHindi: "YouTube, free apps, और practice partners काफी हैं।"
  },
  {
    myth: "Learning English takes too much time daily.",
    reality: "Even 15-30 minutes of focused practice daily works.",
    mythHindi: "English सीखने में रोज़ बहुत time लगता है।",
    realityHindi: "15-30 minutes की focused daily practice भी काम करती है।"
  },
  {
    myth: "Accent reduction courses are necessary for everyone.",
    reality: "Most people don't need accent training; clarity is key.",
    mythHindi: "सभी के लिए accent reduction courses जरूरी हैं।",
    realityHindi: "ज्यादातर लोगों को accent training नहीं चाहिए; clarity key है।"
  },
  {
    myth: "You should be embarrassed about your accent.",
    reality: "Your accent is part of your identity; be proud of it.",
    mythHindi: "अपने accent पर शर्मिंदा होना चाहिए।",
    realityHindi: "आपका accent आपकी identity का हिस्सा है; proud रहें।"
  },
  {
    myth: "English speaking will make you forget your mother tongue.",
    reality: "You can be fluent in multiple languages without forgetting any.",
    mythHindi: "English बोलने से मातृभाषा भूल जाएंगे।",
    realityHindi: "बिना कोई भूले multiple languages में fluent हो सकते हैं।"
  },
  {
    myth: "Perfect English is required for job interviews.",
    reality: "Clear communication and confidence matter most in interviews.",
    mythHindi: "Job interviews के लिए perfect English चाहिए।",
    realityHindi: "Interviews में clear communication और confidence सबसे ज्यादा matter करते हैं।"
  },
];

const EnglishMyths = () => {
  const [currentMythIndex, setCurrentMythIndex] = useState(0);

  // Get today's myth based on a 50-day cycle
  const getTodaysMythIndex = () => {
    const startDate = new Date("2024-01-01");
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays % myths.length;
  };

  // Get 5 myths for display
  const displayedMyths = useMemo(() => {
    const startIndex = getTodaysMythIndex();
    const mythsToShow = [];
    for (let i = 0; i < 5; i++) {
      mythsToShow.push(myths[(startIndex + i) % myths.length]);
    }
    return mythsToShow;
  }, []);

  const nextMyth = () => {
    setCurrentMythIndex((prev) => (prev + 1) % displayedMyths.length);
  };

  const prevMyth = () => {
    setCurrentMythIndex((prev) => (prev - 1 + displayedMyths.length) % displayedMyths.length);
  };

  const currentMyth = displayedMyths[currentMythIndex];

  return (
    <section id="myths" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            <Lightbulb className="w-4 h-4" />
            Daily Myth Buster
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Common English <span className="text-primary">Myths</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't believe everything you hear about learning English. Let's bust some common myths!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentMythIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
          >
            {/* Myth */}
            <div className="p-6 bg-destructive/5 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-destructive uppercase tracking-wide mb-2">
                    ❌ Myth
                  </p>
                  <p className="text-lg font-medium text-foreground mb-2">
                    {currentMyth.myth}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentMyth.mythHindi}
                  </p>
                </div>
              </div>
            </div>

            {/* Reality */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
                    ✓ Reality
                  </p>
                  <p className="text-lg font-medium text-foreground mb-2">
                    {currentMyth.reality}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentMyth.realityHindi}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevMyth}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {displayedMyths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMythIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentMythIndex
                      ? "w-5 bg-primary"
                      : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMyth}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishMyths;
