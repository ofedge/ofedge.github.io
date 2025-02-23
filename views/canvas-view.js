const CanvasView = {
  name: 'CanvasView',
  template: '<card-list :items="items"></card-list>',
  data() {
    return {
      items: [
        {
          name: 'Breakout',
          info: '使用纯JavaScript开发的2D打砖块游戏',
          referTitle: '2D breakout game using pure JavaScript',
          refer: 'https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript',
          code: 'https://github.com/ofedge/canvas/tree/master/breakout',
          link: 'https://ofedge.github.io/canvas/breakout/'
        }, {
          name: 'Circle',
          info: '如何用正方形堆砌圆形',
          code: 'https://github.com/ofedge/canvas/tree/master/mc',
          link: 'https://ofedge.github.io/canvas/mc/circle.html'
        }, {
          name: 'Simple Canvas Game',
          info: '简单的Canvas 游戏, 参考网上教程制作',
          referTitle: '怎样用HTML5 Canvas制作一个简单的游戏',
          refer: 'http://blog.csdn.net/antineutrino/article/details/10913783',
          code: 'https://github.com/ofedge/canvas/tree/master/simple_canvas_game',
          link: 'https://ofedge.github.io/canvas/simple_canvas_game/'
        }, {
          name: 'Clock',
          info: 'Canvas绘制的时钟',
          code: 'https://github.com/ofedge/canvas/blob/master/clock.html',
          link: 'https://ofedge.github.io/canvas/clock.html'
        }, {
          name: 'Startup Sequence',
          info: '魔兽世界军团再临世界任务: "守望者地库: 启动序列"的模拟版',
          code: 'https://github.com/ofedge/canvas/tree/master/startup_sequence',
          link: 'https://ofedge.github.io/canvas/startup_sequence/'
        }, {
          name: '2048',
          info: '2048游戏',
          code: 'https://github.com/ofedge/canvas/tree/master/2048',
          link: 'https://ofedge.github.io/canvas/2048/'
        }, {
          name: 'Tetris',
          info: '俄罗斯方块游戏',
          code: 'https://github.com/ofedge/canvas/tree/master/tetris',
          link: 'https://ofedge.github.io/canvas/tetris/'
        }
      ]
    }
  }
};
