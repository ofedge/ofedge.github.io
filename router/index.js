const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/canvas' },
    { path: '/canvas', component: CanvasView },
    { path: '/jquery', component: JQueryView }
  ]
})