const express = require('express')

// Instantiate SQLite and database
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.data_source,
    sqlite3.OPEN_READWRITE
);

const app = express()
const port = 3000

// Express using json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
