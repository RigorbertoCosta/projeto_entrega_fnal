import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './finalizar.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FinalizarCompra() {
  const [carrinho, setCarrinho] = useState([]);
  const [formData, setFormData] = useState({
    rua: '',
    numero: '',
    cidade: '',
    numeroCartao: '',
    nomeTitular: '',
    dataVencimento: '',
    cvv: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(storedCarrinho);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Formulário:', formData);
    localStorage.removeItem('carrinho');
    setCarrinho([]);
    navigate('/');
  };

  return (
    <main className="finalizar-compra">
      <ToastContainer />
      <h1>Finalizar Compra</h1>
      <p>
        {carrinho.length} itens em seu carrinho.<br />
        Total: R$ {carrinho.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)}
      </p>

      <form onSubmit={handleSubmit}>
        <h2>Dados para Entrega</h2>
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
        <button type="submit" >Finalizar Compra</button>
      </form>
    </main>
  );
}

