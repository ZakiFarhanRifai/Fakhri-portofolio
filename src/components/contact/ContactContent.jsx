import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const whatsappMessage = `
Halo Kak.
Saya ${form.name}
Email Saya ${form.email}

${form.message}
      `;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=6285799830623&text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section className="relative min-h-screen py-24 bg-black">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.25 } },
        }}
        className="container px-4 mx-auto md:px-16"
      >
        <div className="grid items-start grid-cols-1 gap-16 md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            className="flex flex-col items-center mt-10 text-center md:mt-16 lg:mt-20 md:items-start md:text-left"
          >
            <span className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              Get In Touch
              <span className="w-20 h-px bg-gray-600" />
            </span>

            <h2 className="mb-10 font-bold text-white text-7xl">
              Contact Me
            </h2>

            <div className="flex justify-center gap-4 md:justify-start">
              <SocialIcon href="https://wa.me/6285799830623" icon={<FaWhatsapp size={20} />} color="text-[#25D366]" />
              <SocialIcon href="https://instagram.com/username" icon={<FaInstagram size={20} />} color="text-[#E1306C]" />
              <SocialIcon href="https://x.com/username" icon={<FaTwitter size={18} />} color="text-black" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatedField delay={0}>
                <Input {...{ name: "name", placeholder: "Name", value: form.name, onChange: handleChange, error: errors.name }} />
              </AnimatedField>

              <AnimatedField delay={0.1}>
                <Input {...{ name: "email", placeholder: "Email", value: form.email, onChange: handleChange, error: errors.email }} />
              </AnimatedField>

              <AnimatedField delay={0.2}>
                <Textarea {...{ name: "message", placeholder: "Message", value: form.message, onChange: handleChange, error: errors.message }} />
              </AnimatedField>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center md:justify-end"
              >
                <button
                  type="submit"
                  className="px-8 py-3 text-sm font-medium text-black transition bg-white rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

const AnimatedField = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const Input = ({ name, placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-md border bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white ${
        error ? "border-red-500" : "border-white"
      }`}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const Textarea = ({ name, placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <textarea
      rows={7}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full resize-none rounded-md border bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white ${
        error ? "border-red-500" : "border-white"
      }`}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const SocialIcon = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className={`flex h-11 w-11 items-center justify-center rounded-full bg-white ${color}`}
  >
    {icon}
  </motion.a>
);
