import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

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
      <div className="container px-4 mx-auto md:px-16">
        <div className="grid items-start grid-cols-1 gap-16 md:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col items-center mt-10 text-center md:mt-16 lg:mt-20 md:items-start md:text-left">
            <span className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              Get In Touch
              <span className="w-20 h-px bg-gray-600" />
            </span>

            <h2 className="mb-10 font-bold text-white text-7xl">
              Contact Me
            </h2>

            <div className="flex justify-center gap-4 md:justify-start">
              <SocialIcon
                href="https://wa.me/6285799830623"
                icon={<FaWhatsapp size={20} />}
                color="text-[#25D366]"
              />
              <SocialIcon
                href="https://instagram.com/username"
                icon={<FaInstagram size={20} />}
                color="text-[#E1306C]"
              />
              <SocialIcon
                href="https://x.com/username"
                icon={<FaXTwitter size={18} />}
                color="text-white"
                dark
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 text-sm font-medium text-black transition bg-white rounded-full hover:bg-gray-200"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

const Input = ({ name, placeholder, value, onChange, error }) => (
  <div className="space-y-1">
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full rounded-md border bg-transparent px-4 py-3 text-sm text-white
        outline-none placeholder:text-white
        ${error ? "border-red-500" : "border-white"}
      `}
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
      className={`
        w-full resize-none rounded-md border bg-transparent px-4 py-3 text-sm text-white
        outline-none placeholder:text-white
        ${error ? "border-red-500" : "border-white"}
      `}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const SocialIcon = ({ href, icon, color, dark }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex h-11 w-11 items-center justify-center rounded-full ${
      dark ? "bg-black border border-gray-600" : "bg-white"
    } ${color} transition hover:scale-110`}
  >
    {icon}
  </a>
);
