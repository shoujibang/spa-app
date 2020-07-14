import CompHeader from '@/components/CompHeader.vue'
import CompFotter from '@/components/CompFotter.vue'
import EchartsLine from '@/components/EchartsLine.vue'
import HomeHeader from '@/components/HomeHeader'
import navItem from '@/components/navItem'
// import treeTable from '@/components/treeGrid'

export default {
    install(Vue) {
      // 全局注册组件
      Vue.component(CompHeader.name, CompHeader);
      Vue.component(CompFotter.name, CompFotter);
      Vue.component(EchartsLine.name, EchartsLine);
      Vue.component(HomeHeader.name,HomeHeader)
      Vue.component(navItem.name,navItem)
      // Vue.component(treeTable.name,treeTable)
      
    }
  };