const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

app.use(express.static('public'))

const UserRoutes = require('./routes/UserRoutes')
const ProductRoutes = require('./routes/ProductRoutes')

app.use('/users', UserRoutes)
app.use('/products', ProductRoutes)

app.listen(5000)