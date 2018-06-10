<template>
  <div v-if="getAptitudes() > 0" class="skills">
    <h2 v-if="getTittle()" class="title-resume">
      <div class="text">
        <font-awesome-icon :icon="icon" class="icon"/> {{ getTittle() }}
      </div>
    </h2>
    <ul class="aptitudes">
      <li v-for="(aptitude) in aptitudes" v-bind:key="aptitude.id" class="aptitude">
        <div class="title-aptitude">{{ aptitude.title }}</div>
        <div class="number-aptitude"><b-progress :value="aptitude.counter" variant="blue-color"></b-progress></div>
      </li>
    </ul>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    skills: {
      type: Object
    }
  },
  data () {
    return {
      title: this.skills.title,
      icon: this.skills.icon,
      aptitudes: this.skills.aptitudes
    }
  },
  methods: {
    getTittle () {
      if (this.title) {
        return this.title
      }
      return null
    },
    getAptitudes () {
      if (this.aptitudes) {
        return this.aptitudes.length
      }
      return 0
    },
    getIcon () {
      if (this.aptitudes) {
        return this.icon
      }
      return null
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
.skills {
  margin-top: 30px
}

.skills .text .icon {
  margin-right: 6px;
}

/* .info {
  margin-bottom: 10px;
} */
.skills .title-resume {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: rgb(53, 132, 154);
  position: relative;
  margin-top: 0;
}

.skills .title-resume .text {
  margin-left: 2px;
  display: inline-block;
}

.skills .story-title {
  position: relative;
}

.skills .job-title {
  margin-bottom: 0px;
  font-size: 20px;
  position: relative;
}

.skills .company-details {
  color: #9E9E9E
}

.skills .details {
  font-size: 15px;
}

.skills .aptitudes {
  display: block;
  list-style: none;
  list-style-type: disc;
  padding-top: 5px;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
}

.skills .aptitude {
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
}

.skills .aptitudes .title-aptitude {
  width: 20%;
}

.skills .aptitudes .number-aptitude {
  width: 80%;
}

@media only screen and (max-device-width:425px){
  .skills .aptitudes .title-aptitude {
    width: 30%;
  }

  .skills .aptitudes .number-aptitude {
    width: 70%;
  }
}
</style>
