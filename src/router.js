import pathToRegexp from 'path-to-regexp'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Channel from './Pages/Channel'
import Users from './Pages/Users'
import Login from './Pages/Login'
import Chat from './Pages/Chat'

import NotFound from './Pages/NotFound'

const routes = [
    { path: '/', name: 'home', page: Home },
    { path: '/profile', name: 'profile', page: Profile },
    { path: '/users', name: 'users', page: Users },
    { path: '/channel', name: 'channel', page: Channel },
    { path: '/chat', name: 'chat', page: Chat },
    { path: '/login', name: 'login', page: Login },

    { loggedIn: true, path: '/profile', name: 'profile', page: Profile },

]

const notFoundRoute = { name: 'notFound', page: NotFound }

routes.forEach(route => route.re = pathToRegexp(route.path))

export const match = (path) => {
    for (let index = 0; index < routes.length; index++) {
        const route = routes[index];
        const params = route.re.exec(path)
        if (params) {
            return { route, params }
        }
    }

    return {
        route: notFoundRoute,
        params: {},
    }
}