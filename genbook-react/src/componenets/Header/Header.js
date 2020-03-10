import React from 'react';
import classes from './Header.module.scss'

const header = props => {
    return(
        <div className={classes.Header}>
            <div className="container">
            <div className="row">
            <div className="col">
                <h2>This is a sample header</h2>
            </div>
            </div>
            </div>
        </div>

    )
}

export default header;