<template>
  <div class="info">
    <img
      class="info__avatar"
      :src="require(`@/assets/image/avatar/${userInfo[userId].avatarPath}.png`)"
      alt=""
    />
    <div class="info__desc">
      <h3 class="info__name">{{ userInfo[userId].name }}</h3>
      <p
        class="info__status"
        :class="{ active: userInfo[userId].activStatus }"
      >
        {{ !userInfo[userId].activStatus ? 'недавно' : 'печатает' }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    userId: Number,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style>
</style>