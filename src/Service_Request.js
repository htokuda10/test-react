import AdditionalProjectInfoComponent from './Additional_Project_Info_Component';
import React, { Component } from 'react';
import SearchConsumerComponent from './Search_Consumer_Component';
import ServiceRequestData from './ServiceRequestData';
import Table5SelectableComponent from './Table5_Selectable_Component';

class Service_Request extends Component {

    constructor() {
        super();
        const SERVICE_REQUEST_DATA = new ServiceRequestData();
        this.consumers = SERVICE_REQUEST_DATA.getConsumersList();
        this.consumerSelected = {};
        this.serviceProfessional = SERVICE_REQUEST_DATA.getServiceProfessional();
    }
    /**
     * consumerTableSelectClickFunction will update the consumer selected object when the user clicks on a consumer
     * in the consumer table.
     */
    consumerTableSelectClickFunction(selectedObject) {
        this.consumerSelected = selectedObject
    }
    render() {
        return (
            <div className="serviceRequest cust-marg-left-15 cust-marg-right-15">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Service Request</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-9">
                        {/* TODO The initial visible value can be set based on retrieved values. This will be
                        hardcoded for now for testing functionality. */}
                        <SearchConsumerComponent
                            consumers={ this.consumers }
                            isContentVisible={ true }
                        />
                        {/* This will add and remove itself to/from the DOM on update of the consumers object.
                        Fancy! */}
                        { this.renderConsumersTableComponent() }
                        <AdditionalProjectInfoComponent/>
                    </div>
                    {/*<div className="col-sm-3">*/}
                        {/*<service-professional-info-card-component*/}
                            {/*:spData="serviceProfessional"*/}
                        {/*></service-professional-info-card-component>*/}
                        {/*<consumer-info-card-component*/}
                              {/*:consumerData="consumerSelected"*/}
                        {/*></consumer-info-card-component>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
    renderConsumersTableComponent() {

        return (this.consumers && this.consumers.length > 0)
            ? <div>
                <Table5SelectableComponent
                    clickFunction={ this.consumerTableSelectClickFunction }
                    columnKey1="firstName"
                    columnKey2="lastName"
                    columnKey3="state"
                    columnKey4="phone"
                    columnKey5="email"
                    columnName1="First Name"
                    columnName2="Last Name"
                    columnName3="State"
                    columnName4="Phone"
                    columnName5="Email"
                    dataArray={ this.consumers }
                    isContentVisible={ true }
                    isTableCollapsible={ true }
                    tableClasses="table table-hover"
                    tableTitle="Multiple consumers found, please select a consumer"
                    titleClasses="text-left"
                />
            </div>
            : null;
    }
}



export default Service_Request;
