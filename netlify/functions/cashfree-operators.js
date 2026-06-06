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
    // Cashfree এর নতুন সঠিক URL + Version
    const response = await fetch('https://sandbox.cashfree.com/pg/bbps/operators?category=MOBILE_PREPAID', {
      method: 'GET',
      headers: {
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01', // Version চেঞ্জ হয়েছে
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "ERROR", message: error.message })
    };
  }
};
