import React, { Component } from 'react';
import { connect } from 'react-redux'
import pathToRegexp from 'path-to-regexp'

class Router extends Component {
    render() {
        const {
            location,
            routes,
            dispatch,
            ...otherProps,
        } = this.props

        var paths = Object.keys(routes)
        for (let index = 0; index < paths.length; index++) {
            const path = paths[index];
            const keys = []
            const re = pathToRegexp(path, keys)
            const match = re.exec(location)

            if (match) {
                var params = {}
                for (let index = 0; index < keys.length; index++) {
                    const key = keys[index];
                    params[key.name] = match[index + 1]
                }

                const Component = routes[path]
                return <Component {...params} {...otherProps} />
            }
        }

        const Component = routes.error
        return <Component {...otherProps} />
    }
}

const mapStateToProps = (state) => ({
    location: state.router.pathname,
})

export default connect(mapStateToProps)(Router)