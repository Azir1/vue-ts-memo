<template>
  <div class="about">
    <button @click="query">获取</button>
    <div v-if="arr.length>0">
      <div v-for="(item,index) in arr" :key="index">
        <img :src="item" alt />
      </div>
    </div>
    <button @click="plus">++</button>
  </div>
</template>

<script>
import { query } from "../api";
export default {
  data() {
    return {
      count: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      arr: [],
      v: 400
    };
  },
  // async created() {
  //   // let res =await query()
  //   // console.log(res)
  // },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      // getImg();
      console.log(123);
      // http://wyzp.image.9ccdn.com/201910/9c122/2.jpg
      // let baseUrl = "http://jptp.image.9ccdn.com/201910/9c2/2.jpg";
      for (let i = 1; i <= 20; i++) {
        const url = `http://wyzp.image.9ccdn.com/201910/9c${this.v}/${i}`+'.jpg';
        this.arr.push(url);
      }
      console.log(this.arr);
    },
    getImg() {
      console.log(123);
    },
    plus() {
      this.v++;
      console.log(this.v);
      this.query();
    }
  }
};
</script>

<style scoped>
img {
  width: 800px;
}
</style>