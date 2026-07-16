const display = document.getElementById('display');
const clearBtn = document.getElementById('clearBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const equalsBtn = document.getElementById('equalsBtn');
const btn = document.getElementById('btn1');
const historico = document.getElementById('historico')
const clearHis = document.getElementById('clearHis')
const mostHis = document.getElementById('mostHis')
const historicoDiv = document.getElementById('histBox')

function Hist(){
if (historicoDiv.style.display === 'none') {
    historicoDiv.style.display = 'block'
} else {
     historicoDiv.style.display = 'none'
}

}

function clearHist(){
  historico.value = '';
}

  function appendToHis(expression,result){
  historico.value += expression + " = " + result + "\n";
  }

function clearDisplay() {
  display.value = '';
}

function appendToDisplay(value) {
  if (display.value === 'Erro') {
    display.value = '';
  }

  display.value += value;
}

function cauculete() {
  const expression = display.value.replace(/[^0-9+\-*/.]/g, '');
  if (!expression) {
    display.value = '0';
    return;
  }

  try {
    const result = Function(`"use strict"; return (${expression})`)();
    display.value = result;
  appendToHis(expression,result)
    }
   catch {
    display.value = 'Erro';
  }
  }

function calculate() {
  cauculete();
}

btn.addEventListener('click', function() {
  const buttonValue = this.textContent;
  appendToDisplay(buttonValue);
});

addBtn.addEventListener('click', function() {
  appendToDisplay('+');
});

subtractBtn.addEventListener('click', function() {
  appendToDisplay('-');
});
multiplyBtn.addEventListener('click', function() {
  appendToDisplay('*');
});
divideBtn.addEventListener('click', function() {
  appendToDisplay('/');
});

equalsBtn.addEventListener('click', calculate,);
clearHis.addEventListener('click', clearHist)
mostHis.addEventListener('click', Histist())