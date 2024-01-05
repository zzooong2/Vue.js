<template>
	<div>
		<header>
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</header>
		<!-- url 변경 되었을 때 페이지 컴포넌트가 떠야하는 영역 -->
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style></style>

<!--
  
  <template>
	  <div id="app">
		  <img alt="Vue logo" src="./assets/logo.png" />
		  <HelloWorld msg="Welcome to Your Vue.js App" />
	  </div>
  </template>
  
  <script>
  import HelloWorld from './components/HelloWorld.vue';
  import AppHeader from './components/common/AppHeader.vue';
  
  var a = 'hi';
  
  export default {
	  name: 'app',
	  components: {
		  HelloWorld,
		  AppHeader,
	  },
	  created() {
		  console.log('hi');
	  },
  };
  </script>
  
  <style>
  #app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
  }
  </style>
  
  -->
