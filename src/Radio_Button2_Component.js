import React, { Component } from 'react';

class Radio_Button2_Component extends Component {
    render() {
        return(
            <div className={ this.props.containerClasses }>
                <p className={ this.props.titleClasses }>{ this.props.radioButtonTitle }:</p>
                <label htmlFor={ this.props.idValue1 }>{ this.props.radioButtonLabel1 }</label>
                <input id={ this.props.idValue1 } className={ this.props.radioButtonClasses }
                       name={ this.props.radioButtonName } value={ this.props.radioButtonValue1 } type="radio" />
                <label htmlFor={ this.props.idValue2 }>{ this.props.radioButtonLabel2 }</label>
                <input id={ this.props.idValue2 } className={ this.props.radioButtonClasses }
                       name={ this.props.radioButtonName } value={ this.props.radioButtonValue2 } type="radio" />
            </div>
        );
    }
}

export default Radio_Button2_Component;