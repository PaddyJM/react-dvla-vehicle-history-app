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
  const dvlaResponseArray = await fetch(
    `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${req.query.registration}`,
    {
      headers: {
        "x-api-key": "HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp",
      },
      mode: "cors",
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  const dvlaResponse = dvlaResponseArray[0];
  res.send(dvlaResponse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
