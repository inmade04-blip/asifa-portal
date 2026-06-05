const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // ⚠️ এখানে তোমার আসল API Token বসাও
  const API_TOKEN = "dd616bc873c310e61595c75b5cbb1498";
  const MARKER = "734653.Asifatravels";

  const { origin, destination, depart_date, action } = event.queryStringParameters;

  try {
    if (action === 'search') {
      const url = `https://api.travelpayouts.com/v1/prices/cheap?origin=${origin}&destination=${destination}&depart_date=${depart_date}&token=${API_TOKEN}&currency=inr`;
      const response = await fetch(url);
      const data = await response.json();

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
      };
    }

    if (action === 'booking-link') {
      const bookingUrl = `https://www.aviasales.com/search?origin_iata=${origin}&destination_iata=${destination}&depart_date=${depart_date}&marker=${MARKER}`;

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ booking_url: bookingUrl })
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid action' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server error: ' + error.message })
    };
  }
};