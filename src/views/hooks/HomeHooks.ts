/**
  add by xx
  首页hooks封装，也就是响应式代码块
 */

import { reactive, toRefs } from 'vue'
import { fetchRandMusic } from '@/api/service'
import { HomeHooksModel } from '@/model/HomeModel'

// 首页hooks模块
export const HomeHooks = () => {
  // 响应值定义
  const indexRec = reactive<HomeHooksModel>({
    loading: true,
    noData: false,
    musicData: {}
  })

  // 查询随机音乐信息
  const fetchMusicInfo = async () => {
    const { data } = await fetchRandMusic()
    indexRec.loading = false
    indexRec.noData = data.code !== 1
    indexRec.musicData = data.data
  }
  return { ...toRefs(indexRec), fetchMusicInfo }
}
