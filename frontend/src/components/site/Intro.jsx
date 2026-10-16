import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Intro = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="intro-loader"
          className="fixed inset-0 z-[80] bg-[var(--ink)] flex items-center justify-center"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src="/img/logo-t.png"
            alt="Santos Barber"
            className="w-[70vw] max-w-[420px]"
            initial={{ opacity: 0, scale: 1.25, filter: "blur(18px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="absolute bottom-10 font-mono2 text-xs tracking-[0.4em] text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            SPRAY • TINTA • RÉGUA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
