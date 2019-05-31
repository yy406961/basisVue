import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './config'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
const router = new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes
})

router.beforeEach((to, from, next) => {
    // 进度条
    NProgress.start()

    next()
    // // 关闭搜索面板
    // store.commit('d2admin/search/set', false)
    // // 验证当前路由所有的匹配中是否需要有登录验证的
    // if (to.matched.some(r => r.meta.requiresAuth)) {
    // // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // // 请根据自身业务需要修改
    //     const token = util.cookies.get('token')
    //     if (token && token !== 'undefined') {
    //         next()
    //     } else {
    //         // 将当前预计打开的页面完整地址临时存储 登录后继续跳转
    //         // 这个 cookie(redirect) 会在登录后自动删除
    //         util.cookies.set('redirect', to.fullPath)
    //         // 没有登录的时候跳转到登录界面
    //         next({
    //             name: 'login'
    //         })
    //     }
    // } else {
    // // 不需要身份校验 直接通过
    //     next()
    // }
})

router.afterEach(() => {
    // 进度条
    NProgress.done()
})


export default router
