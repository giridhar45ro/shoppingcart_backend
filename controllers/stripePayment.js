const stripe = require("stripe")(
  "sk_test_51IZCxCSGHQvIl8Ia2ki6sF1rlWdNee8WMDrogkz7EUXaqzCciEzlK6nFloOHiLAGIWlll3oDVC28CKcBBs1Wp6xQ00y56ZN1hS"
);
const uuid = require("uuid/v4");

exports.makepayment = (req, res) => {
  const { products, tokens } = req.body;
  console.log("PRODUCTS", products);

  let amount = 0;
  products.map((p) => {
    amount = amount + p.price;
  });

  const idempotencyKey = uuid();

  return stripe.customers
    .create({
      amount: amount,
      currency: "INR",
      customer: customer.id,
      recepient_email: token.email,
      shipping: {
        name: token.card.name,
        email: token.card.email,
        address: address.card.address,
      },
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create({}, { idempotencyKey })
        .then((result) => res.status(200).json(result));
    })
    .catch((err) => console.log(err));
};
