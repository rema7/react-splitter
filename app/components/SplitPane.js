import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'

import Pane from './Pane.js'
import Splitter from './Splitter.js'

// import classNames from 'classnames'
// import styles from './SplitPane.scss' 

const propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    style: stylePropType,
}

class SplitPane extends React.Component {

    constructor(props) {
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onTouchStartHandler = this.onTouchStartHandler.bind(this)
        this.onTouchEndHandler = this.onTouchEndHandler.bind(this)
        this.onTouchMoveHandler = this.onTouchMoveHandler.bind(this)
        this.onMouseDownHandler = this.onMouseDownHandler.bind(this)
    }

    onClickHandler(event) {
        event.preventDefault()
    }

    onMouseDownHandler(event) {
        const eventWithTouches = Object.assign(
            {},
            event,
            { 
                touches: [{
                    clientX: event.clientX,
                    clientY: event.clientY,
                }],
            },
        )
        this.onTouchStart(eventWithTouches)
    }

    onTouchStartHandler(event) {
        event.preventDefault()
    }

    onTouchEndHandler(event) {
        event.preventDefault()
    }

    onTouchMoveHandler(event) {
        event.preventDefault()
    }

    render() {
        const { children } = this.props
        const style = Object.assign({}, {
            display: 'flex',
            flex: 1,
            height: '100%',
            position: 'absolute',
            outline: 'none',
            overflow: 'hidden',
            width: '100%',
            MozUserSelect: 'text',
            WebkitUserSelect: 'text',
            msUserSelect: 'text',
            userSelect: 'text',
        })
        return (
            <div style={style}>
                <Pane>
                    {children[0]}
                </Pane>
                <Splitter
                    onClick={this.onClickHandler}
                    onTouchStart={this.onTouchStart}
                    onTouchEnd={this.onTouchEnd}
                    onTouchMove={this.onTouchMove}
                    onTouchMouseDown={this.onMouseDownHandler}
                >
                </Splitter>
                <Pane>
                    {children[1]}
                </Pane>
            </div>
        )
    }
}

const defaultProps = {
}

SplitPane.propTypes = propTypes
SplitPane.defaultProps = defaultProps

export default SplitPane