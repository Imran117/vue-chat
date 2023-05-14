<template>
  <div class="modal" v-show="chatModal.isOpen">
    <div class="modal__block">
      <h2 class="modal__title">Отправить картинку</h2>
      <form @submit.prevent="" class="modal__form">
        <div class="modal__item">
          <p class="modal__item-label">URL</p>
          <input
            required
            type="text"
            class="modal__item-input"
            placeholder="URL"
            v-model="formObj.url"
          />
        </div>
        <div class="modal__item">
          <p class="modal__item-label">Комментарий</p>
          <input
            type="text"
            class="modal__item-input"
            placeholder="Комментарий"
            v-model="formObj.desc"
          />
        </div>
        <div class="modal__btns">
          <button data-btn="close" @click="clearForm">Отмена</button>
          <button data-btn="submit" @click="getFormObj">ОТПРАВИТЬ</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      formObj: {
        url: "",
        desc: "",
      },
    };
  },
  methods: {
    ...mapMutations(["pushMessage", "openOrCloseModal"]),
    getFormObj() {
      const date = new Date();
      this.pushMessage({
        userId: this.chatModal.chatId,
        imgObject: this.formObj,
        date: `${date.getHours()}:${date.getMinutes()}`,
      });
      this.clearForm()
    },
    clearForm() {
      this.formObj = {
        url: "",
        desc: "",
      };
      this.openOrCloseModal(false)
    },
  },
  computed: {
    ...mapState(["chatModal"]),
  },
};
</script>

<style>
</style>