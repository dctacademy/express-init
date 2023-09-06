const mongoose = require('mongoose')
const configureDB = async () => {
    const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
    const name = process.env.DB_NAME || 'test-app'
    try {
        await mongoose.connect(`${url}/${name}`)
        console.log('connected to db', name)
    } catch(e) {
        console.log('error connecting to db', e.message)
    }
}

module.exports = configureDB