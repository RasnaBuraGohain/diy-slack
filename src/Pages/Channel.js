import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import ChannelForm from 'Components/ChannelForm'

const ChannelView = ({ dispatch }) => (
    <main>
        <h1>The Channel page</h1>
        <ChannelForm onChannel={() => dispatch(push("/channel"))} />
    </main>
)

export default connect()(ChannelView)