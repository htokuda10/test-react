import ButtonComponent from './Button_Component';
import React, { Component } from 'react';
import RadioButton2Component from './Radio_Button2_Component';
import SelectListComponent from './Select_List_Component';

class Additional_Project_Info_Component extends Component {
    constructor(props) {
        super(props);
        this.projectStatusSelectOptions = {
            planning: 'Planning',
            construction: 'Construction',
            complete: 'Complete'
        };
        this.projectTimelineSelectOptions = {
            flexible: 'Flixible',
            days1to3: '1 - 3 Days',
            week1: '1 Week',
            week2: '2 Weeks',
            month1: '1 Month'
        };
    }
    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Additional Project Information</h3>
                            {/* Is emergency radio button */}
                            <RadioButton2Component
                                containerClasses = "form-group"
                                idValue1 = "idValue1"
                                idValue2 = "idValue2"
                                radioButtonClasses = ""
                                radioButtonLabel1 = "Yes"
                                radioButtonLabel2 = "No"
                                radioButtonName = "isEmergency"
                                radioButtonTitle = "Is an emergency"
                                radioButtonValue1 = "1"
                                radioButtonValue2 = "0"
                                titleClasses = "cust-marg-bot-0"
                            />
                            {/* Project status select list */}
                            <SelectListComponent
                                containerClasses = "form-group"
                                idValue = ""
                                selectData = { this.projectStatusSelectOptions }
                                selectListTitle = "Project status"
                                titleClasses = "cust-marg-bot-0"
                            />
                            {/* Project timeline select list */}
                            <SelectListComponent
                                containerClasses = "form-group"
                                idValue = ""
                                selectData = { this.projectTimelineSelectOptions }
                                selectListTitle = "Project timeline"
                                titleClasses = "cust-marg-bot-0"
                            />
                            {/* Property owner radio button */}
                            <RadioButton2Component
                                containerClasses = "form-group"
                                idValue1 = ""
                                idValue2 = ""
                                radioButtonClasses = ""
                                radioButtonLabel1 = "Yes"
                                radioButtonLabel2 = "No"
                                radioButtonName = "isPropertyOwner"
                                radioButtonTitle = "Is the property owner"
                                radioButtonValue1 = "1"
                                radioButtonValue2 = "0"
                                titleClasses = "cust-marg-bot-0"
                            />
                            {/* Is interested in financing radio button */}
                            <RadioButton2Component
                                containerClasses = "form-group"
                                idValue1 = ""
                                idValue2 = ""
                                radioButtonClasses = ""
                                radioButtonLabel1 = "Yes"
                                radioButtonLabel2 = "No"
                                radioButtonName = "isInterestedFinancing"
                                radioButtonTitle = "Is interested in financing"
                                radioButtonValue1 = "1"
                                radioButtonValue2 = "0"
                                titleClasses = "cust-marg-bot-0"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <ButtonComponent
                                buttonClasses = ""
                                buttonTitle = "Submit"
                                buttonValue = "testButtonValue"
                                clickFunction = { this.searchConsumerFunction }
                                containerClasses = "text-right cust-marg-top-15"
                                idValue = "submitButtonId"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    searchConsumerFunction() {
        console.log('Submitting additional project information...')
    }
}

export default Additional_Project_Info_Component;