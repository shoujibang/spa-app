import CompHeader from '@/components/CompHeader.vue'
import CompFotter from '@/components/CompFotter.vue'
import EchartsLine from '@/components/EchartsLine.vue'

export default {
    install(Vue) {
      // 全局注册组件
      Vue.component(CompHeader.name, CompHeader);
      Vue.component(CompFotter.name, CompFotter);
      Vue.component(EchartsLine.name, EchartsLine);
      
    }
  };