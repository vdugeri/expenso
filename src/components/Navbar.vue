<template>
  <div class="navbar">
    <Avatar :image="user.image" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  components: {
    Avatar
  },
  data() {
    return {
      user: {
        image: "http://lorempixel.com/400/200/sports/8/"
      }
    };
  }
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  height: 10vh;
  border-bottom: 1px solid#ccc;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.14);
  width: 100vw;
  box-sizing: border-box;
  padding: 1rem;
}
</style>
