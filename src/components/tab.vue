<template>
  <div id="tab">
    <h1>vuetifyjs 탭 따라 만들어보기</h1>
    <ul class="tab-menu">
      <li v-for="(tab, index) in tabs" v-bind:class="{active:currentTab === index}">
        <a href="#" v-on:click="currentTab = index">{{ tab }}</a> 
      </li>
    </ul>
    <div class="tab-content">
      <div v-show="currentTab == 0">1번 내용</div>
      <div v-show="currentTab == 1">2번 내용</div>
      <div v-show="currentTab == 2">3번 내용</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    data() {
      return {
        currentTab: 0, //기본 currentTab 값 지정
        tabs: ['tab1','tab2','tab3']
      }
    },
  }
</script>

<style>
  ul li {
    list-style: none;
    display: inline;
    padding-right: 20px;
  }
</style>

