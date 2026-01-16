import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "918299324931";
  const message = encodeURIComponent("Hello! I'm interested in joining Global Spoken English.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors group animate-pulse-glow"
      style={{
        boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
      }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 text-sm font-medium text-white bg-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
