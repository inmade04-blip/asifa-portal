exports.handler = async (event) => {
  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  const body = JSON.parse(event.body);

  const order = {
    order_id: "WALLET" + Date.now(),
    order_amount: body.amount,
    order_currency: "INR",
    customer_details: {
      customer_id: "AGENT" + Date.now(),
      customer_email: "agent@asifa.com",
      customer_phone: "9999999999"
    },
    order_meta: {
      return_url: "https://asifa-portal.netlify.app/wallet-success.html?order_id={order_id}"
    }
  };

  let res = await fetch('https://sandbox.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'x-client-id': appId,
      'x-client-secret': secretKey,
      'x-api-version': '2023-08-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  });
  let data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify({payment_link: data.payment_link})
  };
};
