const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const database = require("./Config/database");
// Routes V1
const routesVer1 = require("./Api/routes/user/index.route");
database.connect();
const app = express();
const port = Number(process.env.PORT) || 3001;

//neu muon mien nao truy cap thi dien vao
// const corsOption = {
//   origin: "link mien truy cap",
// };
// app.use(cors(corsOption));

app.use(cors());

//body parse
app.use(bodyParser.json());
// Routes V1
routesVer1(app);

app.listen(port, () => {
  console.log(`thanh cong ${port}`);
});
