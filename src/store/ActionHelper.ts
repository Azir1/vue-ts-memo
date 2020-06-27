import DataHelper from './DataHelper'
import ItemData from '@/model/ItemData'

class ActionHelper {
  // 本地存储数据处理
  dataHelper: DataHelper = new DataHelper('db')
  // 1.1笔记数组
  memoList !: Array<ItemData>
  // 业务处理
  constructor() {
    // 读取本地数据，保存到memoList中
    this.memoList = this.readData()
  }
  // 读取
  readData(): Array<ItemData>{
    // 读取本地存储中的数据
    const arrObj = this.dataHelper.readData()
    // 将Object数组转成ItemData数组
    if (arrObj) {
      const arrItem = arrObj.map((v: any) => {
        const item: ItemData = new ItemData()
        item.id = v.id
        item.createTime=v.createTime
        item.cateId = v.cateId
        item.title = v.title
        item.content = v.content
        return item
      })
      return arrItem
    }
    return []
  }
  getCategoryName(cateId: number): string{
    const arrNames = ['生活','工作','运动']
    return arrNames[cateId]
  }
  // 新增
  add(item: ItemData): string {
    item.id = this.dataHelper.addData(item)
    this.memoList.push(item)
    // 保存
    this.dataHelper.saveData(this.memoList)
    return item.id
  }
  // 修改
  edit(item: ItemData): void {
    const obj: ItemData | undefined = this.memoList.find(v => {
      return v.id == item.id
    })
    if (obj) {
      obj.content = item.content
      obj.title = item.title
      obj.cateId = item.cateId
      this.dataHelper.saveData(this.memoList)
    }
  }
  // 删除
  remove(id: string): void {
    const index: number = this.memoList.findIndex((v, i) => {
      return v.id == id
    })
    if (index > -1) {
      this.memoList.splice(index, 1)
      this.dataHelper.saveData(this.memoList)
    }
  }
}
export default ActionHelper



