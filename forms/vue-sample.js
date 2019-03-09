var text = new Vue({
  el: '#text',
  data: {
    message:""
  }
})

var multilinetext = new Vue({
  el: '#multiline-text',
  data: {
    message:''
  }
})

var excheckbox = new Vue({
  el: '#ex-checkbox',
  data: {
    checked: false
  }
})

var exmulticheckbox = new Vue({
  el: '#ex-multicheckbox',
  data: {
    checkedNames: []
  }
})

var exradio = new Vue({
  el: '#ex-radio',
  data: {
    picked: ""
  }
})

var exselect = new Vue({
  el: '#ex-select',
  data: {
    selected: ''
  }
})

var ex_multipleSelect = new Vue({
  el: '#ex_multipleSelect',
  data: {
    selected: []
  }
})

var ex_vforOptionSelect = new Vue({
  el: '#ex_vforOptionSelect',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' },
    ]
  }
})

var ex_valueBinding = new Vue({
  el: '#ex_valueBinding',
  data: {
    picked: false,
    toggle: false,
    selected: ''
  }
})