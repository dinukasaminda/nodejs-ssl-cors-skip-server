const baseUrl = "https://192.248.22.198";
//http://localhost:5000/api/accounts

const express = require("express");
const http = require("http");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios").default;
const fs = require("fs");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// //app.use(express.static(path.join(__dirname, "public")));
const PORT = 5000;
const server = http.Server(app);
server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// app.use(async (req, res, next) => {
//   try {
//     console.log(baseUrl + req.url);
//     const response = await axios.post(baseUrl + req.url, {
//       headers: {
//         bearer: req.headers["bearer"],
//       },
//       rejectUnauthorized: false,
//     });
//     console.log(response);
//     res.send(response.data).status(200);
//     return;
//   } catch (err) {
//     console.error(err);
//     res.send({ err: err }).status(400);
//     return;
//   }
// });

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(
  "/api",
  createProxyMiddleware({
    target: baseUrl,
    changeOrigin: true,
    secure: false,
  })
);
