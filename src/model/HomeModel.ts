// music对象约束
export interface MusicModel {
  name?: string
  artistsname?: string
  picurl?: string
  url?: string
}

// 首页hooks对象约束
export interface HomeHooksModel {
  loading: boolean
  noData: boolean
  musicData: MusicModel
}
