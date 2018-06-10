<template>
  <div class="public-info bg-dark-blue-color">
    <div class="text-center">
      <img :src="getImage" class="rounded-circle profile-image" width="140" height="140" alt="cv"/>
    </div>
    <h1 class="name text-center">{{ name }}</h1>
    <h4 class="occupation text-center">{{ ocupation }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    publicInfo: {
      type: Object
    }
  },
  data () {
    return {
      env: process.env,
      name: this.publicInfo.name,
      photo: this.publicInfo.photo,
      ocupation: this.publicInfo.ocupation
    }
  },
  computed: {
    getImage () {
      let url1 = null
      let image = require('../assets/' + this.photo)

      switch (this.env.NODE_ENV) {
        case 'production':
          url1 = new URL(image, document.location)
          image = window.location.href + url1.pathname
          break
      }

      return image
    }
  }
}
</script>

<style>
.name {
  margin-top: 20px;
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 10px;
}

.occupation {
  font-size: 18px;
  font-weight: 100;
}

.profile-image {
  border-color: white;
  border-width: 2px;
  border-style: solid;
}

.public-info {
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
}

</style>
