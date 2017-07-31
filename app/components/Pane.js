import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'


const propTypes = {
    size: PropTypes.number,
    styleProps: stylePropType,
}

class Pane extends React.PureComponent {
    render() {
        const style = Object.assign({}, this.props.styleProps || {}, {
            flex: 1,
            position: 'relative',
            outline: 'none',
        })

        return(
            <div style={style}>
                Test app
            </div>
        )
    }
}

const defaultProps = {
}

Pane.propTypes = propTypes
Pane.defaultProps = defaultProps

export default Pane