import Logo from '../img/logo_n.png'
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
            <p>Somos apaixonados por streetwear. Nossa missão é trazer as últimas tendências do estilo urbano para todos que desejam se expressar através da moda. Cada peça é cuidadosamente escolhida para representar a cultura e a atitude que fazem do streetwear uma verdadeira forma de arte.</p>
            <p>Fundada em 2024, nossa loja se tornou referência no cenário urbano, sempre buscando inovação e autenticidade. Trabalhamos com os melhores designers e parceiros para garantir que cada lançamento seja único, com qualidade e estilo que você merece.</p>
            <p>Venha fazer parte dessa revolução na moda urbana. Estamos aqui para inspirar e ser inspirados por você. Junte-se a nós e seja você mesmo, com atitude e confiança.</p>
            </div>
        </main>

         <div class="container my-4">
            <img src={Logo} alt="Descrição da imagem" className="d-block w-100"/>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
 
    </body>
    )
}

export default Sobre