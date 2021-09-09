const server = require("./app");

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
