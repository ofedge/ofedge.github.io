const JQueryView = {
  name: 'JQueryView',
  template: '<card-list :items="items"></card-list>',
  data() {
    return {
      items: [
        {
          name: 'Bootstrap Tree',
          info: 'bootstrap树结构插件',
          code: 'https://github.com/ofedge/jquery-plugin/tree/master/bootstrap-tree',
          link: 'https://zhtw.app/jquery-plugin/bootstrap-tree/'
        },
        {
          name: 'Province And City',
          info: 'JQuery省市级联插件',
          code: 'https://github.com/ofedge/jquery-plugin/tree/master/provinceandcity',
          link: 'https://zhtw.app/jquery-plugin/provinceandcity/'
        }
      ]
    }
  }
}