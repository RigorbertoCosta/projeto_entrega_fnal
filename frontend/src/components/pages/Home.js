import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrossel1 from './img/carrossel1.jpg'; 
import carrossel2 from './img/carrossel2.jpg'; 
import carrossel3 from './img/carrossel3.jpg'; 

function Home() {
    
    return (
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
    );
}

export default Home;
