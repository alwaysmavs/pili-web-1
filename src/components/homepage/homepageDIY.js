import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class HomepageDIY extends Component {
    constructor(props){
        super(props);
        this.state = {
            layer1: 1,
            layer2: 2,
            layer3: 3,
            layer4: 4,
            btn1:1,
            btn2:0.5,
            btn3:0.5,
            btn4:0.5
        };
    }

    componentDidMount(){
        $("#layer1").css("opacity","1");
        $("#layer2").css("opacity","0");
        $("#layer3").css("opacity","0");
        $("#layer4").css("opacity","0");
    }


    selectClick(value){

        switch (value){
            case 1:
            {
                this.setState({
                    layer1 : 4,
                    layer2 : 1,
                    layer3 : 2,
                    layer4 : 3,
                    btn1:1,
                    btn2:0.5,
                    btn3:0.5,
                    btn4:0.5
                });

                $("#layer1").animate({opacity:"1"});
                $("#layer2").animate({opacity:"0"});
                $("#layer3").animate({opacity:"0"});
                $("#layer4").animate({opacity:"0"});


            };
                break;
            case 2:
            {
                this.setState({
                    layer1 : 3,
                    layer2 : 4,
                    layer3 : 1,
                    layer4 : 2,
                    btn1:0.5,
                    btn2:1,
                    btn3:0.5,
                    btn4:0.5
                });

                $("#layer1").animate({opacity:"0"});
                $("#layer2").animate({opacity:"1"});
                $("#layer3").animate({opacity:"0"});
                $("#layer4").animate({opacity:"0"});
            };
                break;
            case 3:
            {
                this.setState({
                    layer1 : 2,
                    layer2 : 3,
                    layer3 : 4,
                    layer4 : 1,
                    btn1:0.5,
                    btn2:0.5,
                    btn3:1,
                    btn4:0.5
                });
                $("#layer1").animate({opacity:"0"});
                $("#layer2").animate({opacity:"0"});
                $("#layer3").animate({opacity:"1"});
                $("#layer4").animate({opacity:"0"});
            };
                break;
            case 4:
            {

                this.setState({
                    layer1 : 1,
                    layer2 : 2,
                    layer3 : 3,
                    layer4 : 4,
                    btn1:0.5,
                    btn2:0.5,
                    btn3:0.5,
                    btn4:1
                });
                $("#layer1").animate({opacity:"0"});
                $("#layer2").animate({opacity:"0"});
                $("#layer3").animate({opacity:"0"});
                $("#layer4").animate({opacity:"1"});
            };
                break;
        }
    }

    render() {

        return (
            <div className="homepageDIY-box">
                <div className="homepageDIY-left">
                    <div className="homepageDIY-line1">
                        功能自定义<br/>
                        随你业务，随意定制
                    </div>
                    <div className="homepageDIY-line2">
                        我们使用了胶水积木的开发模式，自定义的开放接<br/>
                        口，可以不断容纳第三方音视频效果。
                    </div>
                    <div className="homepageDIY-line3">
                        <div className="homepageDIY-line3-one">
                            <div className="homepageDIY-line3-cell" style={{opacity:this.state.btn1}} onClick={this.selectClick.bind(this,1) }>
                                <span>点赞</span>
                            </div>
                            <div className="homepageDIY-line3-cell" style={{opacity:this.state.btn2}} onClick={this.selectClick.bind(this,2) }>

                                <span>送礼</span>
                            </div>
                        </div>

                        <div className="homepageDIY-line3-two">
                            <div className="homepageDIY-line3-cell" style={{opacity:this.state.btn3}} onClick={this.selectClick.bind(this,3) }>
                                <span>连麦</span>
                            </div>
                            <div className="homepageDIY-line3-cell2" style={{opacity:this.state.btn4}} onClick={this.selectClick.bind(this,4) }>
                                <span>动态表情</span>
                            </div>
                        </div>

                    </div>
                    <Link to="/character">
                        <div className="homepageDIY-btn">
                            查看更多功能
                        </div>
                    </Link>
                </div>
                <div className="homepageDIY-right">
                    <div>
                        <img className="homepageDIY-right-img" src="http://ofji7fgcp.bkt.clouddn.com/iPhone-7-Front.png" />
                        <img className="homepageDIY-right-img-inner" id="layer1" style={{zIndex:this.state.layer1}} src="http://ofji7fgcp.bkt.clouddn.com/like.png" />
                        <img className="homepageDIY-right-img-inner" id="layer2" style={{zIndex:this.state.layer2}} src="http://ofji7fgcp.bkt.clouddn.com/gift.png" />
                        <img className="homepageDIY-right-img-inner" id="layer3" style={{zIndex:this.state.layer3}} src="http://ofji7fgcp.bkt.clouddn.com/rtcscreen.png" />
                        <img className="homepageDIY-right-img-inner" id="layer4" style={{zIndex:this.state.layer4}} src="http://ofji7fgcp.bkt.clouddn.com/faceu.png" />
                    </div>
                </div>
            </div>
        )
    }
}



export default HomepageDIY;