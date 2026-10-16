import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskLines = ({ lines, delay = 0, className = "", lastClass = "" }) => (
  <motion.span className={`block ${className}`} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
    {lines.map((l, i) => (
      <span key={i} className="block overflow-hidden pt-[0.14em] -mt-[0.14em] pb-[0.06em]">
        <motion.span
          className={`block ${i === lines.length - 1 ? lastClass : ""}`}
          variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] } } }}
        >
          {l}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

export const Eyebrow = ({ children, testId }) => (
  <p data-testid={testId} className="font-mono2 text-xs uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-3">
    <span className="h-px w-10 bg-spray" />
    {children}
  </p>
);
