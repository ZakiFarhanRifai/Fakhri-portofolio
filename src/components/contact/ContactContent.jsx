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
        access_key: "0a3c86e1-2a16-40e3-83e7-05440ce2f9fd",
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

        setForm({
          name: "",
          email: "",
          message: "",
        });
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
    <section
      id="contact"
      className="py-24 bg-black"
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2"
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -40 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="flex flex-col items-center justify-center text-center  lg:text-left lg:items-start"
          >
            <span className="flex items-center gap-4 mb-6 text-xs tracking-[0.3em] uppercase text-gray-400">
              Get In Touch
              <span className="w-20 h-px bg-gray-600" />
            </span>

            <h2 className="text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              Let’s Work
              <span className="block text-gray-400">
                Together
              </span>
            </h2>

            <p className="max-w-md mt-8 text-base leading-relaxed text-gray-400">
              Have a project in mind or just want to say hello?
              Feel free to reach out. I’m always open to discussing new ideas.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-10">
              <SocialIcon
                href="https://wa.me/6285138090248"
                icon={<FaWhatsapp size={20} />}
              />

              <SocialIcon
                href="https://www.instagram.com/fkhr1_?igsh=MTQzbGI2ZDJzcWhxMg=="
                icon={<FaInstagram size={20} />}
              />

              <SocialIcon
                href="https://x.com/fkhr1_"
                icon={<FaXTwitter size={18} />}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
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
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="flex justify-center  lg:justify-end"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-4 text-sm font-medium text-black transition-all duration-300 bg-white rounded-full hover:scale-105 hover:bg-gray-200 active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

const AnimatedField = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="space-y-2">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-xl border bg-transparent px-5 py-4 text-sm text-white outline-none transition-all
      placeholder:text-gray-500 focus:border-white
      ${
        error
          ? "border-red-500"
          : "border-gray-700"
      }`}
    />

    {error && (
      <p className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const Textarea = ({
  name,
  placeholder,
  value,
  onChange,
  error,
}) => (
  <div className="space-y-2">
    <textarea
      rows={6}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full resize-none rounded-xl border bg-transparent px-5 py-4 text-sm text-white outline-none transition-all
      placeholder:text-gray-500 focus:border-white
      ${
        error
          ? "border-red-500"
          : "border-gray-700"
      }`}
    />

    {error && (
      <p className="text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center w-12 h-12 text-black transition-all duration-300 bg-white rounded-full hover:bg-gray-200"
  >
    {icon}
  </motion.a>
);