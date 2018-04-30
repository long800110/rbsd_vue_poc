import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getSysLanguage } from '@/common/utils/utils'

Vue.use(VueI18n)

export default new VueI18n({
  locale: getSysLanguage('zh'),
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})
