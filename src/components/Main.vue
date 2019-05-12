<template>
  <div class="main">
    <Button :label="label" :handleClick="handleClick" />
    <Table :headers="tableHeaders" :data="tableData" />
  </div>
</template>

<script>
import Button from "@/components/shared/BaseButton";
import Table from "@/components/shared/Table";
export default {
  components: {
    Button,
    Table
  },

  data() {
    return {
      label: "Click Me",
      tableHeaders: ["Company", "Contact", "Country"],
      tableData: [
        {
          company: "Alfreds Futterkiste",
          contact: "Maria Anders",
          country: "Germany"
        },
        {
          company: "Berglunds snabbköp",
          contact: "Christina Berglund",
          country: "Sweden"
        },
        {
          company: "Alfreds Futterkiste",
          contact: "Maria Anders",
          country: "Germany"
        },
        {
          company: "Berglunds snabbköp",
          contact: "Christina Berglund",
          country: "Sweden"
        },
        {
          company: "Alfreds Futterkiste",
          contact: "Maria Anders",
          country: "Germany"
        },
        {
          company: "Berglunds snabbköp",
          contact: "Christina Berglund",
          country: "Sweden"
        },
        {
          company: "Alfreds Futterkiste",
          contact: "Maria Anders",
          country: "Germany"
        },
        {
          company: "Berglunds snabbköp",
          contact: "Christina Berglund",
          country: "Sweden"
        }
      ]
    };
  },

  methods: {
    handleClick() {
      console.log("button clicked");
    }
  }
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>
