'use strict';

const Base = require('steplix-microservice/server/routes');
const _ = require('lodash');
const P = require('bluebird');
const { errors, database } = require('steplix-microservice');
const {
  validator,
  logger: { events },
} = require('steplix-microservice/helpers');

class Route extends Base {
  /**
   * Validate request
   */
  validate(req) {
    if (_.isEmpty(req.body)) {
      throw new errors.BadRequest('Bad request. Please set body parameters');
    }
    return P.resolve();
  }

  /**
   * Handle request
   */
  handler(req) {
    const context = {
      id_currency: req.body.id_currency,
      value: req.body.value,
    };

    return P.bind(this)
      .then(() => this.save(context))

      .catch((error) => {
        if (!(error instanceof errors.CustomError)) throw error;
        throw errors.from(error);
      });
  }

  /**
   * Save on database
   */
  async save(context) {
    const ratesData = {
      value: context.value,
      id_currency: context.id_currency,
    };

    /**
     * Rates model
     * @type {Array}
     *
     */
    const rates = await database.models.Rates.find();

    const findRate = rates.find(
      (rate) => rate.id_currency === context.id_currency
    );

    if (_.isEmpty(findRate) || !findRate) {
      throw new errors.BadRequest(
        "You can't create a new rate without a currency"
      );
    }

    return database.models.Rates.create(ratesData).then((response) => {
      if (!response) {
        throw new errors.InternalServerError('Not saved response');
      }
      context.response = response;
      return response;
    });
  }
}

module.exports = new Route().handlerize();
