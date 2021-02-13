const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

let IntervalId;
function onStart() {
  if (refs.startBtn.classList.contains('isActive')) return;
  refs.startBtn.classList.add('isActive');
  IntervalId = setInterval(() => {
    let randomIndex = randomIntegerFromInterval(0, colors.length-1);
    refs.body.style.backgroundColor = colors[randomIndex];
    // console.log(randomIndex);
  }, 1000);
}

function onStop() {
  clearInterval(IntervalId);
  refs.startBtn.classList.remove('isActive');
  // console.log('Interval cleared');
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};