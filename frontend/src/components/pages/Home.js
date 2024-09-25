import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carrossel1 from "./img/carrossel1.jpg";
import carrossel2 from "./img/carrossel2.jpg";
import carrossel3 from "./img/carrossel3.jpg";
import api from "../../utils/api";
import { Context } from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import TamanhoIdeal from "./tamanhoIdeal";

const productsInEmphasis = [
  {
    id: 14,
    title: "Camisa Santa Cruz",
    type: "CAMISA",
    price: 59.9,
    rating: 5,
    brand: "Santa Cruz",
    thumbnail:
      "https://images.tcdn.com.br/img/img_prod/560775/camiseta_santa_cruz_screaming_hand_front_preto_azul_12368_1_9a8568570af8998a07aec1e44079cecc.jpg",
  },
  {
    id: 10,
    title: "Calça Cargo HIGH",
    type: "CALCA",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 7,
    title: "Boné Five Panel",
    type: "BONE",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO6keQVELMDIih-5cJXKzZlhtsVpTF_yxkA&usqp=CAU",
  },
  {
    id: 18,
    title: "Moletom THRASHER",
    type: "MOLETOM",
    price: 129.9,
    rating: 5,
    brand: "Thrasher",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
];

function Home() {
  const { updateCarrinho } = useContext(Context);

  const [allProducts, setAllProducts] = useState([]);
  const [productsToRender, setProductsToRender] = useState([]);
  const [filter, setFilter] = useState("TODOS");

  async function getProductsInDb() {
    try {
      const { data: productsInDb } = await api.get("/products");

      setProductsToRender(productsInDb);
      setAllProducts(productsInDb);
    } catch (error) {
      console.log(error);
    }
  }

  function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let achado = false;
    for (let i = 0; i < carrinho.length; i++) {
      if (carrinho[i].id == produto.id) {
        carrinho[i].quantity++;
        achado = true;
        break;
      }
    }
    if (!achado) {
      const item = { ...produto, quantity: 1 };
      carrinho.push(item);
    }
    updateCarrinho(carrinho);
    toast.success("Adicionado");
  }

  useEffect(() => {
    getProductsInDb();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleApplyFilter = () => {
    const filteredProducts =
      filter === "TODOS"
        ? allProducts
        : allProducts.filter(
            (product) => product.type === filter.toUpperCase()
          );

    setProductsToRender(filteredProducts);
  };

  return (
    <div>
      <ToastContainer autoClose={1000} hideProgressBar={true} closeOnClick />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" data-bs-interval="2000">
          <div className="carousel-item active">
            <img src={carrossel1} className="d-block w-100" alt="Imagem 1" />
          </div>
          <div className="carousel-item">
            <img src={carrossel2} className="d-block w-100" alt="Imagem 2" />
          </div>
          <div className="carousel-item">
            <img src={carrossel3} className="d-block w-100" alt="Imagem 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section
        className="container mt-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.856)" }}
      >
        <div className="row">
          <div
            className="col-12 text-center mb-4 text-white"
            style={{ backgroundColor: "rgba(111, 3, 170, 1)" }}
          >
            <h2>Produtos em Destaque</h2>
          </div>

          {productsInEmphasis.map((produto, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card">
                <img
                  src={produto.thumbnail}
                  className="card-img-top"
                  alt={`Produto ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{produto.title}</h5>
                  <p className="card-text">
                    <p className="card-text">Marca: {produto.brand}</p>
                    <p className="card-text">Avaliação: {produto.rating}⭐</p>
                    R$ {produto.price.toFixed(2).replace(".", ",")}
                  </p>

                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => adicionarAoCarrinho(produto)}
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="container mt-4"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.856)" }}
      >
        <div className="row">
          <p></p>
          <div>
            <TamanhoIdeal />
          </div>
          <p></p>
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <h4>Filtrar Produtos</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="categorySelect" className="form-label">
                  Categoria
                </label>
                <select
                  className="form-select"
                  id="categorySelect"
                  onChange={handleFilterChange}
                >
                  <option value="TODOS">Todos</option>
                  <option value="CAMISA">Camisetas</option>
                  <option value="CALCA">Calças</option>
                  <option value="MOLETOM">Moletons</option>
                  <option value="BONE">Bonés</option>
                  <option value="BERMUDA">Bermudas</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handleApplyFilter}
                className="btn btn-primary"
              >
                Aplicar Filtros
              </button>
            </form>
          </div>

          <div className="col-12 col-md-8 col-lg-9">
            <div className="row">
              {productsToRender.map((produto) => (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mb-4"
                  key={produto.id}
                >
                  <div className="card">
                    <img
                      src={produto.thumbnail}
                      className="card-img-top"
                      alt={`Produto ${produto.title}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{produto.title}</h5>
                      <p className="card-text">
                        <p className="card-text">Marca: {produto.brand}</p>
                        <p className="card-text">
                          Avaliação: {produto.rating}⭐
                        </p>
                        R$ {produto.price.toFixed(2).replace(".", ",")}
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => adicionarAoCarrinho(produto)}
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
