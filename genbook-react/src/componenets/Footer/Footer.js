import React from 'react';
import classes from './Footer.module.scss'

const footer = props => {
    return(
        <div className={classes.Footer}>
            <div className="container">
            <div className="row">
            <div className="col">
                <h2>This is a sample Footer</h2>
            </div>
            </div>
            </div>
        </div>

    )
}

export default footer;