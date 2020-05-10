<template>
    <div class="albumslist">
     <div v-for="album in albums" :key="album.id">
         <li> {{ album.title}} </li>
     </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('albums', ['albums'])
    },
    mounted(){
        this.$store.dispatch('albums/loadAlbums')
    }
}
</script>
