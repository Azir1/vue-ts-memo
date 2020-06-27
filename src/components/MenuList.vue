<template >
  <div class="con">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import MemoItem from "./MemoItem.vue";
import ItemData from "../model/ItemData";

@Component({
  components: {
    MemoItem
  }
})
export default class MenuList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  filterMemo() {
    if (this.$store.state.showItem == -1) {
      return this.memoArr;
    } else if (this.$store.state.showItem == 0) {
      return this.memoArr.filter(v => {
        return v.cateId == 0;
      });
    } else if (this.$store.state.showItem == 1) {
      return this.memoArr.filter(v => {
        return v.cateId == 1;
      });
    } else if (this.$store.state.showItem == 2) {
      return this.memoArr.filter(v => {
        return v.cateId == 2;
      });
    }
  }
}
</script>

<style scoped>
.con {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>