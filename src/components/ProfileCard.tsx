// EN src/components/ProfileCard.tsx

// 1. Importa el tipo 'User' desde data.ts
import type { User } from "../data"; // <-- Agrega esta línea
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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

// 2. Define las props que recibirá el componente
interface ProfileCardProps {
  user: User; // <-- Recibirá un objeto 'user'
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  // <-- Recibe 'user' aquí
  const [isShareOpen, setIsShareOpen] = useState(false);

  // 3. Mapa para renderizar el icono correcto basado en el nombre
  const iconMap: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="w-6 h-6" />,
    Instagram: <Instagram className="w-6 h-6" />,
    TikTok: <TikTokIcon className="w-6 h-6" />,
    LinkedIn: <Linkedin className="w-6 h-6" />,
  };

  // 4. Mapa para los estilos de cada red social (copiado de tu código original)
  const styleMap: Record<string, { bgColor: string; hoverShadow: string }> = {
    Facebook: {
      bgColor: "bg-[#1877F2]",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_#1877F2]",
    },
    Instagram: {
      bgColor: "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_#dc2743]",
    },
    TikTok: {
      bgColor: "bg-gradient-to-r from-[#00f2ea] via-[#000000] to-[#ff0050]",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_#ff0050]",
    },
    LinkedIn: {
      bgColor: "bg-[#0A66C2]",
      hoverShadow: "hover:shadow-[0_10px_40px_-10px_#0A66C2]",
    },
  };

  // ... (Los variants 'containerVariants', 'itemVariants', 'profileVariants' SE MANTIENEN IGUAL) ...

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
                {/* 5. Usa la foto del usuario */}
                <img
                  src={user.photo}
                  alt={`Foto de ${user.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Profession */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            {/* 6. Usa el nombre y profesión del usuario */}
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {user.name}
            </h1>
            <p className="text-muted-foreground text-lg">{user.profession}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-3" variants={containerVariants}>
            {/* 7. Mapea los enlaces sociales del usuario */}
            {user.socialLinks.map((link) => {
              const style = styleMap[link.name];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-button w-full ${style.bgColor} ${style.hoverShadow}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {iconMap[link.name]}
                  <span className="text-base">{link.name}</span>
                </motion.a>
              );
            })}
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
              {/* (El icono y texto del botón compartir se mantienen igual) */}
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
