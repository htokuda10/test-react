import ButtonComponent from './Button_Component';
import React, { Component } from 'react';
import TextInputFieldComponent from './Text_Input_Field_Component';
import UpDownToggleComponent from './Up_Down_Toggle_Component';


class Search_Consumer_Component extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isContentVisible: props.isContentVisible
        }
    }
    render() {
        return (
            <div id="searchConsumerComponent" className="form-group row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Search For Consumer
                                <UpDownToggleComponent
                                    isContentVisible={ this.state.isContentVisible }
                                    parentToggleFunction={ this.upDownToggleComponentClickedFunction.bind(this) }
                                />
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            { (this.state.isContentVisible) ? this.renderSearchConsumerFields() : null }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSearchConsumerFields() {
        return (
            <div>
                {/* Zip code input */}
                <TextInputFieldComponent
                    containerClasses="text-left"
                    idValue="zipCodeInputId"
                    inputClasses="text-left"
                    placeholderValue="Zip Code"
                    textInputTitle="Zip Code"
                    titleClasses="cust-marg-bot-0 cust-marg-top-5"
                />
                {/* Phone number input */}
                <TextInputFieldComponent
                    containerClasses="text-left"
                    idValue="phoneNumberInputId"
                    inputClasses="text-left"
                    placeholderValue="(###) ###-####"
                    textInputTitle="Phone Number"
                    titleClasses="cust-marg-bot-0 cust-marg-top-5"
                />
                {/* Email input */}
                <TextInputFieldComponent
                    containerClasses="text-left"
                    idValue="emailAddressInputId"
                    inputClasses=""
                    placeholderValue="example@email.com"
                    textInputTitle="Email Address"
                    titleClasses="cust-marg-bot-0 cust-marg-top-5"
                />
                {/* Search button */}
                <ButtonComponent
                    buttonClasses=""
                    buttonTitle="Search"
                    buttonValue="testButtonValue"
                    clickFunction={ this.searchConsumerFunction }
                    containerClasses="text-right cust-marg-top-15"
                    idValue="searchButtonId"
                />
            </div>
        );
    }


    searchConsumerFunction() {
        console.log('Searching for consumers...');
    }

    setContentVisible() {
        this.setState({
            isContentVisible: !this.state.isContentVisible
        });
    }

    upDownToggleComponentClickedFunction() {
        this.setContentVisible();
    }
}

export default Search_Consumer_Component;
