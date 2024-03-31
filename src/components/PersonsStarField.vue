<script>
import PersonStar from "@/components/PersonStar.vue";

export default {
  name: 'PersonsStarField',
  components: {PersonStar},
  data() {
    return {
      persons: [
        {
          avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJwgsBmImcrHmRHUCIyT7FfKoRpmPRPqwYQ52DQ0YqoeIk=s288-c-no',
          name: 'Maria Uzhun',
          description: 'Люблю пуделят',
        }
      ],
    };
  },
  created() {
    this.downloadPersons();
  },
  methods: {
    downloadPersons() {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://raw.githubusercontent.com/Phoenixmaaaa/dfm_stars/main/persons.json', false);
        xhr.send();
        this.persons = JSON.parse(xhr.response);
      } catch (e) {
        console.error('CANNOT DOWNLOAD persons.json');
      }
    },
    getStyleWithRandomPosition() {
      const heightPos = this.getRandomIntInclusive(48, window.innerHeight - 48);
      const widthPos = this.getRandomIntInclusive(48, window.innerWidth - 48);
      return `position:fixed;top:${heightPos}px;left:${widthPos}px;`;
    },
    getRandomIntInclusive(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
  },
}
</script>

<template>
  <div>
    <person-star
        v-for="item in persons"
        :avatar="item.avatar"
        :name="item.name"
        :description="item.description"
        :style="getStyleWithRandomPosition()"
    />
  </div>
</template>

<style scoped>
</style>