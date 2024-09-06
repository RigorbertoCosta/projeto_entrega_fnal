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

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrossel1 from './img/carrossel1.jpg'; 
import carrossel2 from './img/carrossel2.jpg'; 
import carrossel3 from './img/carrossel3.jpg'; 
import produto1 from './img/camisa1.jpg';
import produto2 from './img/camisa2.jpg';
import produto3 from './img/camisa3.jpg';
import produto4 from './img/camisa4.jpg';

function Home() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
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
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="container mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
                <div className="row">
                    <div className="col-12 text-center mb-4 text-white" style={{ backgroundColor: 'rgba(111, 3, 170, 1)' }}>
                        <h2>Produtos em Destaque</h2>
                    </div>

                    {[produto1, produto2, produto3, produto4].map((produto, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <div className="card">
                                <img src={produto} className="card-img-top" alt={`Produto ${index + 1}`} />
                                <div className="card-body">
                                    <h5 className="card-title">Camisa HIGH</h5>
                                    <p className="card-text">Descrição do produto {index + 1}.</p>
                                    <a href="#" className="btn btn-primary">Comprar</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.856)' }}>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 mb-4">
                        <h4>Filtrar Produtos</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="categorySelect" className="form-label">Categoria</label>
                                <select className="form-select" id="categorySelect">
                                    <option value="">Todas</option>
                                    <option value="camisetas">Camisetas</option>
                                    <option value="calcas">Calças</option>
                                    <option value="jaquetas">Jaquetas</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priceRange" className="form-label">Faixa de Preço</label>
                                <input type="range" className="form-range" id="priceRange" min="0" max="500" step="10" />
                                <p>Preço: R$ <span id="priceValue">250</span></p>
                            </div>
                            <button type="submit" className="btn btn-primary">Aplicar Filtros</button>
                        </form>
                    </div>

                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="row">
                            {[produto1, produto2, produto3, produto4].map((produto, index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                                    <div className="card">
                                        <img src={produto} className="card-img-top" alt={`Produto ${index + 1}`} />
                                        <div className="card-body">
                                            <h5 className="card-title">Camisa HIGH</h5>
                                            <p className="card-text">Descrição do produto {index + 1}.</p>
                                            <a href="#" className="btn btn-primary">Comprar</a>
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
