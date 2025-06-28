const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Gugudan</title></head><body>';
  html += '<h1>구구단</h1>';
  html += '<table border="1" cellspacing="0" cellpadding="5">';
  for (let i = 2; i <= 9; i++) {
    html += '<tr>';
    for (let j = 1; j <= 9; j++) {
      html += `<td>${i} x ${j} = ${i * j}</td>`;
    }
    html += '</tr>';
  }
  html += '</table></body></html>';
  res.send(html);
});

app.listen(port, () => {
  console.log(`Gugudan app listening on port ${port}`);
});
