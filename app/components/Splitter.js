import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import styles from './Splitter.scss' 


const propTypes = {
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
    onTouchMove: PropTypes.func.isRequired,
    onTouchMouseDown: PropTypes.func.isRequired,
}

class Resizer extends React.PureComponent {
    render() {
        // const style = Object.assign({}, {
        //     'background-color': 'black',
        //     width: '2px',
        // })
        return(
            <span
                className={classNames(styles['splitpane-splitter'])}
                onTouchStart={(event) => {
                    event.preventDefault()
                    this.props.onTouchStart()
                }}
                onTouchEnd={(event) => {
                    event.preventDefault()
                    this.props.onTouchEnd()
                }}
                onTouchMove={(event) => {
                    event.preventDefault()
                    this.props.onTouchMove()
                }}
                onTouchMouseDown={(event) => {
                    event.preventDefault()
                    this.props.onTouchMouseDown()
                }}
            >
            </span>
        )
    }
}

const defaultProps = {
}

Resizer.propTypes = propTypes
Resizer.defaultProps = defaultProps

export default Resizer