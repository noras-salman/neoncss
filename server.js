const staticServer = require("static-server");

const server = new staticServer({
  rootPath: "./public",
  port: 3000,
});

server.start(function(){
  console.log("server started on port "+ server.port)
})