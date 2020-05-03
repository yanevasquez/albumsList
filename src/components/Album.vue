<template>
  <div id="app">
    <h2 >Álbums List: </h2>
    <div class="section">
      <article v-for="album in sortedAlbums" :key="album.id" class="media" v-bind:class="{'border': album.votes >= 1}">
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
              </strong>
              <br>
                {{ album.description }}
                 <span class="tag is-small"> - {{ album.year }}</span>
              <br>
            </p>   
          </div>
        </div>
        <div class="media-right">
          <span class="computedVotes" v-on:click="updateVote(album.id)">
            <strong class="has-text-info">{{ album.votes }}
              <img class='icone-star' src="../assets/images/icons/star.svg"></strong>
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
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Skranji&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap');


h2 {
  font-family: 'Bungee Shade', cursive;
  font-family: 'Skranji', cursive;
  text-align: center;
  margin-top: 60px;
  font-size:  49px;
  color:  #164f81
}

article {
  display: grid;
}

.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:1rem;
  padding: 2rem 1.5rem;
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

p {
  font-family: 'Lato', sans-serif;
  margin-left: 14px;
  margin-bottom: 1px;
  font-weight: 700;
}

a {
  color: #045dac;
}

.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;

}
.computedVotes {
  padding-left: 13rem;
}

.media {
  max-width: 541px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: -3em -11.5em -26.5em -19.5em;
  border-radius: 7px;
}

strong {
  cursor: pointer;
  font-family: 'Bungee Shade', cursive;
  font-family: 'Skranji', cursive;
}

</style>