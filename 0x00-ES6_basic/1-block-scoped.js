export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}

// // import taskBlock from './1-block-scoped.js';

// console.log(taskBlock(true));
// console.log(taskBlock(false));