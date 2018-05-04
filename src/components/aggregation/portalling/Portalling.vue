<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
    >
      <b-carousel-slide v-for="item in prodlist" :key="item.id" :img-src="item.imgSrc">
        <h1>{{item.discription}}</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Portalling',
  data () {
    return {
      prodlist: [
        { id: 0,
          imgSrc: 'https://lorempixel.com/1024/480/technics/2/',
          discription: 'TEXT 1'
        },
        { id: 1,
          imgSrc: 'https://lorempixel.com/1024/480/technics/4/',
          discription: 'TEXT 2'
        },
        { id: 2,
          imgSrc: 'https://lorempixel.com/1024/480/technics/5/',
          discription: 'TEXT 3'
        },
        { id: 3,
          imgSrc: 'https://lorempixel.com/1024/480/technics/8/',
          discription: 'TEXT 4'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
