Vue.component('contador',{
  template: //html
  `
  <div>
    <h1>{{ numero }}</h1>
    <button class="btn btn-warning" @click="numero++">Mas de cero!</button>
  </div>
  `,
  data() {
    return {
      numero: 0
    }
  }
});