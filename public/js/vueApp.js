var vueapp1 = new Vue({
  el: '#vueapp-1',
  data: {
    message: 'Hello Vue!'
  }
});

var vueapp2 = new Vue({
  el: '#vueapp-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});

var vueapp3 = new Vue({
  el: '#vueapp-3',
  data: {
    seen: true
  }
});

var vueapp4 = new Vue({
  el: '#vueapp-4',
  data: {
    todos: [{
      text: "learn javascript"
    }, {
      text: "learn vue"
    }, {
      text: "learn something awesome"
    }, ]
  }
});

var vueapp5 = new Vue({
  el: '#vueapp-5',
  data: {
    message: 'hello vue.js'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

var vueapp6 = new Vue({
  el: '#vueapp-6',
  data: {
    message: 'Hello Vue!'
  }
});


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var vueapp7 = new Vue({
  el: "#vueapp-7",
  data: {
    todos: [{
      text: "learn javascript"
    }, {
      text: "learn vue"
    }, {
      text: "learn something awesome"
    }, ]
  }
});


var vueapp8 = new Vue({
  el: "#vueapp-8",
  data: {
    message: 'this is the message',
    rawHtml: '<b>this is strong</b>',
    dynamicId: 5,
    isButtonDisabled: true
  },
  filters: {
    capitalize: function (value) {
      if (!value)
        return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    now: function () {
      return Date.now();
    }
  }
});

var vueapp8 = new Vue({
  el: "#vueapp-9",
  data: {
    firstname: "Morten",
    lastname: "Thygesen",
    nameinput: ''
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + ' ' + this.lastname;
      },
      set: function(newValue){
        var names = newValue.split(' ');
        this.firstname = names[0];
        this.lastname = names[names.length-1];
      }
    }
  }
});