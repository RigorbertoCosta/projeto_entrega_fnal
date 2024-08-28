import api from '../../../utils/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddProduct.module.css'
import useFlashMessage from '../../../hooks/useFlashMessage'

function AddProduct() {
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  const navigate = useNavigate()

  async function registerProduct(product) {
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
      .post(`product/create`, formData, {
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
    navigate('/product/myproduct')
  }

  return (
    <section>
      <div className={styles.addProduct_header}>
        <h1>Cadastrar Produto</h1>
      </div>
      <productForm handleSubmit={registerProduct} btnText="Cadastrar" />
    </section>
  )
}

export default AddProduct