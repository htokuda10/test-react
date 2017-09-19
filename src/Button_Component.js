import React, { Component } from 'react';

class Button_Component extends Component {
    render() {
        return(
            <div className={ this.props.containerClasses }>
                <button id={ this.props.idValue } className={ this.props.buttonClasses }
                        value={ this.props.buttonValue } type="button"
                        onClick={ this.props.clickFunction.bind(this) }>{ this.props.buttonTitle }
                </button>
            </div>
        )
    }
}

export default Button_Component;