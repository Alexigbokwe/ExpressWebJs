global.use = function (param) {
  try {
    return require(param);
  } catch (error) {
    return error;
  }
};
