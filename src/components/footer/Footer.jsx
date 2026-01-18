import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 mb-10"
    >
      <p className="text-sm text-center text-black">
        © Fakhri. All rights reserved.
      </p>
    </motion.footer>
  );
}
