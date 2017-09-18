import React, { Component } from 'react';

class Radio_Button2_Component extends Component {
    constructor(props) {
        super(props);
        this.containerClasses = props.containerClasses;
        this.idValue1 = props.idValue1;
        this.idValue2 = props.idValue2;
        this.radioButtonClasses = props.radioButtonClasses;
        this.radioButtonLabel1 = props.radioButtonLabel1;
        this.radioButtonLabel2 = props.radioButtonLabel2;
        this.radioButtonName = props.radioButtonName;
        this.radioButtonTitle = props.radioButtonTitle;
        this.radioButtonValue1 = props.radioButtonValue1;
        this.radioButtonValue2 = props.radioButtonValue2;
        this.titleClasses = props.titleClasses;
    }
    render() {
        return(
            <div className={ this.containerClasses }>
                <p className={ this.titleClasses }>{ this.radioButtonTitle }:</p>
                <label htmlFor={ this.idValue1 }>{ this.radioButtonLabel1 }</label>
                <input id={ this.idValue1 } className={ this.radioButtonClasses } name={ this.radioButtonName }
                       value={ this.radioButtonValue1 } type="radio" />
                <label htmlFor={ this.idValue2 }>{ this.radioButtonLabel2 }</label>
                <input id={ this.idValue2 } className={ this.radioButtonClasses } name={ this.radioButtonName }
                       value={ this.radioButtonValue2 } type="radio" />
            </div>
        );
    }
}

export default Radio_Button2_Component;