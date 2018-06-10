<template>
  <div class="private-info">
      <div v-for="(contact) in contacts" v-bind:key="contact.id" class="contact">
        <div class="div-icon"><font-awesome-icon :icon="contact.icon" class="icon"/></div>
        <div class="div-text" v-html="contact.title"></div>
      </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    privateInfo: {
      type: Object
    }
  },
  data () {
    return {
      contacts: this.privateInfo.contacts
    }
  },
  computed: {

  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>

.div-text > a:hover {
  color: #ccc;
}
.div-text > a {
  color: #fff;
}

.private-info {
  display: grid;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.private-info .contact {
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-flex;
}

.private-info .contact .icon {
  font-size: 20px;
}

.private-info .contact .div-icon {
  width: 40px;
  font-size: 10px;
  text-align: center;
}

.private-info .contact .div-text {
  font-size: 12px;
}

@media only screen and (min-device-width:768px){
  .private-info {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
