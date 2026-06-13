const fetch = require('node-fetch');

async function send() {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "c51075f8-33b8-496c-b883-6e9e75c90a39",
      subject: "Test HTML Email",
      name: "Test",
      email: "test@test.com",
      message: "<h1 style='color: green; font-size: 40px;'>This is a giant green header</h1><p>And a vegetable <img src='https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=200&q=80'/></p>"
    }),
  });
  const text = await response.text();
  console.log(text);
}
send();
