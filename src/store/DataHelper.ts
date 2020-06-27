import ItemData from '@/model/ItemData'

class DataHelper {
  dataKey: string
  // primaryKey: string
  // 构造函数  为对象添加各种属性
  constructor(dataKey: string) {
    // 键
    this.dataKey = dataKey
    // this.primaryKey = primaryKey
  }
  // 读取全部数据
  readData(): any {
    const res: string | null = localStorage.getItem(this.dataKey)
    if (res) {
      const item: any = JSON.parse(res)
      return item
    }
  }
  // 存入本地数据
  saveData(arrData: Array<Record<string, any>>): void {
    localStorage.setItem(this.dataKey, JSON.stringify(arrData))
  }
  // 新增数据
  addData(conStr: ItemData): string {
    const res: any = this.readData() || []
    const newId = this.createRandomId()
    conStr.id = newId
    if (res.length > 0) {
      res.push(conStr)
      this.saveData(res)
      return conStr.id
    } else {
      const res: Array<Record<string, any>> = []
      res.push(conStr)
      this.saveData(res)
      return conStr.id
    }
  }
  // 删除数据
  removeData(id: number): void {
    const res: any = this.readData()
    const index = res.findIndex((v: any) => {
      return v.id == id
    })
    res.splice(index, 1)
    this.saveData(res)
  }
  // 生成id
  createRandomId() {
    return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
  }
}

export default DataHelper