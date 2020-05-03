<template>
  <div id="app">
    <h2 >Albums: </h2>
    <div class="section">
      <article v-for="album in sortedAlbums" :key="album.id" class="media" v-bind:class="{'border': album.votes >= 0}">
        <figure class="media-left">
          <div class="card" style="width: 18rem;">
            <img  class="card-img-top" :src="album.cover">
          </div>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <a :href="album.url" class="has-text-info">{{ album.artist }}</a>
                <span class="tag is-small">#{{ album.id }}</span>
              </strong>
              <br>
                {{ album.description }}
              <br>
            </p>   
          </div>
        </div>
        <div class="media-right">
          <span class="computedVotes" v-on:click="updateVote(album.id)">
            <strong class="has-text-info">{{ album.votes }}</strong>
              <img class='icone-star' src="../assets/images/icons/star.svg">
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import { albumslist } from '../seed';

export default {
  name: 'Albums',
  data () {
    return {
      albumslist: albumslist
    };
  },
  computed: {
    sortedAlbums () {
      return [...this.albumslist].sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  methods: {
    updateVote (albumId) {
      const album = this.albumslist.find((album) => {
        return album.id === albumId;
      });
      album.votes++;
    }
  }
}
</script>

<style scoped>

h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: 500;
}

.section {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.border {
    border: 1px solid #3373dc4f !important;  
}

.icone-star {
  height:40px;
}

article .media .blue-border{
  display: grid;
}

.dividing-header {
    margin-top: 1em;
    margin-bottom: 2em;
}
.computedVotes {
  padding-left: 13rem;
 }
.section {
    padding: 2rem 1.5rem;
} 

.media {
    max-width: 541px;
    margin: 0 auto;
    border: 1px solid #e6e7e9;
    padding: -3em -11.5em -26.5em -19.5em;
}
    
.icon {
    cursor: pointer;
}
 article {
  display: grid;
}

</style>