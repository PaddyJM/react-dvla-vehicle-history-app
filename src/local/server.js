const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/motHistory", async (req, res) => {
  const response = await fetch(
    `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${req.query.registration}`,
    {
      headers: {
        "x-api-key": "HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp",
      },
      mode: "cors",
    }
  ).catch((error) => console.log(error));
  if (response.status === 200) {
    const data = await response.json();
    res.send(data[0]);
  } else if (response.status === 404) {
    res.status(404).send("Not found.");
  } else {
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
