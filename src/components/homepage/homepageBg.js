import React, { Component } from 'react';
import { render } from 'react-dom';
import { BG_CUSTOMER } from '../../constants/pageData';

class HomepageBg extends Component {
    render() {
        let bgCustomer = BG_CUSTOMER;

        let bgCustomerList = bgCustomer.map(
            function(data){

                return(
                    <div className="homepageBg-cell"  key={data.customerId}>
                       <img className="homepageBg-icon-img" src={data.customerImg} />
                    </div>
                )
            }
        );
        return (
            <div className="homepageBg-outbox">
                <div className="homepageBg-outbox-title">他们都在用</div>
                <div className="homepageBg-outbox-inner">
                    {bgCustomerList}
                </div>
            </div>
        )
    }
}



export default HomepageBg;