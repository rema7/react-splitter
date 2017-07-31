import React from 'react'

import { SplitPane } from 'components'

import classNames from 'classnames'
import styles from './app.scss' 

const propTypes = {
}

class App extends React.PureComponent {
    render() {
        return(
            <div className={classNames(styles.app)}>
                <SplitPane>
                    <div></div>
                    <div></div>
                </SplitPane>
            </div>
        )
    }
}

const defaultProps = {
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App