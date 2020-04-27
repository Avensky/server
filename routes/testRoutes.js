const mongoose = require('mongoose');

const Weather = mongoose.model('data');

module.exports = app => {
  app.get(
    '/weather', (req, res) => {
        const weather = await Weather.find({ weather: req.data.elevation })
        res.send(req.weather);
  });

  app.get('/times', (req, res) => res.send(showTimes()));
};



showTimes = () => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result;
}