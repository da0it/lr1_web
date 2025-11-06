const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;

  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;

  if (num1 === '' || num2 === '') {
    return res.status(400).json({ error: 'Please enter two numbers' });
  }

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Incorrect numbers' });
  }

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b !== 0 ? a / b : 'Division by zero!';
      break;
    default:
      return res.status(400).json({ error: 'Unknown operation' });
  }

   res.json({ result });
});

app.listen(port);

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});