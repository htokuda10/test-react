import React, { Component } from 'react';

class Text_Input_Field_Component extends Component {

    constructor(props) {
        super(props);
        this.containerClasses = props.containerClasses;
        this.idValue = props.idValue;
        this.inputClasses = props.inputClasses;
        this.placeholderValue = props.placeholderValue;
        this.textInputTitle = props.textInputTitle;
        this.titleClasses = props.titleClasses;
    }

    render() {
        return (
            <div className={ this.containerClasses }>
                <p className={ this.titleClasses }>{ this.textInputTitle }</p>
                <input id={ this.idValue } className={ this.inputClasses } placeholder={ this.placeholderValue }
                       type="text" />
            </div>
        );
    }
}

export default Text_Input_Field_Component;