Vue.component('base-layout', {
  template: `
    <v-app id="homeapp">
      <v-app-bar color="teal darken-2" dark clipped-left app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-12 align-center">
          <span class="title">Ofedge Github</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="mr-3">
          <v-btn text :href="githubUrl">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list-item v-for="(menu, index) in menus" :key="index" :to="menu.to">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  `,
  data() {
    return {
      drawer: false,
      githubUrl: "https://github.com/ofedge",
      menus: [{
        name: 'Canvas练习',
        icon: 'mdi-gamepad',
        to: '/canvas'
      }]
    }
  }
})