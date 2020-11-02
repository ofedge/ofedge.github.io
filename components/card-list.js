Vue.component('card-list', {
  template: `
    <v-row>
      <template v-for='item in items'>
        <v-col cols="12" sm="6" md="4">
          <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>
              <div>{{ item.info }}</div>
              <a v-if="item.refer" :href="item.refer">{{ item.referTitle }}</a>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn fab small color="teal" dark :href="item.code">
                <v-icon>mdi-code-tags</v-icon>
              </v-btn>
              <v-btn fab small color="primary" :href="item.link" target="_blank">
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  `,
  props: {
    items: Array
  }
});