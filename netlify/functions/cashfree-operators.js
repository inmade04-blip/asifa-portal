exports.handler = async (event) => {
  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;

  if (!appId || !secretKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "ERROR", message: "API keys missing in Netlify" })
    };
  }

  try {
    const response = await fetch('https://sandbox.cashfree.com/pg/bbps/operators', {
      method: 'GET',
      headers: {
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2022-09-01'
      }
    });
    
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "ERROR", message: error.message })
    };
  }
};
