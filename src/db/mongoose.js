const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://ja34luv:Ja34luvJa34luv@countercluster.cjkkbul.mongodb.net/counter-api?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('Connected to Database')
  })
  .catch(e => {
    console.log('Error:', e)
  })

// API KEY
// 6lwFHdiBlR1VhONkVYZXlEz7gquWauUbO6juFujyj9KtoaV9uE4FyTHt36GBfTHo

// Local counter-api
// mongodb://127.0.0.1:27017/counter-api
