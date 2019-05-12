<template>
  <div class="main">
    <Button :label="label" :handleClick="handleClick" />
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

  data() {
    return {
      label: "Click Me",
      showModal: true,
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
          company: "Centro comercial Moctezuma",
          contact: "Francisco Chang",
          country: "Mexico"
        }
      ]
    };
  },

  methods: {
    handleClick() {
      console.log("button clicked");
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
}
</style>
