import React, { Component } from 'react';

class Consumer_Info_Card_Component extends Component {
    render() {
        return (this.props.consumerSelected && this.props.consumerSelected !== {}) ?
            <div className="form-group row">
                <div className="col-sm-12 cust-info-card">
                    <div className="panel panel-success cust-info-header-cont">
                        <div className="panel-heading">
                            <h4>Consumer Profile Selected</h4>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="cust-info-name">
                                    { this.props.consumerSelected.firstName } { this.props.consumerSelected.lastName }
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 cust-info-card">
                                <h5 className="cust-info-title">ID:</h5>
                                <p>{ this.props.consumerSelected.id }</p>
                                <h5 className="cust-info-title">Phone:</h5>
                                <p>{ this.props.consumerSelected.phone }</p>
                                <h5 className="cust-info-title">State: </h5>
                                <p>{ this.props.consumerSelected.state }</p>
                                <h5 className="cust-info-title">Email:</h5>
                                <p>{ this.props.consumerSelected.email }</p>
                            </div>
                            <div className="col-sm-6 cust-info-card">
                                <h5 className="cust-info-title">Misc1:</h5>
                                <p></p>
                                <h5 className="cust-info-title">Misc2:</h5>
                                <p></p>
                                <h5 className="cust-info-title">Misc3:</h5>
                                <p></p>
                                <h5 className="cust-info-title">Misc4:</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null;
    }
}

export default Consumer_Info_Card_Component;