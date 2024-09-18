import api from "../../../utils/api";
import Input from "../../form/Input";
import { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import formStyles from "../../form/Form.module.css";
import useFlashMessage from "../../../hooks/useFlashMessage";
import RoundedImage from "../../layout/RoundedImage";

function Profile() {
  const tokenStorage = localStorage.getItem("token");

  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [token] = useState(tokenStorage || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .post(
        "/users/checkuser",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let msgType = "success";

    const formData = new FormData();

    const userFormData = await Object.keys(user).forEach((key) =>
      formData.append(key, user[key])
    );

    formData.append("user", userFormData);

    const data = await api
      .patch(`/users/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <section>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        {(user.image || preview) && (
          <RoundedImage
            src={
              preview
                ? URL.createObjectURL(preview)
                : `${process.env.REACT_APP_API}/images/users/${user.image}`
            }
            alt={user.name}
          />
        )}
      </div>
      <form onSubmit={handleSubmit} className={formStyles.form_container}>
        <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o e-mail"
          handleOnChange={handleChange}
          value={user.email || ""}
        />
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Digite o nome"
          handleOnChange={handleChange}
          value={user.nome || ""}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ""}
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
        <input type="submit" value="Editar" />
      </form>
    </section>
  );
}

export default Profile;
