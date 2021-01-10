const apiRouter = require('express').Router();

apiRouter.use('/users', require('../routers/usersRouter'));
apiRouter.use('/vacations', require('../routers/vactionsRouter'));



module.exports = apiRouter;