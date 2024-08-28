import api from '../../../utils/api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Dashboard.module.css'
import RoundedImage from '../../layout/RoundedImage'
import useFlashMessage from '../../../hooks/useFlashMessage'


function MyProduct() {
  const [product, setProduct] = useState([])
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api
      .get('/product/myproduct', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setProduct(response.data.pets)
      })
  }, [token])

  async function removeProduct(id) {
    let msgType = 'success'

    const data = await api
      .delete(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedProduct = products.filter((product) => product._id != id)
        setProducts(updatedProduct)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  async function concludeAdd(id) {
    let msgType = 'success'

    const data = await api
      .patch(`/product/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <div className={styles.petslist_header}>
        <h1>Meus Produtos Cadastrados</h1>
        <Link to="/produto/add">Cadastrar Produtos</Link>
      </div>
      <div className={styles.productslist_container}>
        {products.length > 0 &&
          products.map((product) => (
            <div key={product._id} className={styles.productlist_row}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/product/${product.images[0]}`}
                alt={product.nome}
                width="px75"
              />
              <span className="bold">{product.nome}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {product.adopter && (
                      <button
                        className={styles.conclude_btn}
                        onClick={() => {
                          concludeAdoption(product._id)
                        }}
                      >
                        Concluir cadastros
                      </button>
                    )}

                    <Link to={`/product/edit/${product._id}`}>Editar</Link>
                    <button
                      onClick={() => {
                        removeProduct(product._id)
                      }}
                    >
                      Excluir
                    </button>
                  </>
                ) : (
                  <p>Produto já cadastrado</p>
                )}
              </div>
            </div>
          ))}
        {products.length === 0 && <p>Ainda não há produtos cadastrados!</p>}
      </div>
    </section>
  )
}

export default MyProduct