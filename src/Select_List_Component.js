import React, { Component } from 'react';

class Select_List_Component extends Component {
    render() {
        return(
            <div className={ this.props.containerClasses }>
                <p className={ this.props.titleClasses}>{ this.props.selectListTitle }:</p>
                { this.renderSelectOptions() }
            </div>
        )
    }
    renderSelectOptions() {
        let options = [];
        for(let key in this.props.selectData) {
            if (this.props.selectData.hasOwnProperty(key)) {
                options.push(
                    <option key={key} value={key}>{this.props.selectData[key]}</option>
                );
            }
        }
        return (
            <select id={ this.props.idValue }>
                { options }
            </select>
        );
    }
}

export default Select_List_Component;