# Welcome to Crypto Currencies API

### Download & Install

```shell
$ git clone https://github.com/MatataFerra/SteplixMicroservice.git
$ npm install
$ cd && ./crypto docker-compose up -d --build
$ cd ../
$ ./scripts/install.sh --crypto
$ npm run dev
$ enjoy!
```

## Endpoints

- `GET` [/currencies] List all currencies.
- `GET` [/rates] List all rates.
- `GET` [/rates/{symbol}] List currency by simbol with the last rate.
- `POST` [/rates] Create new rate with body: id_currency, value.
