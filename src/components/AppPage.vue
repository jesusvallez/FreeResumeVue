<template>
  <div>
    <b-container class="main-page">
      <b-row class="page">
        <b-col md="9" class="left-page">
          <AppStory v-for="(item, value) in items" v-bind:item="item" v-bind:key="item.id" v-bind:index="value" />
          <AppSkill v-bind:skills="skills"/>
        </b-col>
        <b-col md="3" class="bg-blue-color right-page no-padding">
          <AppPublicInfo v-bind:publicInfo="publicInfo"/>
          <AppPrivateInfo v-bind:privateInfo="privateInfo"/>
        </b-col>
      </b-row>
    </b-container>
    <footer class="footer" v-bind:style="{ display: 'block' }">
      <div class="text-center">
        <small>You can download this project <a href="https://github.com/jesusvallez/FreeResumeVue" target="_blank">here</a></small>
      </div>
      <div class="text-center">
        <small>Designed by <a href="https://jesusvallez.github.io/" target="_blank">Jesús Vállez</a></small>
      </div>
      <div class="text-center">
        <small>Powered by <a href="https://vuejs.org/" target="_blank">Vue.js 2</a></small>
      </div>
    </footer>
  </div>
</template>

<script>
import AppStory from './AppStory'
import AppSkill from './AppSkill'
import AppPublicInfo from './AppPublicInfo'
import AppPrivateInfo from './AppPrivateInfo'

export default {
  data () {
    return {
      publicInfo: {
        name: 'Aitor Esteve',
        photo: 'male20151085942360382.jpg',
        ocupation: 'Fitnes and Wellness Coordinator'
      },
      items: [
        {
          id: 10,
          icon: ['fas', 'briefcase'],
          title: 'Integer ultrices',
          job: 'Phasellus fermentum erat eget',
          time: '01/2017 – Present',
          company: 'Duis convallis ante vitae augue vulputate',
          page: '<a href="https://www.google.com">https://www.google.com</a>',
          details: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere libero quis condimentum venenatis. Donec tempus velit augue, eu vehicula tortor sollicitudin id. Donec ac facilisis libero. Nunc iaculis posuere est ut finibus. In aliquet hendrerit dapibus. Sed a viverra sem. Quisque lorem enim, rhoncus nec consectetur vitae, dignissim sed augue. Nunc feugiat at mi sed maximus. Curabitur sit amet ipsum nec massa suscipit hendrerit. Quisque et metus tincidunt, lobortis est ac, consequat turpis.'
          ]
        },
        {
          id: 11,
          job: 'Maecenas fermentum diam eu interdum',
          time: '04/2016 – 01/2017',
          company: 'Curabitur vel nisi eget risus tristique semper',
          page: '<a href="https://www.google.com">https://www.google.com</a>',
          details: [
            'Suspendisse quis turpis justo. Vivamus a risus eros. Donec mattis quam vitae lectus facilisis, id ornare erat interdum. Sed eu enim sit amet massa mattis ullamcorper eu sagittis lorem. Vestibulum consequat metus ut diam bibendum sodales. Morbi eu cursus urna. In facilisis ex non pulvinar posuere. Mauris ornare nec nibh quis efficitur.'
          ]
        },
        {
          id: 12,
          job: 'Mauris suscipit risus',
          time: '01/2015 – 04/2016',
          company: 'Suspendisse vehicula lorem vitae metus tincidunt',
          details: [
            'Suspendisse a nisl est. Quisque semper convallis mi eget aliquam. Nunc hendrerit mauris in rutrum fringilla. Etiam maximus erat quis massa efficitur cursus. Maecenas fringilla libero quis tempus porta. Integer tempor facilisis lorem at posuere. Aliquam mi eros, suscipit vel vestibulum sit amet, mollis in dui.',
            'Ut ut dolor ut enim varius ultrices. Donec mattis ipsum aliquam ullamcorper fringilla. Pellentesque porta ornare dui quis porta. Praesent metus sem, cursus vel neque sit amet, viverra consectetur mi. Curabitur sed commodo leo. Pellentesque porta faucibus felis elementum luctus. Curabitur velit neque, cursus interdum purus nec, dapibus egestas enim.'
          ]
        },
        {
          id: 35,
          icon: ['fas', 'pencil-alt'],
          title: 'sit amet viverra enim efficitur',
          job: 'Donec vehicula felis vehicula',
          time: '11/2016 - Present',
          details: [
            'Nam sed neque vitae ligula hendrerit imperdiet.',
            `<ul>
              <li>In quis ligula eu ipsum convallis rutrum a id lacus.</li>
              <li>Etiam lacinia eros placerat, fermentum ex quis, imperdiet augue.</li>
              <li>Sed faucibus metus vel nisi accumsan, at porttitor diam fringilla.</li>
              <li>Integer facilisis justo consequat ipsum mollis sollicitudin.</li>
            </ul>`]
        },
        {
          id: 40,
          icon: ['fa', 'graduation-cap'],
          title: 'Pellentesque sed arcu eleifend',
          job: 'Etiam pharetra urna nec posuere hendrerit',
          time: '09/2009 - 01/2015',
          company: 'Pellentesque imperdiet mauris ac mattis pulvinar',
          details: [
            'Donec pulvinar ex sed lectus blandit scelerisque'
          ]
        }
      ],
      privateInfo: {
        contacts: [
          {
            id: 1,
            icon: ['fas', 'phone'],
            title: '+34 648 00 00 00'
          },
          {
            id: 2,
            icon: ['fas', 'birthday-cake'],
            title: '01/07/1991'
          },
          {
            id: 3,
            icon: ['fas', 'home'],
            title: 'Passeig Ceja, Las Fierro'
          },
          {
            id: 4,
            icon: ['fas', 'plane'],
            title: 'Lake Carlo, Heloise'
          },
          {
            id: 5,
            icon: ['far', 'envelope'],
            title: 'aitoresteve@popsok.ml'
          },
          {
            id: 6,
            icon: ['fab', 'linkedin-in'],
            title: 'linkedin.com/in/aitoresteve'
          },
          {
            id: 7,
            icon: ['fab', 'github'],
            title: 'github.com/aitoresteve'
          }
        ]
      },
      skills: {
        title: 'Nam scelerisque risus',
        icon: ['far', 'lightbulb'],
        aptitudes: [
          {
            id: 1,
            title: 'Sed rutrum',
            counter: 35
          },
          {
            id: 2,
            title: 'Orci vel',
            counter: 85
          },
          {
            id: 3,
            title: 'Elementum',
            counter: 60
          }
        ]
      }
    }
  },
  components: {
    AppStory,
    AppSkill,
    AppPublicInfo,
    AppPrivateInfo
  }
}
</script>

<style>
.main-page {
  max-width: 960px;
}

.page {
  background-color: white;
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 500px;
  position: relative;
}

@media screen {
  .page {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  }
}

.left-page {
  order: 2;
  padding-top: 30px;
  padding-right: 50px;
  padding-bottom: 30px;
  padding-left: 50px;
}

.right-page {
  order: 1;
  color: white;
}

.no-padding {
  padding-right: 0px;
  padding-left: 0px;
}

.details li {
  list-style-type: none;
}

.details li:before {
  content: "- "
}

.details ul {
  -webkit-margin-before: -8px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 30px
}

.footer {
  margin-bottom: 30px;
}

@media only screen and (max-device-width:767px){
  .right-page {
    order: 1
  }

  .left-page {
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    order: 2
  }

  .page {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

@media only screen and (min-device-width:768px) and (max-device-width: 968px) {
  .col-md-9 {
    flex: 0 0 70%;
    max-width: 70%;
  }

  .col-md-3 {
    flex: 0 0 30%;
    max-width: 30%;
  }
}
</style>
