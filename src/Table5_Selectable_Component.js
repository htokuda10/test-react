import React, { Component } from 'react';
import UpDownToggleComponent from './Up_Down_Toggle_Component';

class Table5_Selectable_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isContentVisible: this.props.isContentVisible
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h4 className={ this.props.titleClasses }>{ this.props.tableTitle }
                        { this.renderTableCollapsibleUpDownToggle() }
                    </h4>
                    { (this.state.isContentVisible) ? this.renderTable() : null }
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <table className={ this.props.tableClasses }>
                        <thead>
                        <tr>
                            <th>
                                { this.props.columnName1 }
                            </th>
                            <th>
                                { this.props.columnName2 }
                            </th>
                            <th>
                                { this.props.columnName3 }
                            </th>
                            <th>
                                { this.props.columnName4 }
                            </th>
                            <th>
                                { this.props.columnName5 }
                            </th>
                        </tr>
                        </thead>
                        { this.renderTableRow() }
                    </table>
                </div>
            </div>
        );
    }

    renderTableCollapsibleUpDownToggle() {
        return (this.props.isTableCollapsible && this.props.isTableCollapsible === true)
            ? <UpDownToggleComponent
               isContentVisible={ this.state.isContentVisible }
               parentToggleFunction={ this.upDownToggleComponentClickedFunction.bind(this) }
            />
            : null;
    }

    renderTableRow() {
        let rows = [];

        /* Iterate through the data array and create a new table row per element. On each iteration, push the built
        JSX to an array, which will injected into the return JSX.
        NOTE: The onClick function will trigger an anonymous function in order to render appropriately and pass the
        clicked rows data back to the originating click function. */
        this.props.dataArray.forEach(function(value, index) {
            rows.push(
                <tr key={ index } onClick={() => this.props.clickFunction(value)}>
                    <td>{ value[this.props.columnKey1] }</td>
                    <td>{ value[this.props.columnKey2] }</td>
                    <td>{ value[this.props.columnKey3] }</td>
                    <td>{ value[this.props.columnKey4] }</td>
                    <td>{ value[this.props.columnKey5] }</td>
                </tr>
            );
        }.bind(this));

        return (
            <tbody>
                { rows }
            </tbody>
        );
    }

    setContentVisible () {
        this.setState({
            isContentVisible: !this.state.isContentVisible
        })
    }

    upDownToggleComponentClickedFunction () {
        this.setContentVisible()
    }
}

export default Table5_Selectable_Component;