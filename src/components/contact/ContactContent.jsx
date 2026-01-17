import { FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div
            className="
              flex flex-col
              items-center
              text-center

              mt-10
              md:mt-16
              lg:mt-20

              md:items-start
              md:text-left
              lg:pl-16
            "
          >
            <span className="mb-4 flex items-center gap-4 text-sm text-gray-400">
              Get In Touch
              <span className="h-px w-20 bg-gray-600" />
            </span>

            <h2 className="mb-10 text-7xl font-bold text-white">
              Contact Me
            </h2>

            <div className="flex gap-4 justify-center md:justify-start">
              <SocialIcon
                href="https://wa.me/6281414257998"
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
          <div className="lg:pr-16">
            <form className="space-y-6">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Textarea placeholder="Message" />

              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
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

const Input = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="w-full rounded-md border border-white bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white"
  />
);

const Textarea = ({ placeholder }) => (
  <textarea
    rows={7}
    placeholder={placeholder}
    className="w-full resize-none rounded-md border border-white bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white"
  />
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
