Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++"> You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div> 
  `
})
Vue.component('blog-post-event', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
new Vue({
  el: '#components-demo'
})

new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [{
        id: 1,
        title: 'Title1'
      },
      {
        id: 2,
        title: 'Title2'
      },
      {
        id: 3,
        title: 'Title3'
      },
    ]
  }
})

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [{
        id: 1,
        title: 'TitleEvent1'
      },
      {
        id: 2,
        title: 'TitleEvent2'
      },
      {
        id: 3,
        title: 'TitleEvent3'
      },
    ],
    postFontSize: 1,
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})