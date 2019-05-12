<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <h2>Add Expense</h2>
        <span class="modal__close" @click="closeModal">&times;</span>
      </div>
      <div class="modal__body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal__footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeModal: Function
  }
};
</script>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;

  &__header {
    color: #777;
    display: flex;
    justify-content: space-between;
    width: 100%;

    & h2 {
      margin-top: 0.5rem;
      margin-left: auto;
      text-transform: uppercase;
    }
  }

  &__close {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  &__body {
    padding: 2px 16px;
  }

  &__footer {
    padding: 2px 16px;
    color: white;
  }

  &__content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 40%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
  }
  &__close {
    color: #c23616;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
