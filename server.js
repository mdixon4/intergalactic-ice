import express from 'express'
import { handler } from './dist/server/entry.mjs'

const app = express()

app.use('/mybasepath', express.static('./dist/client'))
app.use('/mybasepath', handler)

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
