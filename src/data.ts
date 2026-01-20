// Define el tipo de dato para un usuario
export interface User {
  id: string; // Para la ruta (ej: 'max')
  name: string; // Nombre completo
  profession: string;
  photo: string; // Ruta a la imagen o URL
  socialLinks: {
    name: string;
    url: string;
    icon: string; // Nombre del icono (ej: 'Facebook')
  }[];
}

// Los datos de los 3 usuarios
export const users: User[] = [
  {
    id: "max",
    name: "MAX PALACIOS",
    profession: "Desarrollador & Creador Digital",
    photo: "/max.jpeg", //
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/max.palaciostorres",
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/maxpalaciostorres/",
        icon: "Instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@maxpalaciostorres",
        icon: "TikTok",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/max-tony-enzo-palacios-torres-7032b72bb/",
        icon: "LinkedIn",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/51999957234?text=¡Hola%20Max!%20Te%20contacto%20desde%20tu%20tarjeta%20virtual.",
        icon: "WhatsApp",
      },
    ],
  },
  {
    id: "carmen",
    name: "CARMEN HUAMÁN",
    profession: "Wedding Planner ",
    photo: "/carmen.jpeg",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/carmenhuamanweddingplanner",
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/carmenhuamanplanner/",
        icon: "Instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@carmenhuamanplanner",
        icon: "TikTok",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carmen-huaman-planner-699073216/",
        icon: "LinkedIn",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/51998599594?text=¡Hola%20Carmen!%20Te%20contacto%20desde%20tu%20tarjeta%20virtual.",
        icon: "WhatsApp",
      },
    ],
  },
  {
    id: "jhivan",
    name: "JHIVAN CENTENO",
    profession: "Director creativo ",
    photo: "/jhivan.jpg",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/bennuproductora", // Cambia esto
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/bennuproductora/", // Cambia esto
        icon: "Instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@bennu_productora", // Cambia esto
        icon: "TikTok",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/kmjk/", // Cambia esto
        icon: "LinkedIn",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/51983114122?text=¡Hola%20Jhivan!%20Te%20contacto%20desde%20tu%20tarjeta%20virtual.",
        icon: "WhatsApp",
      },
    ],
  },
  {
    id: "roberto",
    name: "ROBERTO PINO",
    profession: "Director de eventos ",
    photo: "/roberto.jpeg",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/bennuproductora",
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/bennuproductora/",
        icon: "Instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@bennu_productora",
        icon: "TikTok",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/kmjk/",
        icon: "LinkedIn",
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/51998993610?text=¡Hola%20Max!%20Te%20contacto%20desde%20tu%20tarjeta%20virtual.",
        icon: "WhatsApp",
      },
    ],
  },
];
