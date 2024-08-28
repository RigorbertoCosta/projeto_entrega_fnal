import api from '../../../utils/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './AddProduct'
import ProductForm from '../../form/Input'
import useFlashMessage from '../../../hooks/useFlashMessage'

function EditProduct() {
  const [product, setProduct] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    api
      .get(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setProduct(response.data.pet)
      })
  }, [token, id])

  async function updateProduct(product) {
    let msgType = 'success'

    const formData = new FormData()

    const productFormData = await Object.keys(product).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < product[key].length; i++) {
          formData.append(`images`, product[key][i])
        }
      } else {
        formData.append(key, product[key])
      }
    })

    formData.append('product', productFormData)

    const data = await api
      .patch(`product/${product._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
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
    <section>
      <div className={styles.addproduct_header}>
        <h1>Editando o Produto: {product.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {product.nome && (
        <ProductForm handleSubmit={updateProduct} productData={product} btnText="Editar" />
      )}
    </section>
  )
}

export default EditProduct