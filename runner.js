const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjNhYWFlZGZmLWYyZDMtNGI4Zi05NGUwLTdiN2IwY2FmYjcxNi0xNjc2NDE2MTgzMTE2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzhhNzE0ZmEtMWFhZS00YTQyLTk4Y2EtYTQ4NzRkNThhZGE5IiwidHlwZSI6InQifQ.9VoQVQBqgyB5xljbMfYtbsCA550HHOIziq51EQ48sSY
'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
