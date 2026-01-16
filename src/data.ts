// src/data.ts

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
    photo: "/max.jpeg", // Asegúrate de que esta imagen esté en la carpeta 'public'
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
    ],
  },
  {
    id: "carmen",
    name: "CARMEN HUAMÁN",
    profession: "Wedding Planner",
    photo: "/carmen.jpeg",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/share/1AKGhB8GwV/",
        icon: "Facebook",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/carmenhuamanplanner?igsh=MWhranI4NXI3dnh1bA==",
        icon: "Instagram",
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@carmenhuamanplanner?_r=1&_t=ZS-936uxG3W3TI",
        icon: "TikTok",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/max-tony-enzo-palacios-torres-7032b72bb/",
        icon: "LinkedIn",
      },
    ],
  },
  {
    id: "jhivan",
    name: "JHIVAN LÓPEZ",
    profession: "Marketing Digital",
    photo: "/max.jpeg",
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
    ],
  },
];
