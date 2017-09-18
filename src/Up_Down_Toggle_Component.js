import React, { Component } from 'react';

class Up_Down_Toggle_Component extends Component {

    constructor(props) {

        super(props);
        this.contentVisible = (props.isContentVisible && props.isContentVisible === true);
        this.searchMenuArrowClasses = (props.isContentVisible && props.isContentVisible === true)
            ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down';
        this.parentToggleFunction = props.parentToggleFunction;
    }

    render() {
        return (
            <span className={ this.searchMenuArrowClasses } aria-hidden="true"
                  onClick={this.clickFunctions.bind(this)} />
        )
    }
    /**
     * clickFunction will trigger on click of the span icon. ClickFunction does not need to change the value of the
     * contentVisible variable, because it is calling the parent container to update the contentVisible value. This
     * component has a watcher on the isContentVisible variable, and will render the span based on the contentVisible
     * value of the parent component.
     */
    clickFunctions() {
        this.parentToggleFunction();
        this.renderArrow()
    }
    parentUpdatedIsContentVisible() {
        this.contentVisible = !this.contentVisible;
        this.renderArrow()
    }
    /**
     * renderArrow will render the direcion of the arrow based on the show component value. If the show component
     * value is true, display a down arrow to indicate that clicking the icon will show the component.
     */
    renderArrow() {
        this.searchMenuArrowClasses = (this.contentVisible && this.contentVisible === true)
            ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down'
    }
}

export default Up_Down_Toggle_Component;