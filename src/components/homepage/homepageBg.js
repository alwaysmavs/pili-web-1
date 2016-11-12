import React, { Component } from 'react';
import { render } from 'react-dom';
import { BG_CUSTOMER } from '../../constants/pageData';

class HomepageBg extends Component {

    componentDidMount(){
        var speed = 30;
        var scroll_begin = document.getElementById("scroll_begin");
        var scroll_end = document.getElementById("scroll_end");
        var scroll_div = document.getElementById("scroll_div");
        scroll_end.innerHTML = scroll_begin.innerHTML
        function Marquee() {
            console.log(scroll_div.scrollLeft );
            if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
                scroll_div.scrollLeft -= scroll_begin.offsetWidth
            else
                scroll_div.scrollLeft++
        }


        setInterval(Marquee, speed);
    }


    render() {
        let bgCustomer = BG_CUSTOMER;

        let bgCustomerList = bgCustomer.map(
            function(data){

                return(
                    <li  key={data.customerId}>
                       <img  src={data.customerImg} />
                    </li>
                )
            }
        );
        return (
            <div className="homepageBg-outbox">
                <div className="homepageBg-outbox-title">他们都在用</div>

                <div className="pili-customer-mask-postion">
                    <div className="pili-customer-mask"></div>
                </div>

                <div className="scroll_div" id="scroll_div">
                        <div className="homepageBg-outbox-inner" id="scroll_begin">
                            <ul>
                                {bgCustomerList}
                            </ul>
                        </div>
                        <div id="scroll_end"></div>
                </div>
            </div>
        )
    }
}



export default HomepageBg;