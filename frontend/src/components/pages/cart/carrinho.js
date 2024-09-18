import React, { useContext } from "react";
import { Context } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./cartProvider.css";

export function CartProvider() {
  const { carrinho, updateCarrinho } = useContext(Context);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function esvaziarCarrinho() {
    localStorage.removeItem("carrinho");
    updateCarrinho([]);
  }

  function removerItem(id) {
    const novosItens = carrinho.filter((item) => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(novosItens));
    updateCarrinho(novosItens);
  }

  function aumentarQuantidade(id) {
    const novosItens = carrinho.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    localStorage.setItem("carrinho", JSON.stringify(novosItens));
    updateCarrinho(novosItens);
  }

  function diminuirQuantidade(id) {
    const novosItens = carrinho.map((item) => {
      if (item.id === id) {
        const novaQuantidade = item.quantity > 1 ? item.quantity - 1 : 1;
        return { ...item, quantity: novaQuantidade };
      }
      return item;
    });

    localStorage.setItem("carrinho", JSON.stringify(novosItens));
    updateCarrinho(novosItens);
  }

  function finalizarCompra() {
    if (token) {
      navigate("/finalizar-Compra");
    } else {
      navigate("/login");
    }
  }

  return (
    <main className="cart-provider">
      <h1>Carrinho</h1>
      {carrinho.map((item) => (
        <div className="item" key={item.id}>
          <div className="item-image">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="item-details">
            <div className="float-left">
              <strong>{item.title}</strong>
              <br />
              Qtd: {item.quantity}
              <button
                onClick={() => diminuirQuantidade(item.id)}
                className="decrease-button"
              >
                -1
              </button>
              <button
                onClick={() => aumentarQuantidade(item.id)}
                className="increase-button"
              >
                +1
              </button>
            </div>
            <div className="float-right text-right">
              Valor unitário: R$ {item.price.toFixed(2)}
              <br />
              Subtotal: R$ {(item.quantity * item.price).toFixed(2)}
            </div>
            <div className="remove-container">
              <button
                onClick={() => removerItem(item.id)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
            <hr className="clear-both mb-10" />
          </div>
        </div>
      ))}
      {carrinho.length > 0 ? (
        <>
          <p className="text-center bold">
            Total: R${" "}
            {carrinho
              .reduce((acc, item) => (acc += item.quantity * item.price), 0)
              .toFixed(2)}
          </p>

          <div className="button-container">
            <button onClick={esvaziarCarrinho} className="clear-button">
              Esvaziar carrinho
            </button>
            <button onClick={finalizarCompra} className="submit-button">
              Finalizar Compra
            </button>
          </div>
        </>
      ) : (
        <p>Você ainda não adicionou itens ao seu carrinho.</p>
      )}
    </main>
  );
}
