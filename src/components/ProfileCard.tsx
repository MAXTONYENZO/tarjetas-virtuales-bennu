import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import ShareModal from "./ShareModal.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

// TikTok icon (not in lucide)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverShadow: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/max.palaciostorres",
    icon: <Facebook className="w-6 h-6" />,
    bgColor: "bg-[#1877F2]",
    hoverShadow: "hover:shadow-[0_10px_40px_-10px_#1877F2]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/maxpalaciostorres/",
    icon: <Instagram className="w-6 h-6" />,
    bgColor: "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverShadow: "hover:shadow-[0_10px_40px_-10px_#dc2743]",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@maxpalaciostorres",
    icon: <TikTokIcon className="w-6 h-6" />,
    bgColor: "bg-gradient-to-r from-[#00f2ea] via-[#000000] to-[#ff0050]",
    hoverShadow: "hover:shadow-[0_10px_40px_-10px_#ff0050]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/max-tony-enzo-palacios-torres-7032b72bb/",
    icon: <Linkedin className="w-6 h-6" />,
    bgColor: "bg-[#0A66C2]",
    hoverShadow: "hover:shadow-[0_10px_40px_-10px_#0A66C2]",
  },
  // === BOTÓN DE WHATSAPP ===
  {
    name: "WhatsApp",
    url: "https://wa.me/51999957234?text=¡Hola%20Max!%20Te%20contacto%20desde%20tu%20tarjeta%20virtual.",
    icon: <MessageCircle className="w-6 h-6" />,
    bgColor: "bg-[#25D366]",
    hoverShadow: "hover:shadow-[0_10px_40px_-10px_#25D366]",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const profileVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      delay: 0.1,
    },
  },
};

const ProfileCard = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <motion.div
        className="w-full max-w-md mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Theme Toggle */}
        <motion.div className="flex justify-end mb-4" variants={itemVariants}>
          <ThemeToggle />
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="glass-card rounded-3xl p-8 glow-effect"
          variants={itemVariants}
        >
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center mb-6"
            variants={profileVariants}
          >
            <div className="profile-ring animate-float">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary">
                <img
                  src="/max.jpeg"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Profession */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              MAX PALACIOS
            </h1>
            <p className="text-muted-foreground text-lg">
              Desarrollador & Creador Digital
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-3" variants={containerVariants}>
            {socialLinks.map((link, index) => (
              <div key={link.name}>
                {/* Línea divisoria antes del botón de WhatsApp */}
                {link.name === "WhatsApp" && (
                  <div className="relative my-4">
                    <hr className="border-border" />
                    <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                      Contacto directo
                    </span>
                  </div>
                )}
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-button w-full ${link.bgColor} ${link.hoverShadow}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.icon}
                  <span className="text-base">{link.name}</span>
                </motion.a>
              </div>
            ))}
          </motion.div>

          {/* Share Button */}
          <motion.div
            className="mt-8 pt-6 border-t border-border"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setIsShareOpen(true)}
              className="w-full py-4 px-6 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground font-medium transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Compartir Tarjeta
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-center text-muted-foreground/60 text-sm mt-6"
          variants={itemVariants}
        >
          ❤️ BENNU - TECNOLOGÍA ❤️
        </motion.p>
      </motion.div>

      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </>
  );
};

export default ProfileCard;
