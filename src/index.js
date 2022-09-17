const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const countRouter = require('./routers/count')

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(countRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
