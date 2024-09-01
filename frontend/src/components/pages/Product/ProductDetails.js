import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import useFlashMessage from '../../../hooks/useFlashMessage'

function ProductDetails() {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      setProduct(response.data.product)
    })
  }, [id])

  async function schedule() {
    let msgType = 'success'

    const data = await api
      .patch(`products/schedule/${product._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
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
    <>
      {product.name && (
        <section className={styles.product_details_container}>
          <div className={styles.productdetails_header}>
            <h1>Conhecendo o Product: {product.name}</h1>
          </div>
          <div className={styles.product_images}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_API}/images/product/${image}`}
                alt={product.name}
              />
            ))}
          </div>
          <p>
            <span className="bold">Cor:</span> {product.color}kg
          </p>
          <p>
            <span className="bold">Preço:</span> {product.price} anos
          </p>
          {token ? (
            <button onClick={schedule}>Adicionar ao carrinho</button>
          ) : (
            <p>
              Você precisa <Link to="/register">criar uma conta</Link> para
              Adicionar ao carrinho.
            </p>
          )}
        </section>
      )}
    </>
  )
}

export default ProductDetails