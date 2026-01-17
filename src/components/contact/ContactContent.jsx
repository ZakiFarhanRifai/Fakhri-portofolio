import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div
            className="
              mt-10
              flex flex-col
              items-center
              text-center

              md:mt-16
              md:items-start
              md:text-left

              lg:mt-20
              lg:pl-16
            "
          >
            <span className="mb-4 flex items-center gap-4 text-sm text-gray-400">
              Get In Touch
              <span className="h-px w-20 bg-gray-600" />
            </span>

            <h2 className="mb-10 text-7xl font-bold text-white">Contact Me</h2>

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
                icon={<FaTwitter size={18} />}
                color="text-black"
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
                  className="
                    rounded-full
                    bg-white
                    px-8
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition
                    hover:bg-gray-200
                  "
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

/* ================= SUB COMPONENTS ================= */

const Input = ({ placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="
      w-full
      rounded-md
      border
      border-white
      bg-transparent
      px-4
      py-3
      text-sm
      text-white
      outline-none
      placeholder:text-white
    "
  />
);

const Textarea = ({ placeholder }) => (
  <textarea
    rows={7}
    placeholder={placeholder}
    className="
      w-full
      resize-none
      rounded-md
      border
      border-white
      bg-transparent
      px-4
      py-3
      text-sm
      text-white
      outline-none
      placeholder:text-white
    "
  />
);

const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-white
      ${color}
      transition
      hover:scale-110
    `}
  >
    {icon}
  </a>
);
