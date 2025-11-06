document.getElementById('calcBtn').addEventListener('click', async () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;
  const resultField = document.getElementById('result');

  try {
    const response = await fetch('/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1, num2, operation })
    });

    const data = await response.json();

    if (response.ok) {
      resultField.textContent = `Result: ${data.result}`;
    } else {
      resultField.textContent = `Error: ${data.error}`;
    }
  } catch (error) {
    resultField.textContent = 'Error while connecting to the server.';
  }
});
