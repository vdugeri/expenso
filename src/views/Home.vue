<template>
  <div class="home">
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

export default {
  name: "home",
  components: {
    Sidebar,
    Main
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
}
</style>
