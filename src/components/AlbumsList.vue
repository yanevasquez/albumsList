<template>
  <div id="app">
    <h2>Favorites albums:</h2>
    <div class="section">
      <article v-for="album in albums" :key="album.id">
        <figure class="media-left">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="album.img" />
          </div>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a
                  :href="album.link_youtube"
                  target="_blank"
                  class="has-text-info"
                >{{ album.title }}</a>
              </strong>
              <br />
              {{ album.name }}
              <span class="tag is-small">- {{ album.year }}</span>
              <br />
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="computedVotes">
            <strong class="has-text-info">
              {{ album.click }}
              <img class="icone-star" src="../assets/images/icons/star.svg" />
            </strong>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("albums", ["albums"])
  
  },
  created() {
    this.$store.dispatch("albums/loadAlbums");
  }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Skranji&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap");

h2 {
  font-family: "Bungee Shade", cursive;
  font-family: "Skranji", cursive;
  text-align: center;
  margin-top: 60px;
  font-size: 49px;
  color: #164f81;
}

.media {
  max-width: 541px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: -3em -11.5em -26.5em -19.5em;
  border-radius: 7px;
}

p {
  font-family: "Lato", sans-serif;
  margin-left: 14px;
  margin-bottom: 1px;
  font-weight: 700;
}

strong {
  cursor: pointer;
  font-family: "Bungee Shade", cursive;
  font-family: "Skranji", cursive;
}

article {
  display: grid;
  border: 1px solid#b3c7eb;
  width: 290px;
  border-radius: 10px;
  margin-left: 4rem;
}

.icone-star {
  height: 40px;
}

article .media .blue-border {
  display: grid;
}

.section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 1.5rem;
}

.border {
  border: 1px solid #3373dc4f !important;
}

a {
  color: #045dac;
}

.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;
}
</style>