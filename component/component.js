import Vue from 'vue';

Vue.component('box-component', {
  props: {
    content: String
  },
  data: function() {
    return {
      count: 0
    };
  },
  template: `<div>
  <h4>{{ content }}</h4>
</div>
`
});
