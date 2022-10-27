const Base = require('steplix-microservice/server/routes');
const P = require('bluebird');
const { database, errors } = require('steplix-microservice');
const _ = require('lodash');
const moment = require('moment');
const formatDatesList = require('../../helpers/formatdateList');

class Route extends Base {
  validate(req) {
    return P.resolve();
  }

  handler(req) {
    return database.models.Currencies.find({
      where: {
        symbol: req.params.symbol,
      },
    })
      .then(async (rates = []) => {
        if (_.isEmpty(rates)) {
          throw new errors.NotFound('Currencies not found');
        }

        const getRateCurrencies = rates.map(async (rate) => {
          const currencies = await database.models.Rates.find({
            where: {
              id_currency: rate.id,
            },
          });

          return {
            ...rate,
            rate: currencies,
          };
        });

        const allRates = await P.all(getRateCurrencies);
        const dateFormatRates = allRates.map((item) => {
          const rates = item.rate.at(-1);
          return {
            ...item,
            // only the last rate
            rate: _.orderBy(formatDatesList([rates]), ['created_at'], ['desc']),
          };
        });

        return dateFormatRates;
      })
      .catch((error) => {
        if (!(error instanceof errors.CustomError)) throw error;
        throw errors.from(error);
      });
  }
}

module.exports = new Route().handlerize();
