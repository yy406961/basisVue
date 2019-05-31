import { systemConifg } from './system'
// import { situationConifg } from './situation'
// import { analysisConifg } from './analysis'
// import { alarmConifg } from './alarm'
// import { portraitConifg } from './portrait'
// import { adminsConifg } from './admins'
// import { taskConifg } from './task'
import $log from '@/common/log'

let routerMenuList = []
routerMenuList = routerMenuList
    .concat(systemConifg)
    // .concat(situationConifg)
    // .concat(analysisConifg)
    // .concat(alarmConifg)
    // .concat(portraitConifg)
    // .concat(adminsConifg)
    // .concat(taskConifg)
const routerLogs = l => {
    return l.map(it => {
        return { name: it.name, path: it.path }
    })
}

if (process.env.NODE_ENV === 'development') {
    $log.capsule('routers-msgs', 'path and name')
    console.log(routerLogs(routerMenuList))
}

const routes = routerMenuList.map(item => {
    return item
})
routes.push({
    path: '/',
    redirect: 'home'
})

export { routes }
