const Stripe = require('stripe');
const stripe = Stripe('sk_test_51KejvhJ5eevincbfrXtxNCE4LPz20yBZCOxn8AOwlf5LjZ0Ko3terfCTohgbcaJ0J2TcUCifj3HbnKRIR1KLH0Ct00iZi8VT9u');

async function hello(name: string) {
  // 「商品」が取得できるっぽい
  const sample = await stripe.balanceTransactions.retrieve("txn_3KerRtJ5eevincbf06CUce1t")
  console.log("smaple", sample)

  // 「顧客」が取得できるっぽい
  const customers = await stripe.customers.retrieve("cus_LLaK2Gr4Np5FfQ");
  console.log(customers)

  // 結果的に「支払い状態」が取得できるっぽい
  const session = await stripe.checkout.sessions.retrieve(
    'cs_test_a14EXvDtOZCoLUi4P3eTX4Fi1tL4Qm1J87Xqx9ATf2koyF0WfxklTNZsFH'
  );
  console.log("session", session)

  if (session.payment_status === "paid") {
    console.log("success")
  }

  return `Hello, ${name}!`;
}

console.log(hello("success"));
