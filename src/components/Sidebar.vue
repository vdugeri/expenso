<template>
  <div class="sidebar">
    <div class="sidebar__nav">
      <a href="#" class="sidebar__nav-item">Dashboard</a>
    </div>
    <div class="sidebar__nav">
      <a href="#" class="sidebar__nav-item">Expenses</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  background-color: #8c7ae6;
  color: #fff;
  height: 90vh;
  box-sizing: border-box;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    // width: 50%;
  }

  &__nav-item {
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
}
</style>
