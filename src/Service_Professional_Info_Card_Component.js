import React, { Component } from 'react';

class Service_Professional_Info_Card_Component extends Component {
    render() {
        return (this.props.spData && this.props.spData !== {})
            ? <div className="form-group row">
                <div className="col-sm-12 cust-info-card">
                    <div className="panel panel-warning cust-info-header-cont">
                        <div className="panel-heading">
                            <h4>Service Profesional Called</h4>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="cust-info-name">{ this.props.spData.spName }</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <h5 className="cust-info-title">ID:</h5>
                                <p>{ this.props.spData.spId }</p>
                                <h5 className="cust-info-title">Phone:</h5>
                                <p>{ this.props.spData.spPhone }</p>
                                <h5 className="cust-info-title">Location:</h5>
                                <p>{ this.props.spData.spLocation }</p>
                                <h5 className="cust-info-title">Total Ratings:</h5>
                                <p>{ this.props.spData.spRatings }</p>
                                <h5 className="cust-info-title">Rating:</h5>
                                <p>{ this.props.spData.spRating }</p>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="cust-info-title">Affiliate:</h5>
                                <p>{ this.props.spData.affiliate }</p>
                                <h5 className="cust-info-title">Number Called:</h5>
                                <p>{ this.props.spData.numberCalled }</p>
                                <h5 className="cust-info-title">Call Unique ID:</h5>
                                <p>{ this.props.spData.callUniqueId }</p>
                                <h5 className="cust-info-title">Server ID:</h5>
                                <p>{ this.props.spData.serverId }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : null;
    }
}

export default Service_Professional_Info_Card_Component;
