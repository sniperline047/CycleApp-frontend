const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "https://gentle-hamlet-21412.herokuapp.com" })
  );
};
