import React from 'react'
import { connect } from 'react-redux'

const ComponentView = () => (
    <div>Component</div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentView)
