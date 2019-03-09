Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    groceryList: [{
        id: 0,
        text: 'Vegetables'
      },
      {
        id: 1,
        text: 'Cheese'
      },
      {
        id: 2,
        text: 'other'
      },
    ],
    awesome: "true" == "false",
    ok: false,
    items: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      }
    ],
    obj: {
      firstName: 'John',
      lastName: 'Doe',
      age: 20
    },
    nonReactiveItems: [
      'a',
      'b',
      'c'
    ]
  }
})