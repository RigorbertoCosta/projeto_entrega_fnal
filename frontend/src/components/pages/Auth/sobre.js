import './sobre.css';
import Logo from '../img/logo_n.png';

function Sobre (){

    return (
    <body>
        <header class="about-header">
            <div class="container">
                <h1>Sobre Nós</h1>
               <p>Conheça mais sobre nossa marca e nossa missão</p>
            </div>
        </header>

        <main class="about-content">
            <div class="container">
                <h2>Nosso Estilo, Nossa Essência</h2>
                <p>No coração do streetwear, encontramos nossa paixão. Nossa missão é trazer as últimas tendências do estilo urbano para todos que desejam se expressar através da moda. Cada peça é escolhida com cuidado para refletir a cultura e a atitude que fazem do streetwear uma verdadeira forma de arte.</p>
                <p>Desde a nossa fundação em 2023, temos nos estabelecido como uma referência no cenário urbano, sempre em busca de inovação e autenticidade. Colaboramos com os melhores designers e parceiros para garantir que cada lançamento seja uma expressão única de qualidade e estilo.</p>
                <p>Junte-se a nós nessa revolução da moda urbana. Estamos aqui para inspirar e sermos inspirados por você. Venha e mostre sua verdadeira essência, com atitude e confiança.</p>
            </div>

            <div class="container my-4">
            <img src={Logo} alt="Descrição da imagem" className="d-block mx-auto w-50"/>
        </div>
        </main>

         {/* <div class="container my-4">
            <img src={Logo} alt="Descrição da imagem" className="d-block mx-auto w-50"/>
        </div> */}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
 
    </body>
    )
}

export default Sobre