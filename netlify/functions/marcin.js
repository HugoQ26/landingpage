exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello Marcin',
      kupa: process.env.WEATHER,
      zupa: 'WEATHER',
    }),
  };
};
