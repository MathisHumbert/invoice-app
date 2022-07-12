const { UnauthenticatedError } = require('../errors');

const checkPermission = (requestUser, ressourceUserID) => {
  if (requestUser.userID === ressourceUserID.toString()) return;
  throw new UnauthenticatedError('Not authorized to access this route');
};

module.exports = checkPermission;
