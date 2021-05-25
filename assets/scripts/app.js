const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

function add() {
  // 足し算できない
  const result = num1.value + num2.value;
  console.log(result);
}

const addBtn = document.getElementById('btn-add');
addBtn.addEventListener('click', add);

// 各ボタンを追加
