import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { SampleBase } from './sample-base';
import * as data from './dataSource.json';
import Axios from "axios";
export default class Data extends SampleBase {
    constructor() {
        super(...arguments);
        this.temp = 'sportsData';
        // define the JSON of data
        this.sportsData = data[this.temp];
        // bind the DataManager instance to dataSource property
        this.customerData = new DataManager({
            url: 'https://420b472d.ngrok.io/deepak.belwal@nineleaps.com/searchdata',
            adaptor: new WebApiAdaptor(),
            crossDomain: true
        });
        // maps the local data column to fields property
        this.localFields = { text: 'Game', value: 'Id' };
    }

    componentDidMount(){
        Axios.get(`https://420b472d.ngrok.io/deepak.belwal@nineleaps.com/searchdata`)
        .then(res=>{
            console.log(res.data.searchdata)
        })
    }
    onChange(args) {
        // enable or disable the autofill in local data ComboBox based on CheckBox checked state
        this.localDataObj.autofill = args.checked;
    }
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <div className='col-lg-9'>
                        <div className='col-lg-6'>
                            <div id="local">
                                <h4> Local Data</h4>
                                <ComboBoxComponent id="games" dataSource={this.sportsData} ref={(combobox) => { this.localDataObj = combobox; }} fields={this.localFields} placeholder="Select a game" popupHeight="220px" autofill={true}/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>);
    }
}

render(<Data />, document.getElementById('root'));