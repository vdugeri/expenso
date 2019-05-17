<template>
  <BaseModal :closeModal="close">
    <template v-slot:header
      >New Budget Item</template
    >
    <template v-slot:form>
      <BudgetForm />
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/shared/BaseModal";
import BudgetForm from "@/components/BudgetForm";
export default {
  components: {
    BaseModal,
    BudgetForm
  },
  props: {
    close: Function
  }
};
</script>
