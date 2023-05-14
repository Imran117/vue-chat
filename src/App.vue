<template>
  <div class="app">
    <ChatOne/>
    <ChatTwo/>
    <UrlModal/>
  </div>
</template>

<script>
import ChatOne from '@/components/ChatOne.vue';
import ChatTwo from '@/components/ChatTwo.vue';
import UrlModal from './components/UrlModal.vue';

export default {
  name: 'App',
  components: {
    ChatOne,
    ChatTwo,
    UrlModal
  }
}
</script>

<style>

</style>
