<template>
  <div class="avatar">
    <div class="avatar__box">
      <img :src="image" class="avatar__image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style lang="scss">
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  &__box {
    margin-left: auto;
  }

  &__image {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid #fff;
  }
}
</style>
