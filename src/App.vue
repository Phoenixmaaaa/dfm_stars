<script setup>
import PersonsStarField from "@/components/PersonsStarField.vue";
</script>

<template>
  <el-container>
    <el-header>
      <h1 class="app-header">
        <a target="_blank" class="app-header" href="https://github.com/Phoenixmaaaa/dfm_stars/issues/new/choose">FizMAT STARS</a>
      </h1>
    </el-header>
    <el-main>
      <persons-star-field/>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.app-header {
  margin: 0;
  color: yellow !important;
  text-decoration: none;
  text-align: center;
  font-family: 'StarJedi',serif;

  font-size: 70px;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
  @media screen and (max-width: 300px) {
    font-size: 30px;
  }

  animation: fadeIn 1s ease;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
a.app-header:hover {
  background: radial-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 0, 0.7), rgba(255, 165, 0, 0.7), transparent 70%) !important;
}
</style>
