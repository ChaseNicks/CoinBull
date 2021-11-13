const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  // Clear database
  await User.deleteMany();

  // Seed database with a few users.
  await User.create({
    firstName: "John",
    lastName: "Doe",
    email: "John@gmail.com",
    password: "password12345",
    favorites: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        price: 64775.405076,
        dayPercentChange: -0.0337,
        volume: 63647947473.73,
        marketCap: 1222285983622.0,
        logoURL:
          "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
      },
    ],
  });
  await User.create({
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane@gmail.com",
    password: "password12345",
    favorites: [],
  });
  await User.create({
    firstName: "Gabriel",
    lastName: "Andersen",
    email: "Gabriel@gmail.com",
    password: "password12345",
    favorites: [],
  });
  await User.create({
    firstName: "Mary",
    lastName: "Hernandez",
    email: "Mary@gmail.com",
    password: "password12345",
    favorites: [
      {
        name: "Tether",
        ticker: "USDT",
        price: 1.00174225,
        dayPercentChange: 0.0002,
        volume: 131033891844.29,
        marketCap: 74881297269.0,
        logoURL:
          "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdt.svg",
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        price: 4609.35766676,
        dayPercentChange: -0.0247,
        volume: 33725865813.15,
        marketCap: 545247227454.0,
        logoURL:
          "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",
      },
    ],
  });

  console.log("Users seeded");

  process.exit();
});
