# Welcome to Crypto Currencies API

### Download & Install

1. git clone https://github.com/MatataFerra/SteplixMicroservice.git
2. npm install
3. cd && ./crypto docker-compose up -d --build
4. cd ../
5. ./scripts/install.sh --crypto
6. npm run dev
7. enjoy!

## Request

GET /currencies
GET /rates
GET /rates/{symbol}
POST /rates

### POST /rates

BODY

- id_currency
- value
