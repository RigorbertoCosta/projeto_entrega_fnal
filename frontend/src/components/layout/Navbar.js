// import { Link } from 'react-router-dom'
// import React, { useContext } from 'react'
// import styles from './Navbar.module.css'
// import Logo from '../../assets/img/logo_n.png'
// import { Context } from '../../context/UserContext'
// import 'bootstrap/dist/css/bootstrap.min.css'


// function Navbar() {
//   const { authenticated, logout } = useContext(Context)

//   return (
//     <nav className={styles.navbar}>

//       <div className={styles.navbar_logo}>
//         <Link to="/"><img src={Logo} alt="RR Street Wear" /></Link>       
//       </div>
      
//       <ul>
//         {/* <li> */}
//           {/* <Link to="/">Casdastrar</Link> */}
//         {/* </li> */}
//         {authenticated ? (
//           <>
            
//             <li>
//               <Link to="/user/profile">Meu Perfil</Link>
//             </li>
//             <li onClick={logout}>Sair</li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/login">Entrar</Link>
//             </li>
//             <li>
//               <Link to="/register">Registar</Link>
//             </li>
//             <li>
//               <Link to="/sobre">Sobre</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   )
// }

// export default 

import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Logo from '../../assets/img/logo_n.png'
import { Context } from '../../context/UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  const { authenticated, logout } = useContext(Context)
  // Exemplo de número de itens no carrinho (você pode obter isso do contexto ou estado global)
  const cartItemsCount = 3;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/"><img src={Logo} alt="RR Street Wear" /></Link>       
      </div>
      
      <ul>
        {authenticated ? (
          <>
            <li>
              <Link to="/user/profile">Meu Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Registar</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </>
        )}
        {/* Adicionando o ícone do carrinho */}
        <li className={styles.cartIcon}>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartItemsCount > 0 && (
              <span className={styles.cartCount}>{cartItemsCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
