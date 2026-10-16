import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data";

export const WhatsFab = () => (
  <motion.a
    href={waLink()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
    data-testid="whatsapp-fab"
    className="pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-black shadow-[0_10px_30px_rgba(37,211,102,0.4)]"
    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.6, type: "spring", stiffness: 260, damping: 18 }}
    whileHover={{ scale: 1.12, rotate: -8 }} whileTap={{ scale: 0.92 }}
  >
    <MessageCircle size={26} />
  </motion.a>
);
