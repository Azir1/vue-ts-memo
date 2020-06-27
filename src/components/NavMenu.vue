<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">新建</template>
        <el-menu-item index="1-1" @click="open">文本便签</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          全部
          <el-tag>{{doFilter(-1)}}</el-tag>
        </template>
        <el-menu-item index="2-0">
          全部&nbsp;&nbsp;
          <el-tag>{{doFilter(-1)}}</el-tag>
        </el-menu-item>
        <el-menu-item index="2-1">
          生活&nbsp;&nbsp;
          <el-tag>{{doFilter(0)}}</el-tag>
        </el-menu-item>
        <el-menu-item index="2-2">
          工作&nbsp;&nbsp;
          <el-tag>{{doFilter(1)}}</el-tag>
        </el-menu-item>
        <el-menu-item index="2-3">
          运动&nbsp;&nbsp;
          <el-tag>{{doFilter(2)}}</el-tag>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class NavMenu extends Vue {
  activeIndex = "1";
  activeIndex2 = "1";
  // 点击展示不同的分类
  handleSelect(key: string, keyPath: string): void {
    console.log(key, keyPath);
    this.$store.commit('showList',key)
  }
  open(): void {
    this.$store.commit("showEdit");
    this.$store.state.transMemo = new ItemData("-1", 0);
  }
  // 计算展示各分类的数量
  doFilter(cid: number): number {
    if (cid == -1) {
      return this.$store.state.aHelper.memoList.length;
    } else if (cid == 0) {
      return this.count(cid);
    } else if (cid == 1) {
      return this.count(cid);
    } else if (cid == 2) {
      return this.count(cid);
    }
    return 0;
  }
  count(cid: number): number {
    let i = 0;
    this.$store.state.aHelper.memoList.forEach((v: any) => {
      if (cid == v.cateId) {
        i++;
      }
    });
    return i;
  }
}
</script>