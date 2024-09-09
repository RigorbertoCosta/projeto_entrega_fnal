import React, { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";



const Context = createContext();

function UserProvider({ children }) {
  const { authenticated, loading, register, login, logout} = useAuth();
  const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateCarrinho = (novoCarrinho) => {
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  return (
    <Context.Provider
      value={{ loading, authenticated, register, login, logout, carrinho, updateCarrinho, isLoggedIn }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };