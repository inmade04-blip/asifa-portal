exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const { origin, destination, depart_date } = event.queryStringParameters;
  const API_KEY = process.env.TP_API_KEY;
  
  if (!API_KEY) {
    return { 
      statusCode: 500, 
      headers,
      body: JSON.stringify({ error: "API Key Missing" }) 
    };
  }

  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${depart_date}&currency=inr&token=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { 
      statusCode: 500, 
      headers,
      body: JSON.stringify({ error: error.message }) 
    };
  }
};