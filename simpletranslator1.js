// Importing Packages
const express = require('express');
const cors = require('cors');
const app = express();
const translate = require('translate-google')

const host = 'localhost';
const port = 4039;

// CORS - Cross Origin Resource Sharing



app.get('/', (req, res) => {
    res.send(
        translate('good', { from: 'en', to: 'de' }).then(res => {
            console.log(res)

        }).catch(err => {
            console.error(err)
        })
    )
})


app.listen(port, host, () => {
    console.log(`Server is running at ${host}:${port}`)
})
