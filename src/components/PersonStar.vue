<script>
import starImage from "@/assets/star.png";

export default {
  name: 'PersonStar',
  props: {
    avatar: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      starImage,
    };
  },
}
</script>

<template>
  <div class="person-star">
    <el-popover
        :width="250"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <el-image :src="starImage" class="person-star__image" />
      </template>
      <template #default>
        <div
            style="display: flex; gap: 16px; flex-direction: column"
        >
          <el-avatar
              :size="60"
              :src="avatar"
              style="margin-bottom: 8px"
          />
          <p style="margin: 0">{{ name }}</p>
          <p style="margin: 0">{{ description }}</p>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style scoped>
.person-star__image {
  width: 48px;
  height: 48px;
}
.person-star__image:hover {
  background: radial-gradient(yellow, transparent 70%);
}
</style>