<template>
<div class="story">
  <h2 v-if="getTittle()" class="title-resume blue-color">
    <div class="text">
      <font-awesome-icon :icon="icon" class="icon"/> {{ title }}
    </div>
  </h2>
  <div class="item">
    <div class="info">
      <div class="story-title">
          <h3 class="job-title"> {{ job }}</h3>
          <div class="time">{{ time }}</div>
      </div>
      <div class="company-details" v-html="company"></div>
      <div class="company-page" v-html="page"></div>
    </div>
    <div class="details">
      <p v-for="detail in details" v-bind:key="detail" v-html="detail"></p>
    </div>
  </div>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      title: this.item.title,
      icon: this.item.icon,
      job: this.item.job,
      time: this.item.time,
      company: this.item.company,
      page: this.item.page,
      details: this.item.details
    }
  },
  methods: {
    getTittle () {
      if (this.title) {
        return this.title
      }
      return null
    }
  },
  computed: {
    getIcon () {
      return this.icon
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
.text .icon {
  margin-right: 6px;
}

.story {
  margin-top: 30px
}

.info {
  margin-bottom: 10px;
}

.title-resume .text {
  margin-left: 2px;
  display: inline-block;
}

.title-resume {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  margin-top: 0;
}

.story-title {
  position: relative;
}

.job-title {
  margin-bottom: 0px;
  font-size: 18px;
  position: relative;
}

.time {
  color: #9E9E9E;
  position: absolute;
  right: 0px;
  top: 0px;
}

@media only screen and (max-device-width:767px){
  .time {
    color: #9E9E9E;
    position: static;
  }
}

.company-details {
  color: #9E9E9E
}

.details {
  font-size: 15px;
}
</style>
