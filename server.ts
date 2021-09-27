const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3001

// force https
app.use((req, res, next) => {
  if (!req.secure && process.env.NODE_ENV === 'production') {
    res.redirect(`https://${req.get('host')}${req.url}`)
  } else {
    next()
  }
})

app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

app.listen(port, () => console.log(`App is live on port ${port}!`))
