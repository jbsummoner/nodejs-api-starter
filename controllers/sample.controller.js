const { sampleService } = require('../services');

const getIndex = async (req, res, next) => {
  let payload;
  try {
    payload = await sampleService.sampleServiceFunc();
    return res.json({
      message: '👋🌎🌍🌏',
      method: 'GetIndex',
      payload
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getIndex
};
