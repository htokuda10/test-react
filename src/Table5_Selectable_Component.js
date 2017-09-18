import React, { Component } from 'react';
import UpDownToggleComponent from './Up_Down_Toggle_Component';

class Table5_Selectable_Component extends Component {
    constructor(props) {
        super(props);
        this.clickFunction = props.clickFunction;
        this.columnKey1 = props.columnKey1;
        this.columnKey2 = props.columnKey2;
        this.columnKey3 = props.columnKey3;
        this.columnKey4 = props.columnKey4;
        this.columnKey5 = props.columnKey5;
        this.columnName1 = props.columnName1;
        this.columnName2 = props.columnName2;
        this.columnName3 = props.columnName3;
        this.columnName4 = props.columnName4;
        this.columnName5 = props.columnName5;
        this.dataArray = props.dataArray;
        this.isContentVisible = props.isContentVisible;
        this.isTableCollapsible = props.isTableCollapsible;
        this.tableClasses = props.tableClasses;
        this.tableTitle = props.tableTitle;
        this.titleClasses = props.titleClasses;
        this.contentVisible = (this.isContentVisible === true);
        this.tableCollapsible = (this.isTableCollapsible === true);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h4 className={ this.titleClasses }>{ this.tableTitle }
                        { this.renderTableCollapsibleUpDownToggle() }
                    </h4>
                    { this.renderTable() }
                </div>
            </div>
        )
    }
    renderTable() {
        return (this.contentVisible && this.contentVisible === true)
            ? <div className="row">
                <div className="col-sm-12">
                    <table className={ this.tableClasses }>
                        <thead>
                        <tr>
                            <th>
                                { this.columnName1 }
                            </th>
                            <th>
                                { this.columnName2 }
                            </th>
                            <th>
                                { this.columnName3 }
                            </th>
                            <th>
                                { this.columnName4 }
                            </th>
                            <th>
                                { this.columnName5 }
                            </th>
                        </tr>
                        </thead>
                        { this.renderTableRow() }
                    </table>
                </div>
            </div>
            : null;
    }
    renderTableCollapsibleUpDownToggle() {
        return (this.tableCollapsible && this.tableCollapsible === true)
            ? <UpDownToggleComponent
               isContentVisible={ this.contentVisible }
               parentToggleFunction={ this.upDownToggleComponentClickedFunction }
            />
            : null;
    }
    renderTableRow() {
        let rows = [];

        this.dataArray.forEach(function(value, index) {
            rows.push(
                <tr key={ index }>
                    <td>{ value[this.columnKey1] }</td>
                    <td>{ value[this.columnKey2] }</td>
                    <td>{ value[this.columnKey3] }</td>
                    <td>{ value[this.columnKey4] }</td>
                    <td>{ value[this.columnKey5] }</td>
                </tr>
            );
        }.bind(this));

        return (
            <tbody>
                { rows }
            </tbody>
        );
    }
}

export default Table5_Selectable_Component;