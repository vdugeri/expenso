<template>
  <div
    class="budget-item"
    :class="{
      'border-danger': overTreshold,
      'border-ok': belowTreshold,
      'border-warning': threshold
    }"
  >
    <div class="budget-item__icon">
      <svgicon
        v-if="item.category === 'Entertainment'"
        class="icon-small icon-ok"
        :class="{
          'icon-danger': overTreshold,
          'icon-ok': belowTreshold,
          'icon-warning': threshold
        }"
        icon="star-empty"
      ></svgicon>
      <svgicon
        v-if="item.category === 'Transport Fare'"
        class="icon-small"
        :class="{
          'icon-danger': overTreshold,
          'icon-ok': belowTreshold,
          'icon-warning': threshold
        }"
        icon="map2"
      ></svgicon>
      <svgicon
        v-if="item.category === 'Food'"
        class="icon-small"
        :class="{
          'icon-danger': overTreshold,
          'icon-ok': belowTreshold,
          'icon-warning': threshold
        }"
        icon="basket"
      ></svgicon>
    </div>
    <div class="budget-item__content">
      <span class="budget-item__content--name">{{ item.category }}</span>
      <span class="budget-item__content--amount">
        ${{ item.amountSpent }}/
        <span class="budget-item__content--total">{{ item.totalBudget }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import "@/compiled-icons/star-empty";
import "@/compiled-icons/map2";
import "@/compiled-icons/basket";
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    percentSpent() {
      return (this.item.amountSpent / this.item.totalBudget) * 100;
    },
    overTreshold() {
      return this.percentSpent > 50;
    },
    belowTreshold() {
      return this.percentSpent < 40;
    },
    threshold() {
      return this.percentSpent >= 40 && this.percentSpent <= 50;
    }
  }
};
</script>

<style lang="scss">
.budget-item {
  display: flex;
  align-items: center;
  width: 90%;
  height: 4rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.4rem;
  cursor: pointer;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  &__content {
    display: flex;
    flex-direction: column;

    &--name {
      font-size: 1rem;
      font-weight: 600;
    }

    &--amount {
      font-size: 1rem;
      font-weight: 600;
    }
    &--total {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
}

.icon-small {
  width: 1.2rem;
  height: 1.2rem;
}

.icon-ok {
  fill: #71be2c;
}

.icon-warning {
  fill: #ffb421;
}

.icon-danger {
  fill: #fd6d5c;
}

.border-warning {
  border-bottom: 2px solid #ffb421;
}

.border-ok {
  border-bottom: 2px solid #71be2c;
}

.border-danger {
  border-bottom: 2px solid #fd6d5c;
}
</style>
