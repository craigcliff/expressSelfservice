<template>

<div id="app">
  <v-app light>       
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="primary lighten-3">
      <v-list>
        <v-list-group v-for="item in items" :value="item.active" :key="item.title">
          <v-list-tile slot="item" 
                       :to="item.path == '#' ? '' : item.path" 
                       :exact="item.exact" 
                       class="yellow--text"
                       active-class="red--text">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title >{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.items.length > 0">
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>         
        </v-list-group>
      </v-list>
    </v-navigation-drawer>      
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Topics</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>      
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</div>
  
</template>



<script>

const Attractions = { template: '<div>Attractions</div>' }
const Breakfast = { template: '<div>Breakfast</div>' }
const Meat = { template: '<div>Meat</div>' }
const Sushi = { template: '<div>Sushi</div>' }

const routes = [
  { path: '/', component: Attractions },
  { path: '/breakfast', component: Breakfast },
  { path: '/meat', component: Meat },
  { path: '/sushi', component: Sushi },
]
export default {
  
data () {
    return {
      drawer: true,
      clipped: false,
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          path: '/',
          items: [],
        },
        {
          action: 'restaurant',
          title: 'Breakfast',
          path: '/breakfast',
          items: []
        },       
      ]
    }
  }

}
</script>
