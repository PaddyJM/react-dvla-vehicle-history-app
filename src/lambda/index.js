const fetch = require("node-fetch");

async function main(event) {
  const dvlaResponseArray = await fetch(
    `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${event.queryStringParameters.registration}`,
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
  return {
    statusCode: 200,
    body: JSON.stringify(dvlaResponse),
  };
}

module.exports = { main };
