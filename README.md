# Engineering Challenge (Zul Digital)

* The app makes two requests to Zul's mock API;
* The first request is for authentication (it retrieves a JWT);
* The second request (which requires the token) gets a list/timeline of tweets;
* The app then randomly chooses a tweet and prints its content to the console in a formatted way (each line has a maximum of 45 characters, except if a single word is longer than that, in which case the line consists of the long word itself).
  
## Commands
### Run app (development mode)
`$ make run`

### Test app (production mode)
`$ make test-app`

### Run unit tests
`$ make test`

### Run linter
`$ make lint`

### Shutdown app
`$ make shutdown`

## Docs
* [NodeJS](https://nodejs.org/en/docs/)
* [Axios](https://www.npmjs.com/package/axios)
* [Jest](https://jestjs.io/docs/en/getting-started.html)
* [ESLint](https://eslint.org/docs/user-guide/getting-started)