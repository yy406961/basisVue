let systemConifg = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/sys/login/index')
    }
]
if (process.env.NODE_ENV === 'development') {
    systemConifg.push({
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/index')
    })
}

export { systemConifg }
