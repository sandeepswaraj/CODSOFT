var current = '';

function press(value) {
  current += value;
  document.getElementById('result').textContent = current;
}

function clearAll() {
  current = '';
  document.getElementById('result').textContent = '0';
  document.getElementById('expression').textContent = '';
}

function deleteLast() {
  current = current.slice(0, -1);
  document.getElementById('result').textContent = current || '0';
}

function calculate() {
  if (!current) return;
  try {
    var expr = current.replace(/×/g, '*').replace(/÷/g, '/');
    document.getElementById('expression').textContent = current + ' =';
    var answer = eval(expr);
    if (answer === undefined) return;
    document.getElementById('result').textContent = answer;
    current = String(answer);
  } catch (e) {
    document.getElementById('result').textContent = 'Error';
    current = '';
  }
}

document.addEventListener('keydown', function(e) {
  if ('0123456789.+-*/'.includes(e.key)) press(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') deleteLast();
  if (e.key === 'Escape') clearAll();
});