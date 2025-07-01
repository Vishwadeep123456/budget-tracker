let total = 0;

const form = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const totalBudget = document.getElementById('total-budget');
const transactionList = document.getElementById('transaction-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = amountInput.value.trim();
  const type = typeSelect.value;

  // Validation: prevent empty submission
  if (description === '' || amount === '') {
    alert('Please fill in both description and amount.');
    return;
  }

  const amt = parseFloat(amount);
  const li = document.createElement('li');

  if (type === 'income') {
    total += amt;
    li.textContent = `+ ₹${amt} - ${description}`;
    li.style.color = 'green';
  } else {
    total -= amt;
    li.textContent = `- ₹${amt} - ${description}`;
    li.style.color = 'red';
  }

  transactionList.appendChild(li);
  totalBudget.textContent = total;
  
  // Clear fields
  descriptionInput.value = '';
  amountInput.value = '';
});
