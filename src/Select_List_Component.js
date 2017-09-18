import React, { Component } from 'react';

class Select_List_Component extends Component {
    constructor(props) {
        super(props);
        this.containerClasses = props.containerClasses;
        this.idValue = props.idValue;
        this.selectData = props.selectData;
        this.selectListTitle = props.selectListTitle;
        this.titleClasses = props.titleClasses;
    }
    render() {
        return(
            <div className={ this.containerClasses }>
                <p className={ this.titleClasses}>{ this.selectListTitle }:</p>
                { this.renderSelectOptions() }
            </div>
        )
    }
    renderSelectOptions() {
        let options = [];
        for(let key in this.selectData) {
            if (this.selectData.hasOwnProperty(key)) {
                options.push(
                    <option key={key} value={key}>{this.selectData[key]}</option>
                );
            }
        }
        return (
            <select id={ this.idValue }>
                { options }
            </select>
        );
    }
}

export default Select_List_Component;