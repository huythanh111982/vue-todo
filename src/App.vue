<template>
  <div id="app">
    <p>{{text}}</p>
    <p>{{someNum}}</p>
    <p>{{status}}</p>
    <p>{{list}}</p>
    <p>{{someObject}}</p>
    <p>{{someObject.a}}</p>
    <p>{{someObject.b}}</p>
    <p>{{someObject.c}}</p>
    <p>{{datafunction}}</p>
    <p>{{datafunction()}}</p>
    <p>{{testFunctionA()}}</p>
  </div>
</template>

<script>
import playground from './playground'
export default {
  data() {
    return {
      text: 'Some string value',
      someNum:16,
      status:true,
      list:[1,2,3],
      someObject:{
        a:1,
        b:2,
        c:[1,2,3,4,5],
      },
      datafunction(){
          console.log('Data function');
          return "I am data function";
        } 
    }
  },
  methods: {
    testFunctionA() {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(this.text);
      console.log(this.someNum);
      console.log(this.list);
      console.log(this.someObject.a);
      this.datafunction();
      return 'I a test function A'  
    }
  },
  created () {
    playground();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
