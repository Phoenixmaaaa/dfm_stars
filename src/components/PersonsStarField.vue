<script>
import PersonStar from "@/components/PersonStar.vue";
import axios from "axios";
import {detectFirstCircleCollision, getRandomIntInclusive} from "@/Utils/math.js";
import {ElMessage} from "element-plus";

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
          size: undefined,
          position: {left: undefined, top: undefined},
          style: undefined,
        },
      ],
    };
  },
  created() {
    this.downloadPersons();
  },
  methods: {
    async downloadPersons() {
      await axios.get('https://raw.githubusercontent.com/Phoenixmaaaa/dfm_stars/main/persons.json')
          .then(function ({data}) {
            this.persons = data;
            ElMessage({
              message: `<strong>${data.length}</strong>`,
              offset: window.innerHeight / 2,
              duration: 1500,
              plain: true,
              type: 'info',
              icon: 'StarFilled',
              dangerouslyUseHTMLString: true,
            })
          }.bind(this))
          .catch(function (err) {
            console.error('CANNOT DOWNLOAD persons.json', err);
          })
          .finally(function () {
            this.calculatePositionAndSize();
          }.bind(this));
    },
    calculatePositionAndSize() {
      for (const key in this.persons) {
        const person = this.persons[key];
        this.setRandomPositionAndSize(person);
        person.style = this.getStyle(person.position);
      }
    },
    setRandomPositionAndSize(person) {
      let iterations = 0;
      do {
        const width = window.innerWidth;
        person.size = getRandomIntInclusive(18, 32);
        person.position = {
          left: getRandomIntInclusive(person.size, width - person.size),
          top: getRandomIntInclusive(person.size, window.innerHeight - person.size),
        };
        iterations++;
      } while (iterations < 500 && detectFirstCircleCollision(person, this.persons));
    },
    getStyle({top, left}) {
      return `position:fixed;top:${top}px;left:${left}px;`;
    },
  },
}
</script>

<template>
  <div class="persons-star-field">
    <div v-for="item in persons">
      <person-star
          v-if="item.size && item.style"
          :avatar="item.avatar"
          :name="item.name"
          :description="item.description"
          :size="item.size"
          :style="item.style"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>