const moment = require('moment');

const formatDatesList = (list) => {
  const dateFormatRates = list.map((item) => {
    return {
      ...item,
      created_at: moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a'),
    };
  });

  return dateFormatRates;
};

module.exports = formatDatesList;
