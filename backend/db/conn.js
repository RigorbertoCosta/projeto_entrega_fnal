const mongoose = require('mongoose')

//lembrar de chamar o banco de loja
async function main() {
    await mongoose.connect('mongodb+srv://rigorbertocosta018:01888610506@cluster0.dwkw6os.mongodb.net/')
    console.log('Conectou ao Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose