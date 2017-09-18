import React, { Component } from 'react';

class Button_Component extends Component {
    constructor(props) {
        super(props);
        this.buttonClasses = props.buttonClasses;
        this.buttonTitle = props.buttonTitle;
        this.buttonValue = props.buttonValue;
        this.clickFunction = props.clickFunction;
        this.containerClasses = props.containerClasses;
        this.idValue = props.idValue;
    }
    render() {
        return(
            <div className={ this.containerClasses }>
                <button id={ this.idValue } className={ this.buttonClasses } value={ this.buttonValue } type="button"
                    onClick={ this.clickFunction.bind(this) }>{ this.buttonTitle }</button>
            </div>
        )
    }
}

export default Button_Component;