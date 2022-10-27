const Base = require('steplix-microservice/server/routes');
const P = require('bluebird');
const { database, errors } = require('steplix-microservice');
const _ = require('lodash');

const formatDatesList = require('../../helpers/formatdateList');

class Route extends Base {
  validate(req) {
    return P.resolve();
  }

  handler(req) {
    return database.models.Rates.find()
      .then(async (rates = []) => {
        if (_.isEmpty(rates)) {
          throw new errors.NotFound('Rates not found');
        }

        const getRateCurrencies = rates.map(async (rate) => {
          const currencies = await database.models.Currencies.find({
            where: {
              id: rate.id_currency,
            },
          });

          return {
            ...rate,
            currency: currencies[0],
          };
        });

        const allRates = await P.all(getRateCurrencies);
        const dateFormatRates = formatDatesList(allRates);
        const orderRates = _.orderBy(dateFormatRates, ['created_at'], ['desc']);
        const uniqueRates = _.uniqBy(orderRates, 'id_currency');

        return uniqueRates;
      })
      .catch((error) => {
        if (!(error instanceof errors.CustomError)) throw error;
        throw errors.from(error);
      });
  }
}

module.exports = new Route('Rates').handlerize();
