<!-- 컴포넌트 이름은 최소 2단어 이상 -->
<template>
  <header>
      <h1>{{propsdata}}</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        }
    },
}
</script>

<style>

</style>