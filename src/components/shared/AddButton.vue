<template>
  <div @click.prevent="handleClick" class="round-btn btn-add">&#43;</div>
</template>

<script>
export default {
  props: {
    handleClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss">
.round-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: #8c7ae6;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.14);
  transition: box-shadow 0.4s;

  &:active {
    box-shadow: none;
  }
}
</style>
