<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14.5rem;
  border: 1px solid #ccc;
  min-height: 40rem;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 1rem;
  padding-top: 1rem;
}
</style>
