import React, { Component } from 'react';

class Up_Down_Toggle_Component extends Component {
    render() {
        return (
            <span
                className={ (this.props.isContentVisible)
                    ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down' }
                aria-hidden="true"
                onClick={ this.clickFunctions.bind(this) }
            />
        )
    }
    /**
     * clickFunction will trigger on click of the span icon. ClickFunction does not need to change the value of the
     * contentVisible variable, because it is calling the parent container to update the contentVisible value. This
     * component has a watcher on the isContentVisible variable, and will render the span based on the contentVisible
     * value of the parent component.
     */
    clickFunctions() {
        this.props.parentToggleFunction();
    }
}

export default Up_Down_Toggle_Component;