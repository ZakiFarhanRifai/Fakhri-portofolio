import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    setLoading(true);

    try {
      const payload = {
        access_key: "",
        name: form.name,
        email: form.email,
        message: form.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success",
          text: "Your message has been sent",
          icon: "success",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Failed",
          text: "Message failed to send",
          icon: "error",
        });
      }
    } catch {
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-black py-28">
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
            className="flex flex-col items-center mt-10 text-center md:mt-16 md:items-start md:text-left"
          >
            <span className="flex items-center gap-4 mb-4 text-xs tracking-widest text-gray-400 uppercase">
              Get In Touch
              <span className="w-20 h-px bg-gray-600" />
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let’s Work
              <span className="block text-gray-400">Together</span>
            </h2>

            <p className="max-w-md mb-10 text-sm leading-relaxed text-gray-400">
              Have a project in mind or just want to say hello?
              Feel free to reach out. I’m always open to discussing new ideas.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <SocialIcon
                href="https://wa.me/6281414257998"
                icon={<FaWhatsapp size={20} />}
              />
              <SocialIcon
                href="https://instagram.com/username"
                icon={<FaInstagram size={20} />}
              />
              <SocialIcon
                href="https://x.com/username"
                icon={<FaXTwitter size={18} />}
              />
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
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </AnimatedField>

              <AnimatedField delay={0.1}>
                <Input
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </AnimatedField>

              <AnimatedField delay={0.2}>
                <Textarea
                  name="message"
                  placeholder="Tell me about your idea..."
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />
              </AnimatedField>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center md:justify-end"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 text-sm font-medium text-black transition bg-white rounded-full hover:scale-105 hover:bg-gray-200 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
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
      className={`w-full rounded-md border bg-transparent px-4 py-3 text-sm text-white outline-none
      placeholder:text-gray-500 ${error ? "border-red-500" : "border-gray-600"}`}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const Textarea = ({ name, placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <textarea
      rows={6}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full resize-none rounded-md border bg-transparent px-4 py-3 text-sm text-white outline-none
      placeholder:text-gray-500 ${error ? "border-red-500" : "border-gray-600"}`}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center text-black transition bg-white rounded-full shadow-md h-11 w-11 hover:shadow-lg"
  >
    {icon}
  </motion.a>
);
