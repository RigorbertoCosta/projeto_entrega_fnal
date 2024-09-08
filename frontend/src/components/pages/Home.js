// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import carrossel1 from './img/carrossel1.jpg';
// import carrossel2 from './img/carrossel2.jpg';
// import carrossel3 from './img/carrossel3.jpg';
// import produto1 from './img/camisa1.jpg';
// import produto2 from './img/camisa2.jpg';
// import produto3 from './img/camisa3.jpg';
// import produto4 from './img/camisa4.jpg';
// import produto5 from './img/camisa5.jpg';
// import produto6 from './img/camisa6.jpg';
// import produto7 from './img/camisa7.jpg';
// import produto8 from './img/camisa8.jpg';

// function Home() {
//     return (
//         <div>
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={carrossel1} className="d-block w-100" alt="Imagem 1" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel2} className="d-block w-100" alt="Imagem 2" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel3} className="d-block w-100" alt="Imagem 3" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             <section className="container mt-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
//                 <div className="row">
//                     <div className="col-12 text-center mb-4 text-white" style={{ backgroundColor: 'rgba(111, 3, 170, 1)' }}>
//                         <h2>Produtos em Destaque</h2>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto1} className="card-img-top" alt="Produto 1" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 1.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto2} className="card-img-top" alt="Produto 2" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 2.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto3} className="card-img-top" alt="Produto 3" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 3.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto4} className="card-img-top" alt="Produto 4" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 4.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto5} className="card-img-top" alt="Produto 5" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 5.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto6} className="card-img-top" alt="Produto 6" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 6.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto7} className="card-img-top" alt="Produto 7" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 7.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto8} className="card-img-top" alt="Produto 8" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 8.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Home;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import carrossel1 from './img/carrossel1.jpg';
// import carrossel2 from './img/carrossel2.jpg';
// import carrossel3 from './img/carrossel3.jpg';
// import produto1 from './img/camisa1.jpg';
// import produto2 from './img/camisa2.jpg';
// import produto3 from './img/camisa3.jpg';
// import produto4 from './img/camisa4.jpg';
// import produto5 from './img/camisa5.jpg';
// import produto6 from './img/camisa6.jpg';
// import produto7 from './img/camisa7.jpg';
// import produto8 from './img/camisa8.jpg';

// function Home() {
//     return (
//         <div>
//             {/* Carrossel */}
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={carrossel1} className="d-block w-100" alt="Imagem 1" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel2} className="d-block w-100" alt="Imagem 2" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel3} className="d-block w-100" alt="Imagem 3" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             {/* Filtros e Produtos em Destaque */}
//             <section className="container mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
//                 <div className="row">
//                     {/* Filtros */}
//                     <div className="col-md-3">
//                         <h4>Filtrar Produtos</h4>
//                         <form>
//                             {/* Categoria */}
//                             <div className="mb-3">
//                                 <label htmlFor="categorySelect" className="form-label">Categoria</label>
//                                 <select className="form-select" id="categorySelect">
//                                     <option value="">Todas</option>
//                                     <option value="camisetas">Camisetas</option>
//                                     <option value="calcas">Calças</option>
//                                     <option value="jaquetas">Jaquetas</option>
//                                 </select>
//                             </div>
//                             {/* Faixa de Preço */}
//                             <div className="mb-3">
//                                 <label htmlFor="priceRange" className="form-label">Faixa de Preço</label>
//                                 <input type="range" className="form-range" id="priceRange" min="0" max="500" step="10" />
//                                 <p>Preço: R$ <span id="priceValue">250</span></p>
//                             </div>
//                             {/* Botão de Aplicar Filtros */}
//                             <button type="submit" className="btn btn-primary">Aplicar Filtros</button>
//                         </form>
//                     </div>

//                     {/* Produtos em Destaque */}
//                     <div className="col-md-9">
//                         <div className="row">
//                             {[produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8].map((produto, index) => (
//                                 <div className="col-md-3 mb-4" key={index}>
//                                     <div className="card">
//                                         <img src={produto} className="card-img-top" alt={`Produto ${index + 1}`} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">Camisa HIGH</h5>
//                                             <p className="card-text">Descrição do produto {index + 1}.</p>
//                                             <a href="#" className="btn btn-primary">Comprar</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Home;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import carrossel1 from './img/carrossel1.jpg';
// import carrossel2 from './img/carrossel2.jpg';
// import carrossel3 from './img/carrossel3.jpg';
// import produto1 from './img/camisa1.jpg';
// import produto2 from './img/camisa2.jpg';
// import produto3 from './img/camisa3.jpg';
// import produto4 from './img/camisa4.jpg';
// // import produto5 from './img/camisa5.jpg';
// // import produto6 from './img/camisa6.jpg';
// // import produto7 from './img/camisa7.jpg';
// // import produto8 from './img/camisa8.jpg';

// function Home() {
//     return (
//         <div>
//             {/* Carrossel */}
//             <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={carrossel1} className="d-block w-100" alt="Imagem 1" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel2} className="d-block w-100" alt="Imagem 2" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src={carrossel3} className="d-block w-100" alt="Imagem 3" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             {/* Seção de Produtos em Destaque */}
//             <section className="container mt-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
//                 <div className="row">
//                     <div className="col-12 text-center mb-4 text-white" style={{ backgroundColor: 'rgba(111, 3, 170, 1)' }}>
//                         <h2>Produtos em Destaque</h2>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto1} className="card-img-top" alt="Produto 1" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 1.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto2} className="card-img-top" alt="Produto 2" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 2.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto3} className="card-img-top" alt="Produto 3" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 3.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-3 mb-4">
//                         <div className="card">
//                             <img src={produto4} className="card-img-top" alt="Produto 4" />
//                             <div className="card-body">
//                                 <h5 className="card-title">Camisa HIGH</h5>
//                                 <p className="card-text">Descrição do produto 4.</p>
//                                 <a href="#" className="btn btn-primary">Comprar</a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* Seção de Filtros e Produtos */}
//             <section className="container mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
//                 <div className="row">
//                     {/* Filtros */}
//                     <div className="col-md-3">
//                         <h4>Filtrar Produtos</h4>
//                         <form>
//                             {/* Categoria */}
//                             <div className="mb-3">
//                                 <label htmlFor="categorySelect" className="form-label">Categoria</label>
//                                 <select className="form-select" id="categorySelect">
//                                     <option value="">Todas</option>
//                                     <option value="camisetas">Camisetas</option>
//                                     <option value="calcas">Calças</option>
//                                     <option value="jaquetas">Jaquetas</option>
//                                 </select>
//                             </div>
//                             {/* Faixa de Preço */}
//                             <div className="mb-3">
//                                 <label htmlFor="priceRange" className="form-label">Faixa de Preço</label>
//                                 <input type="range" className="form-range" id="priceRange" min="0" max="500" step="10" />
//                                 <p>Preço: R$ <span id="priceValue">250</span></p>
//                             </div>
//                             {/* Botão de Aplicar Filtros */}
//                             <button type="submit" className="btn btn-primary">Aplicar Filtros</button>
//                         </form>
//                     </div>

//                     {/* Produtos em Destaque */}
//                     <div className="col-md-9">
//                         <div className="row">
//                             {[produto1, produto2, produto3, produto4].map((produto, index) => (
//                                 <div className="col-md-3 mb-4" key={index}>
//                                     <div className="card">
//                                         <img src={produto} className="card-img-top" alt={`Produto ${index + 1}`} />
//                                         <div className="card-body">
//                                             <h5 className="card-title">Camisa HIGH</h5>
//                                             <p className="card-text">Descrição do produto {index + 1}.</p>
//                                             <a href="#" className="btn btn-primary">Comprar</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import carrossel1 from "./img/carrossel1.jpg";
import carrossel2 from "./img/carrossel2.jpg";
import carrossel3 from "./img/carrossel3.jpg";
import produto1 from "./img/camisa1.jpg";
import produto2 from "./img/camisa2.jpg";
import produto3 from "./img/camisa3.jpg";
import produto4 from "./img/camisa4.jpg";

const productsInEmphasis = [
  {
    id: 14,
    title: "Camisa Santa Cruz",
    price: 59.9,
    rating: 5,
    brand: "Santa Cruz",
    thumbnail:
      "https://images.tcdn.com.br/img/img_prod/560775/camiseta_santa_cruz_screaming_hand_front_preto_azul_12368_1_9a8568570af8998a07aec1e44079cecc.jpg",
  },
  {
    id: 10,
    title: "Calça Cargo HIGH",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 7,
    title: "Boné Five Panel",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO6keQVELMDIih-5cJXKzZlhtsVpTF_yxkA&usqp=CAU",
  },
  {
    id: 18,
    title: "Moletom THRASHER",
    price: 129.9,
    rating: 5,
    brand: "Thrasher",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
];

const products = [
  {
    id: 1,
    type: "BERMUDA",
    title: "Bermuda HIGH Marrom",
    price: 99.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    type: "BERMUDA",
    title: "Bermuda HIGH Branca",
    price: 99.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    type: "BERMUDA",
    title: "Bermuda HIGH Preta",
    price: 99.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    type: "BERMUDA",
    title: "Bermuda High Bege",
    price: 99.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    type: "BONE",
    title: "Boné Five Panel",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 6,
    type: "BONE",
    title: "Boné Five Panel",
    price: 59.9,
    rating: 5,
    brand: "Santa Cruz",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv48sua2Vd4BndFpdJeLIuBkqa9rMtDh6CdA&usqp=CAU",
  },
  {
    id: 7,
    type: "BONE",
    title: "Boné Five Panel",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtO6keQVELMDIih-5cJXKzZlhtsVpTF_yxkA&usqp=CAU",
  },
  {
    id: 8,
    type: "BONE",
    title: "Boné Five Panel",
    price: 59.9,
    rating: 5,
    brand: "Wats",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_-WTXj-O8c7F7Dr6EyLfOD_Y9RhZGle-Ng&usqp=CAU",
  },
  {
    id: 9,
    type: "CALCA",
    title: "Calça Cargo HIGH",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 10,
    type: "CALCA",
    title: "Calça Cargo HIGH",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 11,
    type: "CALCA",
    title: "Calça Cargo HIGH",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 12,
    type: "CALCA",
    title: "Calça Cargo HIGH",
    price: 109.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 13,
    type: "CAMISA",
    title: "Camisa High Preta",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://img.irroba.com.br/filters:fill(fff):quality(80)/lojaiiie/catalog/camisetas/high-company/high01/high01preto1.jpg",
  },
  {
    id: 14,
    type: "CAMISA",
    title: "Camisa Santa Cruz",
    price: 59.9,
    rating: 5,
    brand: "Santa Cruz",
    thumbnail:
      "https://images.tcdn.com.br/img/img_prod/560775/camiseta_santa_cruz_screaming_hand_front_preto_azul_12368_1_9a8568570af8998a07aec1e44079cecc.jpg",
  },
  {
    id: 15,
    type: "CAMISA",
    title: "Camisa High",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6Ks2kgE7yRqPLrIwg39iE-pKBkJdLdXP3w&usqp=CAU",
  },
  {
    id: 16,
    type: "CAMISA",
    title: "Camisa High",
    price: 59.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoPlbxnRy7bRSKf87bwG8g2UZb8qonut73g&usqp=CAU",
  },
  {
    id: 17,
    type: "MOLETOM",
    title: "Moletom THRASHER",
    price: 129.9,
    rating: 5,
    brand: "Thrasher",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 18,
    type: "MOLETOM",
    title: "Moletom THRASHER",
    price: 129.9,
    rating: 5,
    brand: "Thrasher",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
  {
    id: 19,
    type: "MOLETOM",
    title: "Moletom BRO NX",
    price: 129.9,
    rating: 5,
    brand: "BRO NX",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-ozp-WDw6qHxQ7pxJzIbfAjzyepDS6kdsA&usqp=CAU",
  },
  {
    id: 20,
    type: "MOLETOM",
    title: "Moletom HIGH",
    price: 129.9,
    rating: 5,
    brand: "High",
    thumbnail:
      "data:image/jpeg;base64,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",
  },
];

function Home() {
  return (
    <div>
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
                    R$ {produto.price.toFixed(2).replace(".", ",")}
                  </p>
                  <a href="#" className="btn btn-primary">
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
          <div className="col-12 col-md-4 col-lg-3 mb-4">
            <h4>Filtrar Produtos</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="categorySelect" className="form-label">
                  Categoria
                </label>
                <select className="form-select" id="categorySelect">
                  <option value="todos">Todos</option>
                  <option value="camisetas">Camisetas</option>
                  <option value="calcas">Calças</option>
                  <option value="jaquetas">Moletons</option>
                  <option value="jaquetas">Bonés</option>
                  <option value="jaquetas">Bermudas</option>
                </select>
              </div>
              {/* <div className="mb-3">
                                <label htmlFor="priceRange" className="form-label">Faixa de Preço</label>
                                <input type="range" className="form-range" id="priceRange" min="0" max="500" step="10" />
                                <p>Preço: R$ <span id="priceValue">250</span></p>
                            </div> */}
              <button type="submit" className="btn btn-primary">
                Aplicar Filtros
              </button>
            </form>
          </div>

          <div className="col-12 col-md-8 col-lg-9">
            <div className="row">
              {products.map(
                (produto, index) => (
                  <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={produto.id}>
                    <div className="card">
                      <img
                        src={produto.thumbnail}
                        className="card-img-top"
                        alt={`Produto ${produto.title}`}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{produto.title}</h5>
                        <p className="card-text">
                            R$ {produto.price.toFixed(2).replace(".", ",")}
                        </p>
                        <a href="#" className="btn btn-primary">
                          Comprar
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
