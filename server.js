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

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Некорректные числа' });
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
      result = b !== 0 ? a / b : 'Деление на ноль!';
      break;
    default:
      return res.status(400).json({ error: 'Неизвестная операция' });
  }

   res.json({ result });
});

app.get("/", function(request, response){

    response.send("<h2>Привет Express!</h2>");
});

app.listen(port);

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});