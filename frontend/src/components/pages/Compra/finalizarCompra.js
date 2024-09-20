import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./finalizar.css";
import { Context } from "../../../context/UserContext";
import emailjs from "emailjs-com";

export default function FinalizarCompra() {
  const [carrinho, setCarrinho] = useState([]);
  const { updateCarrinho } = useContext(Context);
  const [formData, setFormData] = useState({
    email: "",
    rua: "",
    numero: "",
    cidade: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCarrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(storedCarrinho);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validarCompra = () => {
    for (const item of carrinho) {
      if (item.type !== "BONE" && !item.tamanho) {
        alert(`Por favor, escolha um tamanho para o produto: ${item.title}`);
        return false; // Indica que a validação falhou
      }
    }
    return true; // Se tudo estiver válido
  };

  const sendEmail = () => {
    const templateParams = {
      from_name: "Rigoberto",
      to_name: "RR_StreatWear",
      subject: "Nova Compra Finalizada",
      message: `
        Nova compra finalizada!\n\n
        Itens:\n
        ${carrinho
          .map(
            (item) =>
              `Produto: ${item.title} (ID: ${item.id}), Tamanho: ${item.tamanho}, Quantidade: ${item.quantity}, Preço: R$ ${item.price}`
          )
          .join("\n")}\n\n
        Total: R$ ${carrinho
          .reduce((acc, item) => acc + item.quantity * item.price, 0)
          .toFixed(2)}\n\n
        Dados de Entrega:\n
        Rua: ${formData.rua}\n
        Número: ${formData.numero}\n
        Cidade: ${formData.cidade}\n\n
        E-mail do Cliente: ${formData.email}
      `,
    };
    emailjs
      .send(
        "service_z07l8ib",
        "template_9yowm9j",
        templateParams,
        "o4TEQcfKqpSd2OCjd"
      )
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response);
      })
      .catch((err) => {
        console.error("Erro ao enviar o e-mail:", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);

    if (!validarCompra()) {
      return;
    }

    sendEmail();

    toast.success("PARABÉNS, você está na moda!");

    setTimeout(() => {
      localStorage.removeItem("carrinho");
      setCarrinho([]);
      updateCarrinho([]);
      navigate("/");
    }, 2000);
  };

  const quantidadeTotal = carrinho.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <main className="finalizar-compra">
      <ToastContainer autoClose={1000} hideProgressBar={true} closeOnClick />
      <h1>Finalizar Compra</h1>
      <p>
        {quantidadeTotal} itens em seu carrinho.
        <br />
        Total: R${" "}
        {carrinho
          .reduce((acc, item) => acc + item.quantity * item.price, 0)
          .toFixed(2)}
      </p>

      <form onSubmit={handleSubmit}>
        <h2>Dados para Entrega</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            name="rua"
            value={formData.rua}
            onChange={handleInputChange}
            placeholder="Digite sua rua"
            required
          />
        </div>
        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}
            placeholder="Digite o número"
            required
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleInputChange}
            placeholder="Digite sua cidade"
            required
          />
        </div>
        <button type="submit">Finalizar Compra</button>
        <button onClick={() => navigate("/cart")}>Voltar ao Carrinho</button>
        {/* <a href="https://api.whatsapp.com/send?phone=5579988072113&text=Compra%20finalizada!" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button type="button">Finalizar Compra</button>
        </a> */}
      </form>
    </main>
  );
}
