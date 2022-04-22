const fetch = require("node-fetch");

async function main(event) {
  const response = await fetch(
    `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${event.queryStringParameters.registration}`,
    {
      headers: {
        "x-api-key": "HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp",
      },
      mode: "cors",
    }
  ).catch((error) => console.log(error));
  if (response.status === 200) {
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }
  if (response.status === 404) {
    return {
      statusCode: 404,
      body: "Not found.",
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }
  return {
    statusCode: 500,
    body: "Internal server error.",
    headers: { "Access-Control-Allow-Origin": "*" },
  };
}

module.exports = { main };
