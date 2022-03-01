<!--
  add by xx
  音乐播放器 audio 封装组件
-->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
// 接收props
const props = defineProps<{ url: string; playing: false }>()
// 定义emit
const emit = defineEmits<{
  (e: 'onAudioState', audioState: number): void
}>()
// 定义 HTMLAudioElement 响应对象
const audio = ref<HTMLAudioElement>(new Audio())
onMounted(() => {
  // 监听视频是否能播放
  audio.value.oncanplay = () => {
    props.playing ? audio.value.play() : false
  }
  // 开始播放
  audio.value.onplay = () => {
    emit('onAudioState', 1) // 通知父组件
  }
  // 暂停播放
  audio.value.onpause = () => {
    emit('onAudioState', 0) // 通知父组件
  }
  // 播放失败
  audio.value.onerror = (err) => {
    emit('onAudioState', -1) // 通知父组件
  }
})

watch(
  () => props.playing, // 监听父组件的播放状态
  async (newVal, oldVal) => {
    if (newVal === oldVal) return
    newVal ? audio.value.play() : audio.value.pause()
  }
)
</script>
<template>
  <div>
    <audio ref="audio" :src="props.url" controls>您的浏览器不支持 audio 元素。</audio>
  </div>
</template>
<style lang="less" scoped></style>
