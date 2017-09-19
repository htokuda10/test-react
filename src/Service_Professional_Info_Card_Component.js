import React, { Component } from 'react';

class Service_Professional_Info_Card_Component extends Component {
    constructor(props) {
        super(props);
        this.spData = props.spData;
    }
    render() {
        return(
            <div className="form-group row">
                <div className="col-sm-12 cust-info-card">
                    <div className="panel panel-warning cust-info-header-cont">
                        <div className="panel-heading">
                            <h4>Service Profesional Called</h4>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="cust-info-name">{ this.spData.spName }</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <h5 className="cust-info-title">ID:</h5>
                                <p>{ this.spData.spId }</p>
                                <h5 className="cust-info-title">Phone:</h5>
                                <p>{ this.spData.spPhone }</p>
                                <h5 className="cust-info-title">Location:</h5>
                                <p>{ this.spData.spLocation }</p>
                                <h5 className="cust-info-title">Total Ratings:</h5>
                                <p>{ this.spData.spRatings }</p>
                                <h5 className="cust-info-title">Rating:</h5>
                                <p>{ this.spData.spRating }</p>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="cust-info-title">Affiliate:</h5>
                                <p>{ this.spData.affiliate }</p>
                                <h5 className="cust-info-title">Number Called:</h5>
                                <p>{ this.spData.numberCalled }</p>
                                <h5 className="cust-info-title">Call Unique ID:</h5>
                                <p>{ this.spData.callUniqueId }</p>
                                <h5 className="cust-info-title">Server ID:</h5>
                                <p>{ this.spData.serverId }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service_Professional_Info_Card_Component;
