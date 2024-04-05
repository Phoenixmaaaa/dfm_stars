<script>
import starImage from "@/assets/images/star.png";
import {getRandomIntInclusive} from "@/Utils/math.js";

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
    size: {
      type: Number,
      default: 32,
    },
    hoverColor: {
      type: String,
      default: 'yellow',
    },
  },
  data() {
    return {
      starImage,
    };
  },
  computed: {
    starImageStyle: function () {
      const size = Math.round(this.size);
      const angle = getRandomIntInclusive(0, 90);
      return `width:${size}px;height:${size}px;rotate:${angle}deg;`
    },
  },
}
</script>

<template>
  <div class="person-star">
    <el-popover :width="300">
      <template #reference>
        <el-image :src="starImage" :style="starImageStyle" class="person-star__star-image" />
      </template>
      <div class="person-star__content">
        <p class="person-star__content-name">{{ name }}</p>
        <div class="person-star__content-main">
          <div>
            <el-avatar :size="120" :src="avatar" shape="square" class="person-star__content-main-avatar" />
          </div>
          <p class="person-star__content-main-description">{{ description }}</p>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.person-star {
  &__star-image {
    animation: fadeIn 2s ease;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    &:hover {
      background: radial-gradient(yellow, transparent 70%);
    }
  }
  &__content {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    &-name {
      font-weight: bold;
      margin: 0;
    }
    &-main {
      display: flex;
      gap: 10px;
      flex-direction: row;
      &-description {
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>