<template>
  <div class="main">
    <MonthStrip :months="months" />
    <div class="content">
      <div class="content__card">
        <div class="content__card--backlog">
          <h2>Backlog</h2>
          <AddButton />
        </div>
        <Card />
      </div>
      <div class="content__card">
        <div class="content__card--headers">
          <h2>Week 1</h2>
          <progress-bar
            :bar-color="colorWarning"
            val="50"
            text=" "
            title="60%"
            class="bar"
          />
        </div>
        <Card>
          <Item v-for="(item, index) in items" :item="item" :key="index" />
        </Card>
      </div>
      <div class="content__card">
        <div class="content__card--headers">
          <h2>Week 2</h2>
          <progress-bar
            :bar-color="colorSafe"
            val="40"
            text=" "
            title="60%"
            class="bar"
          />
        </div>
        <Card />
      </div>
      <div class="content__card">
        <div class="content__card--headers">
          <h2>Week 3</h2>
          <progress-bar
            :bar-color="colorWarning"
            val="60"
            title="60%"
            class="bar"
          />
        </div>
        <Card />
      </div>
      <div class="content__card">
        <div class="content__card--headers">
          <h2>Week 4</h2>
          <progress-bar
            :bar-color="colorDanger"
            val="80"
            title="80%"
            class="bar"
          />
        </div>
        <Card />
      </div>
      <div class="content__card">
        <h2 class="summary">Summary</h2>
        <Card></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import AddButton from "@/components/shared/AddButton";
import MonthStrip from "@/components/MonthStrip";
import ProgressBar from "vue-simple-progress";
import Item from "@/components/BudgetItem";

export default {
  components: {
    Card,
    AddButton,
    MonthStrip,
    ProgressBar,
    Item
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
      colorSafe: "#70BE2C",
      colorDanger: "#FD6C5C",
      colorWarning: "#FFB401",
      items: [
        {
          category: "Food",
          amountSpent: 400,
          totalBudget: 1000
        },
        {
          category: "Entertainment",
          amountSpent: 500,
          totalBudget: 600
        },
        {
          category: "Transport Fare",
          amountSpent: 50,
          totalBudget: 200
        }
      ],
      months: [
        { name: "Jan", budget: "$500" },
        { name: "Feb", budget: "$800" },
        { name: "Mar", budget: "$200" },
        { name: "Apr", budget: "$1000" },
        { name: "May", budget: "$500" },
        { name: "Jun", budget: "$400" },
        { name: "Jul", budget: "$200" },
        { name: "Aug", budget: "$900" },
        { name: "Sep", budget: "$900" },
        { name: "Oct", budget: "$400" },
        { name: "Nov", budget: "$1000" },
        { name: "Dec", budget: "$2000" }
      ]
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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f2f8fa;

  &__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}

.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  align-self: flex-end;
}

.content {
  display: flex;
  justify-content: space-around;
  padding: 0 5rem;
  padding-top: 3rem;

  &__card--headers {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  &__card--backlog {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1.3rem;
  }
}

.bar {
  width: 14rem;
}

.summary {
  margin-bottom: 2.5rem;
}
</style>
