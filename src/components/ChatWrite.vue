<template>
  <div class="write" :class="{ active: text }">
    <textarea
      type="text"
      placeholder="Написать сообщение..."
      class="write__input"
      v-model="text"
      :class="{ active: text }"
      @keyup="autoHeight"
      wrap="soft"
      rows="1"
    ></textarea>
    <button
      class="write__photo"
      v-if="text.length"
      :class="{ active: text }"
      @click="validationMessage"
    >
      <img src="@/assets/image/send.svg" alt="" />
    </button>
    <button class="write__send" v-else @click="openModal">
      <img src="@/assets/image/photo.svg" alt="" />
    </button>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    chatId: Number,
  },
  data() {
    return {
      text: "",
      textTag: null,
      otherId: this.chatId === 1 ? 2 : 1,
    };
  },

  methods: {
    ...mapMutations(["pushMessage", "changeStatus", "openOrCloseModal"]),
    ...mapActions(["setFunction"]),

    validationMessage() {
      if (this.text.search(/[^\n\s]/g) !== -1) {
        const arrText = this.text.trim().split("\n"),
          resultText = arrText.map((text) => `<span>${text}</span>`).join("");

        this.getMessage(resultText);
      }
    },

    getMessage(resultText) {
      const date = new Date();
      this.pushMessage({
        userId: this.chatId,
        message: resultText,
        date: `${date.getHours()}:${date.getMinutes()}`,
      });
      this.clearMessage();
    },

    autoHeight(event) {
      const textarea = (this.textTag = event.target);
      textarea.style = "height:auto; padding:0";
      textarea.style = `height:${textarea.scrollHeight}px`;
    },

    clearMessage() {
      this.text = "";
      this.textTag.style.height = "auto";
    },

    autoСheckEvent() {
      const trueOrFalse = this.text ? true : false;
      this.setFunction({
        id: this.otherId,
        activBool: trueOrFalse,
      });
    },

    openModal() {
      this.openOrCloseModal({ isOpen: true, chatId: this.chatId });
    },
  },

  watch: {
    text: {
      handler() {
        this.autoСheckEvent();
      },
    },
  },
};
</script>

<style>
</style>