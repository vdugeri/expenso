<template>
  <div>
    <button class="btn" type="button" @click="handleClick">{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function
    }
  }
};
</script>

<style lang="scss">
.btn {
  padding: 0.8rem 2.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  background-color: #8c7ae6;
  border: 0;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.14);
  transition: all 0.4s;
  outline: 0;
  border-radius: 4px;
  font-weight: 400;
}

.btn:active {
  outline: 0;
  box-shadow: none;
}
</style>
