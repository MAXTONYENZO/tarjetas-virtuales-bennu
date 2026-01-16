// src/pages/HomePage.tsx
import { Link } from "react-router-dom";
import { users } from "../data";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Tarjetas Virtuales
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Selecciona un perfil para ver su tarjeta
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user) => (
            <Link
              key={user.id}
              to={`/${user.id}`}
              className="glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 block"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/10">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-gray-400 mt-2">{user.profession}</p>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm">
                  Ver tarjeta
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
