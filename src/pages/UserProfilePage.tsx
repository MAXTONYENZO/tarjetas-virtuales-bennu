// src/pages/UserProfilePage.tsx
import { useParams } from "react-router-dom";
import { users } from "../data";
import ProfileCard from "../components/ProfileCard";
import NotFound from "./NotFound"; // Asegúrate de importar tu componente 404

const UserProfilePage = () => {
  const { userId } = useParams(); // Obtiene el 'id' de la URL (ej: 'max')

  // Busca el usuario en el array 'users'
  const user = users.find((u) => u.id === userId);

  // Si no encuentra el usuario, muestra la página 404
  if (!user) {
    return <NotFound />;
  }

  // Si lo encuentra, muestra su ProfileCard
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black">
      <ProfileCard user={user} />
    </div>
  );
};

export default UserProfilePage;
