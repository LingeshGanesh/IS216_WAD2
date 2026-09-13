<script setup>
import { ref } from 'vue';

// Reactive data
const expression = ref('');
const answer = ref('');
const buttons = [
  1, 2, 3, '/',
  4, 5, 6, 'x',
  7, 8, 9, '-',
  0, '.', '=', '+',
  'AC', 'BK'
];

// Handles button click actions
function doAction(action) {
  // If "=" is clicked, compute and show result
  if (action === '=') {
    answer.value = compute();
    return;
  }

  // If "AC" is clicked, clear expression and answer
  if (action === 'AC') {
    expression.value = '';
    answer.value = '';
    return;
  }

  // If "BK" is clicked
  if (action === 'BK') {
    // If there is already an answer, clear all
    if (answer.value !== '') {
      expression.value = '';
      answer.value = '';
    } else {
      // Otherwise, remove last character from expression
      expression.value = expression.value.slice(0, -1);
    }
    return;
  }

  const isOperator = ['+', '-', 'x', '/'].includes(action);

  // If an answer exists
  if (answer.value !== '') {
    // If the answer is valid and next is an operator, continue expression using result
    if (answer.value !== 'ERR' && isFinite(answer.value) && isOperator) {
      expression.value = answer.value + action;
    } else {
      // Otherwise, start new expression
      expression.value = isOperator ? '0' + action : action.toString();
    }

    // If the answer is valid and next is a number, reset the answer.
    answer.value = '';
    return;
  }

  // If starting with an operator, insert 0 as first operand
  if (expression.value.length === 0 && isOperator) {
    expression.value = '0';
  }

  // Append the clicked button to the expression
  expression.value += action;
}

// Utility: Check if string contains any operator from list
function hasOperators(str, ops) {
  return ops.some(op => str.includes(op));
}

// Top-level compute function
function compute() {
  return computeAddMinusTimesDivide(expression.value);
}

// Handles + operator and delegates sub-expressions
function computeAddMinusTimesDivide(str) {
  const addParts = str.split('+');
  let result = 0;

  for (const part of addParts) {
    // Handle nested operators in each part
    if (hasOperators(part, ['-', 'x', '/'])) {
      const temp = computeMinusTimesDivide(part);

      if (temp === 'ERR')
        return 'ERR';
      
        result += temp;
    } else {
      const num = parseFloat(part);
      
      if (isNaN(num))
        return 'ERR';
      
        result += num;
    }
  }

  return result;
}

// Handles − operator, delegates to × and ÷
function computeMinusTimesDivide(str) {
  const subParts = str.split('-');
  let result;

  const first = subParts[0];
  result = hasOperators(first, ['x', '/']) ? computeTimesDivide(first) : parseFloat(first);

  if (isNaN(result))
    return 'ERR';

  for (let i = 1; i < subParts.length; i++) {
    const part = subParts[i];
    const val = hasOperators(part, ['x', '/']) ? computeTimesDivide(part) : parseFloat(part);

    if (isNaN(val))
      return 'ERR';

    result -= val;
  }

  return result;
}

// Handles × operator, delegates to ÷
function computeTimesDivide(str) {
  const mulParts = str.split('x');
  let result = 1;

  for (const part of mulParts) {
    const val = hasOperators(part, ['/']) ? computeDivide(part) : parseFloat(part);

    if (isNaN(val))
      return 'ERR';
    
    result *= val;
  }

  return result;
}

// Handles ÷ operator
function computeDivide(str) {
  const divParts = str.split('/');
  let result = parseFloat(divParts[0]);

  if (isNaN(result))
    return 'ERR';

  for (let i = 1; i < divParts.length; i++) {
    const val = parseFloat(divParts[i]);

    // Prevent division by zero
    if (isNaN(val) || val === 0)
      return 'ERR';

    result /= val;
  }

  return result;
}
</script>

<template>
  <!-- Display area for expression and result -->
  <div class="border m-3 p-3 text-end" style="height: 100px;">
    <p>{{ expression }}</p>
    <p>{{ answer }}</p>
  </div>

  <!-- Buttons area -->
  <div class="text-center">
    <template v-for="(btn, i) in buttons" :key="i">
      <button :id="btn" class="btn btn-secondary m-2" style="width: 50px" @click="doAction(btn)">
        {{ btn }}
      </button>
      <br v-if="(i + 1) % 4 === 0">
    </template>
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
