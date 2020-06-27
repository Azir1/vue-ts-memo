<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{memo.title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="edit">编辑</el-button>
        <el-button
          style="float: right; padding: 3px 0;margin-right:10px"
          type="text"
          @click="open"
        >删除</el-button>
      </div>
      <div class="time">{{memo.createTime}} 分类：{{$store.state.aHelper.getCategoryName(memo.cateId)}}</div>
      <div class="text item">{{memo.content}}</div>
    </el-card>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import ItemData from "../model/ItemData";
// import Category from '../model/CateEnum'
@Component
export default class MemoItem extends Vue {
  @Prop() memo!: ItemData;
  // 删除
  open(): void {
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$store.state.aHelper.remove(this.memo.id);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }
  // 编辑
  edit(): void{
    console.log(this.memo)
    // 打开编辑框
    this.$store.commit('showEdit')
    // 将当前要修改的item提交到store中
    // 直接传的是memo的地址，应该复制一份出来,防止修改的同一个对象
    const newMemo = JSON.parse(JSON.stringify(this.memo))
    this.$store.commit('editItem',newMemo)
  }
}
</script>

<style>
.time {
  font-size: 14px;
  color: #666;
  margin-top: -10px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 260px;
  height: 300px;
  margin-right: 10px;
}
</style>