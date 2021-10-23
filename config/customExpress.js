const express = require('express') 
const consign = require('consign')
const bodyPost = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyPost.urlencoded({extended: true}))
    app.use(bodyPost.json())

    consign()
        .include('controllers')
        .into(app)

    return app

}