<template>
  <div class="form">
    <div class="form__group">
      <label for="datetime">Select Date</label>
      <datetime
        id="datetime"
        v-model="expenseDate"
        input-class="form__input"
        placeholder="Select Date"
      />
    </div>
    <div class="form__group">
      <label for="amount">Amount</label>
      <input
        id="amount"
        type="number"
        class="form__input"
        v-model="amount"
        placeholder="Amount"
      />
    </div>
    <div class="form__group pull-right">
      <Button :label="label" :handleClick="saveExpense" />
    </div>
  </div>
</template>
<script>
import Button from "@/components/shared/BaseButton";
export default {
  components: {
    Button
  },
  data() {
    return {
      expenseDate: "",
      amount: "",
      label: "Add Expense"
    };
  },
  methods: {
    saveExpense() {
      if (this.expenseDate.trim() && this.amount.trim()) {
        const expense = { date: this.expenseDate, amount: this.amount };
        const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        this.clearData();
      }
    },
    clearData() {
      this.expenseDate = "";
      this.amount = "";
    }
  }
};
</script>

<style lang="scss">
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  &__group {
    margin: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & label {
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 400;
      padding-bottom: 5px;
      margin-left: 0;
    }
  }

  &__input {
    padding: 0.5rem 0.5rem;
    border: 0;
    background-color: #ccc;
    color: #fff;
    border-radius: 2px;
    font-size: 1rem;
    width: 20rem;
  }
}

.pull-right {
  width: 46%;
  align-items: flex-end;
}
</style>
