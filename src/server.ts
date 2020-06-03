import express from 'express'

const app = express()

app.get('/usres', () => {
    console.log('Hello World')
})

app.listen(3333)