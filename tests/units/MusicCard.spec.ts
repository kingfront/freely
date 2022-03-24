import { shallowMount } from '@vue/test-utils'
import MusicCard from '@/components/MusicCard.vue'
const data = {
  name: '放空',
  url: 'http://music.163.com/song/media/outer/url?id=1841002409',
  picurl: 'http://p3.music.126.net/ocVnhvD-nXHKEM3TvBUZsw==/109951165931493179.jpg',
  artistsname: '大籽'
}
// 音频播放器组件描述作用域
describe('music play test', () => {
  // 断言 挂载组件，并传入props data
  it('renders data title', () => {
    const wrapper = shallowMount(MusicCard, {
      props: { data }
    })
    // 期望 title标题渲染成功
    expect(wrapper.get('.title').text()).toContain('放空')
  })

  test('renders data author', () => {
    const wrapper = shallowMount(MusicCard, {
      props: { data }
    })
    // 期望 author标题渲染成功
    expect(wrapper.get('.author').text()).toEqual('大籽')
  })

  test('render to click poster', () => {
    const wrapper = shallowMount(MusicCard, {
      props: { data }
    })
    wrapper.get('.player').trigger('click')
    // 期望 点击播放后，playing为true
    expect((wrapper.vm as any).playing).toBe(true)
  })
})
