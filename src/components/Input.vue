<template>
  <el-dialog title="提示" :visible.sync="$store.state.showEdit" width="30%">
    <div class="con">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="formInline.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="formInline.cateId" placeholder="类别 ">
            <el-option label="生活" value="0"></el-option>
            <el-option label="工作" value="1"></el-option>
            <el-option label="运动" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="formInline.content"></el-input>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('showEdit')">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
@Component
export default class Input extends Vue {
  // 保存编辑框数据,声明默认值
  formInline: ItemData = new ItemData();
  // 读取vuex中是否有编辑的数据
  created() {
    this.formInline = this.$store.state.transMemo;
  }
  onSubmit() {
    // 每创建一个ItemData对象，就new一个出来，然后往里面添加值
    // this.formInline = new ItemData();
    console.log(this.formInline);
    if (this.formInline.id === "-1") {
      this.$store.state.aHelper.add(this.formInline);
    } else {
      this.$store.state.aHelper.edit(this.formInline);
    }
    this.$store.commit("showEdit");
  }
}
</script>

<style scoped>
</style>