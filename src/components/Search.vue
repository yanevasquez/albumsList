<template>
  <div class="cmp-search">
    <h2>Albums List</h2>
    <input
      v-model="query"
      id="query"
      class="form-control"
      placeholder="search for a band or singer"
    />
    <div class="display-search">
      <div v-if="query==''" class="search"></div>
      <aside v-else v-for="sortedAlbums in search" :key="sortedAlbums.id" class="media">
        <figure class="media-left">
          <div class="card" style="width: 10 rem;">
            <img class="card-img-top" :src="sortedAlbums.cover" />
          </div>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a
                  :href="sortedAlbums.url"
                  target="_blank"
                  class="has-text-info"
                >{{sortedAlbums.artist}}</a>
              </strong>
              <br />
              {{ sortedAlbums.description }}
              <span class="tag is-small">- {{ sortedAlbums.year }}</span>
              <br />
            </p>
          </div>
        </div>
        <div class="media-right">
          <span class="computedVotes" @click.prevent="updateVote(sortedAlbums.id)">
            <strong class="has-text-info">
              {{ sortedAlbums.votes }}
              <img class="icone-star" src="../assets/icons/star.svg" />
            </strong>
          </span>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import { albumslist } from "../seed";

export default {
  data() {
    return {
      albumslist: albumslist,
      query: ""
    };
  },
  computed: {
    search() {
      let query = this.query;
      return this.albumslist.filter(function(albumslist) {
        return albumslist.artist.includes(query);
      });
    }
  },
  methods: {
    updateVote(albumId) {
      const album = this.albumslist.find(album => {
        return album.id === albumId;
      });
      album.votes++;
    }
  }
};
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

article {
  display: contents;
}
img .card-img-top {
  width: 10 rem;
}
.card-img-top {
  border-radius: 50%;
}

.form-control {
  width: 60%;
  margin-left: 16rem;
}

@media all and (max-width: 425px) {
  .form-control {
    width: 21rem;
    margin-left: 27px;
  }
}
.content {
  display: grid;
}

.display-search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
@media all and (max-width: 425px) {
  .display-search {
    grid-template-columns: 1fr;
  }
}

.section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 1.5rem;
}
.card {
  width: 10rem;
  border: white;
}
figure {
  margin: 0px -10px 7px;
}
.border {
  border: 1px solid #3373dc4f !important;
}

.icone-star {
  height: 40px;
}

article .media .blue-border {
  display: grid;
}

p {
  font-family: "Lato", sans-serif;
  margin-left: 20px;
  margin-bottom: 1px;
  font-weight: 500;
  margin-top: 2px;
  margin-right: 19px;
}

a {
  color: #045dac;
}

.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;
}
.computedVotes {
  padding-left: 9px;
}

.media {
  max-width: 22rem;
  margin-top: 1rem;
  margin-left: 48px;
  margin-right: 1rem;
  border: 1px solid #e6e7e9;
  padding: -3em -11.5em -26.5em -19.5em;
  border-radius: 72px 20px 39px 75px;
}
.media-right {
  margin-top: 36px;
  margin-right: 21px;
}
strong {
  cursor: pointer;
  font-family: "Bungee Shade", cursive;
  font-family: "Skranji", cursive;
}
</style>