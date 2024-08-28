import { useState, useEffect, useContext } from 'react';
import Input from '../../form/Input';
import { Link } from 'react-router-dom';
import styles from '../../form/Form.module.css';
import { Context } from '../../../context/UserContext';

function Register() {
  const [user, setUser] = useState({
    nome: '',
    CPF: '',
    CEP: '',
    Rua: '',
    Número: '',
    phone: '',
    email: '',
    password: '',
    confirmpassword: '',
    Bairro: '', // Adicionei o campo Bairro
    localidade: '', // Adicionei o campo Cidade
    uf: '', // Adicionei o campo Estado
  });

  const { register } = useContext(Context);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    const fetchAddress = async () => {
      const cleanCep = user.CEP.replace(/\D/g, '');

      if (cleanCep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
          const data = await response.json();

          if (!data.erro) {
            setUser(prevState => ({
              ...prevState,
              Rua: data.logradouro,
              Bairro: data.bairro,
              localidade: data.localidade,
              uf: data.uf
            }));
          } else {
            alert('CEP não encontrado.');
            setUser(prevState => ({
              ...prevState,
              Rua: '',
              Bairro: '',
              localidade: '',
              uf: ''
            }));
          }
        } catch (error) {
          console.error('Erro ao buscar o CEP:', error);
        }
      }
    };

    if (user.CEP.length === 8) {
      fetchAddress();
    }
  }, [user.CEP]);

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="CPF"
          type="text"
          name="CPF"
          placeholder="Digite o seu CPF"
          handleOnChange={handleChange}
        />
        <Input
          text="CEP"
          type="text"
          name="CEP"
          placeholder="Digite o CEP"
          handleOnChange={handleChange}
        />
        <Input
          text="Rua"
          type="text"
          name="Rua"
          placeholder="Digite a sua Rua"
          value={user.Rua}
          handleOnChange={handleChange}
        />
        <Input
          text="Número"
          type="number"
          name="Número"
          placeholder="Digite o número"
          handleOnChange={handleChange}
        />
        <Input
          text="Bairro"
          type="text"
          name="Bairro"
          placeholder="Digite o Bairro"
          value={user.Bairro}
          handleOnChange={handleChange}
        />
        <Input
          text="Cidade"
          type="text"
          name="localidade"
          placeholder="Digite a Cidade"
          value={user.localidade}
          handleOnChange={handleChange}
        />
        <Input
          text="Estado"
          type="text"
          name="uf"
          placeholder="Digite o Estado"
          value={user.uf}
          handleOnChange={handleChange}
          //readonly
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </section>
  );
}

export default Register;
