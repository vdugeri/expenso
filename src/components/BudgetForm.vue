<template>
  <div class="form">
    <div class="form__group">
      <label for="category">Select Category</label>
      <div class="categories">
        <div
          class="category"
          v-for="(category, index) in categories"
          :key="index"
          :class="{ chosenCategory: category === selectedCategory }"
          @click="selectCategory(category)"
        >
          <svgicon
            v-if="category === 'Food'"
            icon="basket"
            class="icon-small icon-ok"
          ></svgicon>
          <svgicon
            v-if="category === 'Transport'"
            icon="map2"
            class="icon-small icon-ok"
          ></svgicon>
          <svgicon
            v-if="category === 'Entertainment'"
            icon="star-empty"
            class="icon-small icon-ok"
          ></svgicon>
          <svgicon
            v-if="category === 'Emergency'"
            icon="warning"
            class="icon-small icon-ok"
          ></svgicon>
          <svgicon
            v-if="category === 'Housing'"
            icon="home"
            class="icon-small icon-ok"
          ></svgicon>
          <svgicon
            v-if="category === 'Clothing'"
            icon="map2"
            class="icon-small icon-ok"
          ></svgicon>
          <span>{{ category }}</span>
        </div>
      </div>
    </div>
    <div class="form__group">
      <label for="amount">Amount</label>
      <input
        id="amount"
        type="number"
        class="form__input"
        v-model="amount"
        placeholder="5000"
      />
    </div>
    <div class="form__group push-down">
      <Button :label="label" :handleClick="saveBudgetItem" />
    </div>
  </div>
</template>
<script>
import Button from "@/components/shared/BaseButton";
import "@/compiled-icons/warning";
import "@/compiled-icons/home";
export default {
  components: {
    Button
  },
  data() {
    return {
      amount: "",
      label: "Save",
      categories: [
        "Food",
        "Entertainment",
        "Housing",
        "Emergency",
        "Transport",
        "Clothing"
      ],
      selectedCategory: ""
    };
  },
  methods: {
    saveBudgetItem() {
      if (this.selectedCategory.trim() && this.amount.trim()) {
        const { selectedCategory, amount } = this;
        console.log({ selectedCategory, amount });
        this.clearData();
      }
    },
    clearData() {
      this.selectedCategory = "";
      this.amount = "";
    },
    selectCategory(category) {
      this.selectedCategory = category;
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
  box-sizing: border-box;

  &__group {
    margin: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

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
    border-radius: 2px;
    font-size: 1rem;
    width: 20rem;
  }
}

.categories {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 50%;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 100px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
}

.chosenCategory {
  border: 2px solid #71bf28;
}

.pull-right {
  width: 46%;
  align-items: flex-end;
}

.push-down {
  margin-top: 4rem;
}
</style>
