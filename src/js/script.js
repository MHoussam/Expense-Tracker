
function expenseItemElement(name, amount) {
    return `<td>
      <span class="text">${name}</span>  
      <span class="number">${amount}</span>      
      <button class="delete">&#128465</button>
    </td>`
  }
  
  
  function addExpenseItem() {
    const expenseNameInput = $("#expense-name");
    const expenseAmountInput = $("#expense-amount");
    const expenseTable = $("#expense-table-tr");
  
    if (expenseNameInput.val().trim() === "" || expenseAmountInput.val().trim() === "") return;
  
    const expenseItem = $(expenseItemElement(expenseNameInput.val(), expenseAmountInput.val()))
  
    //todo: remove
    expenseItem.find(".delete").click(function () {
        expenseItem.remove()
    })
  
    expenseTable.append(expenseItem)
    expenseNameInput.val("")
    expenseAmountInput.val("")
  }
  
  $(document).ready(function () {
    const addButton = $("#add-btn");
    addButton.click(addExpenseItem);
  })