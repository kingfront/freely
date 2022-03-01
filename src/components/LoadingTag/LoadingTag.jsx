/**
  add by xx
  二次封装加载圈  JSX
 */
import { defineComponent } from 'vue'
import './LoadingTag.less'

const LoadingTag = defineComponent({
  props: {
    color: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => (
      <div class='loading-tag'>
        <van-loading color={props.color} type={props.type}>
          {props.text}
        </van-loading>
      </div>
    )
  }
})
export default LoadingTag
