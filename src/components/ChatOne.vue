<template>
  <div class="chat" id="chat1">
    <div class="chat__head">
      <ChatInfo :userId="chatId" />
    </div>
    <div class="chat__body">
      <div
        class="chat__message"
        v-for="object in chatHistory"
        :key="object.id"
        :class="[object.userId == 1 ? 'left' : 'right']"
        :user="[chatId == object.userId ? 1 : 2]"
      >
        <div v-if="object.imgObject">
          <p class="chat__message-date">{{ object.date }}</p>
          <div class="chat__message-item">
            <img class="chat__message-img" :src="object.imgObject.url" alt="" />
            <p>{{ object.imgObject.desc }}</p>
          </div>
        </div>
        <div v-else>
          <p class="chat__message-date">{{ object.date }}</p>
          <p class="chat__message-item" v-html="object.message"></p>
        </div>
      </div>
    </div>
    <div class="chat__interaction">
      <ChatWrite :chatId="chatId" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChatInfo from "./ChatInfo.vue";
import ChatWrite from "./ChatWrite.vue";
export default {
  data() {
    return {
      chatId: 1,
    };
  },
  components: {
    ChatInfo,
    ChatWrite,
  },
  computed: {
    ...mapState(["chatHistory"]),
  },
};
</script>

<style>
</style>