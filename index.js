const app = require("./app");
const config = require("./config/config");
require("./config/db");
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
