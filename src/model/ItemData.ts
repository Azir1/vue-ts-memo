import Category from './CateEnum'
class ItemData {
  id!: string;//声明成员
  cateId!: Category ;
  title!: string;
  content!: string
  createTime!: string
  constructor(id='-1',cateId: Category=0, title = '', content = '') {
    // 需要使用枚举类型代表分类
    this.id = id
    this.cateId = cateId
    this.title = title
    this.content = content
    this.createTime = new Date().toLocaleString()
  }
  
}

export default ItemData