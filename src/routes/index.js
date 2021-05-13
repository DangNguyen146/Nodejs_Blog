const newRouter = require('./news.route');
const siteRoute = require('./site.route');

function route(app) {
    app.use('/news', newRouter);

    app.use('/', siteRoute);
}
module.exports = route;
