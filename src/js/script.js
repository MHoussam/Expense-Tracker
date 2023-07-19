let total_amount=0;

function expenseItemElement(name, amount) {
    return `<tr>
        <td>
        <span class="text">${name}</span>  
        <span class="number">${amount}</span>      
        <button class="delete">&#128465</button>
        </td>
    </tr>`
  }
  
  function addExpenseItem() {
    const expenseNameInput = $("#expense-name");
    const expenseAmountInput = $("#expense-amount");
    const expenseTable = $("#expense-table-tr");
  
    if (expenseNameInput.val().trim() === "" || expenseAmountInput.val().trim() === "") return;
  
    const expenseItem = $(expenseItemElement(expenseNameInput.val(), parseFloat(expenseAmountInput.val()).toFixed(2)))
    total_amount += parseFloat(expenseAmountInput.val());
  
    expenseItem.find(".delete").click(function () {
        const amount = expenseItem.find(".number");
        total_amount -= parseFloat(amount.text());
        expenseItem.remove()
        console.log(total_amount);
        total.text(total_amount.toFixed(2))
        console.log(total.val());
    })

    const total = $("#total");
    total.text(total_amount.toFixed(2))
    console.log(total.val());

    expenseTable.append(expenseItem)
    expenseNameInput.val("")
    expenseAmountInput.val("")
  }
  
  $(document).ready(function () {
    const addButton = $("#add-btn");
    addButton.click(addExpenseItem);
  })