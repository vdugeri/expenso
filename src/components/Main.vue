<template>
  <div class="main">
    <div class="right">
      <Button :label="label" :handleClick="displayModal" />
    </div>

    <Table :headers="tableHeaders" :data="tableData" />
    <Modal v-if="showModal" :closeModal="closeModal" />
  </div>
</template>

<script>
import Button from "@/components/shared/BaseButton";
import Table from "@/components/shared/Table";
import Modal from "@/components/Modal";
export default {
  components: {
    Button,
    Table,
    Modal
  },

  mounted() {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    this.tableData = expenses.map(expense => {
      expense.date = new Date(expense.date).toLocaleDateString();

      return expense;
    });
  },

  data() {
    return {
      label: "New Expense",
      showModal: false,
      tableHeaders: ["Date", "Amount Spent"],
      tableData: []
    };
  },

  methods: {
    displayModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 80vw;
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  align-self: flex-end;
}
</style>
