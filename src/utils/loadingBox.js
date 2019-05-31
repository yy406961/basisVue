import { getUUID } from '@/utils/assist'
export default class loadingBox {
    constructor(){
        this.rootCls = 'msp-app-loading-wrapper'
    }
    createTmpl(){
        return `
            <div class="msp-app-loading-group">
              <div class="msp-app-loading-grid">
                <div class="msp-app-loading msp-app-loading1"></div>
                <div class="msp-app-loading msp-app-loading2"></div>
                <div class="msp-app-loading msp-app-loading3"></div>
                <div class="msp-app-loading msp-app-loading4"></div>
                <div class="msp-app-loading msp-app-loading5"></div>
                <div class="msp-app-loading msp-app-loading6"></div>
                <div class="msp-app-loading msp-app-loading7"></div>
                <div class="msp-app-loading msp-app-loading8"></div>
                <div class="msp-app-loading msp-app-loading9"></div>
              </div>
              <div class="msp-app-loading-title">加载中</div>
              <div class="msp-app-loading-sub-title">欢迎登录 ${process.env.VUE_APP_NAME}，请耐心等待</div>
              <div class="msp-app-loading-sub-info">如果很久很久都没有加载成功，请清空缓存重新加载页面</div>
            </div>
      `
    }
    mount(){
        let html = this.createTmpl()
        let wrapper = document.createElement('div')
        wrapper.className = this.rootCls
        wrapper.id = `loading${getUUID()}`
        wrapper.innerHTML = html
        document.body.appendChild(wrapper)
    }
    open() {
        this.mount()
    }
    close() {
        if (!document.querySelector(`.${this.rootCls}`)) return
        let nodes = document.querySelectorAll(`.${this.rootCls}`)
        if (nodes && nodes.length) {
            nodes.forEach(n => {
                document.body.removeChild(n)
            })
        }
    }
}
