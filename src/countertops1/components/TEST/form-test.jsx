import React, { useContext, useState } from "react";

// Crear el contexto
const UserContext = React.createContext();

// Componente proveedor del contexto
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Componente de formulario para agregar usuarios y características
const UserForm = () => {
  const { addUser } = useContext(UserContext);
  const [user, setUser] = useState({ name: "", characteristics: [] });
  const [characteristic, setCharacteristic] = useState("");

  const handleUserChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleCharacteristicChange = (e) => {
    setCharacteristic(e.target.value);
  };

  const handleAddCharacteristic = () => {
    setUser({
      ...user,
      characteristics: [...user.characteristics, characteristic],
    });
    setCharacteristic("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ name: "", characteristics: [] }); // Resetear el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        onChange={handleUserChange}
        placeholder="Nombre del usuario"
      />
      <input
        type="text"
        value={characteristic}
        onChange={handleCharacteristicChange}
        placeholder="Añadir característica"
      />
      <button type="button" onClick={handleAddCharacteristic}>
        Añadir Característica
      </button>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

// Componente para mostrar la lista de usuarios
const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - Características:
          <ul>
            {user.characteristics.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

// Componente principal que engloba todo
const AppFormTest = () => {
  return (
    <UserProvider>
      <h1>Administrar Usuarios</h1>
      <UserForm />
      <UserList />
    </UserProvider>
  );
};

export default AppFormTest;
