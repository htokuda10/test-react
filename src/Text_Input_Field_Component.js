import React, { Component } from 'react';

class Text_Input_Field_Component extends Component {
    render() {
        return (
            <div className={ this.props.containerClasses }>
                <p className={ this.props.titleClasses }>{ this.props.textInputTitle }</p>
                <input id={ this.props.idValue } className={ this.props.inputClasses }
                       placeholder={ this.props.placeholderValue } type="text" />
            </div>
        );
    }
}

export default Text_Input_Field_Component;