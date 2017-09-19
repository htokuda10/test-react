import AdditionalProjectInfoComponent from './Additional_Project_Info_Component';
import ConsumerInfoCardComponent from './Consumer_Info_Card_Component';
import React, { Component } from 'react';
import SearchConsumerComponent from './Search_Consumer_Component';
import ServiceProfessionalInfoCardComponent from './Service_Professional_Info_Card_Component';
import ServiceRequestData from './ServiceRequestData';
import Table5SelectableComponent from './Table5_Selectable_Component';

class Service_Request extends Component {

    constructor() {
        super();
        const SERVICE_REQUEST_DATA = new ServiceRequestData();
        this.consumers = SERVICE_REQUEST_DATA.getConsumersList();
        this.serviceProfessional = SERVICE_REQUEST_DATA.getServiceProfessional();
        this.state = {
            consumers: (this.consumers && this.consumers.length > 0) ? this.consumers : [],
            consumerSelected: {},
            serviceProfessional: (this.serviceProfessional && this.serviceProfessional !== {})
                ? this.serviceProfessional : {}
        }
    }
    /**
     * consumerTableSelectClickFunction will update the consumer selected object when the user clicks on a consumer
     * in the consumer table.
     */
    consumerTableSelectClickFunction(selectedObject) {

        this.setState({
            consumerSelected: selectedObject
        });
    }
    render() {
        return (
            <div className="cust-marg-left-15 cust-marg-right-15">
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
                            consumers={ this.state.consumers }
                            isContentVisible={ (this.state.consumers.length === 0) }
                        />
                        {/* This will add and remove itself to/from the DOM on update of the consumers object.
                        Fancy! */}
                        { (this.state.consumers && this.state.consumers.length > 0)
                            ? this.renderConsumersTableComponent() : null }
                        {/* Additional Project Information Component */}
                        <AdditionalProjectInfoComponent/>
                    </div>
                    <div className="col-sm-3">
                        <ServiceProfessionalInfoCardComponent
                            spData={ this.state.serviceProfessional }
                        />
                        <ConsumerInfoCardComponent
                              consumerSelected={ this.state.consumerSelected }
                        />
                    </div>
                </div>
            </div>
        );
    }
    renderConsumersTableComponent() {

        return (
            <div>
                <Table5SelectableComponent
                    clickFunction={ this.consumerTableSelectClickFunction.bind(this) }
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
                    dataArray={ this.state.consumers }
                    isContentVisible={ (this.state.consumers.length > 0) }
                    isTableCollapsible={ true }
                    tableClasses="table table-hover"
                    tableTitle="Multiple consumers found, please select a consumer"
                    titleClasses="text-left"
                />
            </div>
        );
    }
}

export default Service_Request;
