<template>
  <div id="app">
    <Search></Search>
    <Album></Album>
  </div>
</template>

<script>
import Album from "@/components/Album.vue";
import Search from "@/components/Search.vue";

export default {
  name: "App",
  components: {
    Album,
    Search
  }
};
</script>


