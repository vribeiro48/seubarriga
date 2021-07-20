module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const save = (user) => {
    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};
