import React, { Component } from 'react';
import { render } from 'react-dom';

class HomepageScene extends Component {


    componentWillMount(){
        require("../../unslider-min");
    }

    componentDidMount(){

        require("../../unslider-min");

        $('.fading-slider').unslider({
            animation: 'fade',
            autoplay: true,
            arrows: false
        });
    }

    render() {



        return (
            <div className="homepage-scene">
                <div className="unslider">

                    <div className="fading-slider unslider-fade" style={{overflow:'hidden'}}>
                        <ul className="unslider-wrap">
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/shejiao.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/jiaoxun.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/yiliao.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/youxi.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/kefu.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/dianshang.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/shixun.png"/>
                            </li>
                            <li>
                                <img src="http://ofji7fgcp.bkt.clouddn.com/fm.png"/>
                            </li>
                        </ul>
                    </div>
                </div>




            </div>
        )
    }
}



export default HomepageScene;