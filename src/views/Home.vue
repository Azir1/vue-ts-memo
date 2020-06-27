<template>
  <div class="">

    <NavMenu/>
    <MenuList/>
    <Input v-if="$store.state.showEdit"/>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import {Component,Vue} from 'vue-property-decorator'
import NavMenu from '@/components/NavMenu.vue'
import MenuList from '@/components/MenuList.vue'
import Input from '@/components/Input.vue'

@Component({
  components: {
    NavMenu,
    MenuList,
    Input
  }
})
export default class Home extends Vue{

}
</script>
