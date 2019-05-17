<template>
  <div class="months">
    <div class="year year__left">
      <span class="year__arrow left-arrow">
        <a href="#">
          <svgicon icon="circle-left" class="icon-small"></svgicon>
        </a>
      </span>
      <span class="year__number">2018</span>
    </div>
    <div
      class="month"
      v-for="(month, index) in months"
      :key="index"
      :class="{ selected: selectedMonth == month.name }"
      @click="selectMonth(month)"
    >
      <a href="#">
        <span class="month__name">{{ month.name }}</span>
        <span class="month__expenditure">{{ month.budget }}</span>
      </a>
    </div>
    <div class="year year__right">
      <span class="year__number">2020</span>
      <span class="year__arrow right-arrow">
        <a href="#">
          <svgicon icon="circle-right" class="icon-small"></svgicon>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import "@/compiled-icons/circle-left";
import "@/compiled-icons/circle-right";
export default {
  props: {
    months: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.selectedMonth = new Date().toLocaleString("en-us", { month: "long" });
  },
  data() {
    return {
      selectedMonth: "Jan"
    };
  },
  methods: {
    selectMonth(month) {
      this.selectedMonth = month.name;
    }
  }
};
</script>

<style lang="scss">
.months {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  background-color: #fff;
  height: 4rem;
  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.14);
}

.month {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  padding: 0.7rem;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: currentColor;
  }

  &__name {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__expenditure {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #8ecc57;
  }

  &:active {
    background-color: #ccc;
    border-top: 3px solid #8c7ae6;
  }
}

.selected {
  background-color: #ccc;
  border-top: 3px solid #8c7ae6;
}

.year {
  display: flex;
  align-items: center;
  justify-content: space-around;
  justify-self: center;
  border: 0.5px solid #ccc;
  height: 2rem;
  width: 6rem;
  border-radius: 5px;
  cursor: pointer;

  &__left {
    margin-left: 1rem;
  }

  &__right {
    margin-right: 1.5rem;
  }

  &__number {
    display: flex;
    align-items: center;
  }

  &__arrow {
    display: flex;
    align-items: center;
    color: #8c7ae6;
    font-size: 1.5rem;
  }
}

.left-arrow {
  border-right: 1px solid #ccc;
  margin-right: 2px;
  padding-right: 6px;
}

.right-arrow {
  border-left: 1px solid #ccc;
  margin-left: 2px;
  padding-left: 6px;
}
</style>
