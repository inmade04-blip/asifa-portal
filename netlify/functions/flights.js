exports.handler = async (event) => {
  const { origin, destination, depart_date } = event.queryStringParameters || {};
  
  if (!origin || !destination || !depart_date) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing parameters" })
    };
  }

  // আপাতত Demo Data পাঠাচ্ছি
  const demoData = {
    data: [
      {
        id: "1",
        itineraries: [{ duration: "PT3H30M", segments: [{ departure: { iataCode: origin, at: depart_date + "T10:00:00" }, arrival: { iataCode: destination, at: depart_date + "T13:30:00" }, carrierCode: "AI", number: "123" }] }],
        price: { total: "5500", currency: "INR" }
      }
    ]
  };

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(demoData)
  };
};