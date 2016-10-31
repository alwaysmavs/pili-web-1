import React, { Component } from 'react';
import { render } from 'react-dom';

class About extends Component {
    render() {
        return (
            <div className="about-outbox">
                <div className="about-part1">
                    <div className="about-part1-title">让实时连接更简单</div>
                    <div className="about-part1-inner">
                        正因为实时的连接，让人类的时空界限变得越来越小，<br/>
                        改善了人与人相处的方式，<br/>
                        这便是我们在做的事。
                    </div>
                    <div className="about-part1-img">
                        <img src="http://ofji7fgcp.bkt.clouddn.com/aboutAnimated.png"/>
                    </div>
                </div>
                <div className="about-part2-bg">
                    <div className="about-part2">
                        <div className="about-part2-title">团队</div>
                        <div className="about-part2-inner">
                            Pili 让直播通信更便捷地应用在人们日常使用的喜爱产品之上，我们每天帮助处在世界各地<br/>
                            的直播产品企业或者团队处理上亿的直播讯息。
                        </div>
                        <div className="about-part2-member">
                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png" />
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png" />
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png" />
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>

                            <div className="about-part2-memberbox">
                                <div className="about-part2-imgbox">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/xuli.png" />
                                </div>
                                <div className="about-part2-member-name">XU Li</div>
                                <div className="about-part2-member-title">Product Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-part3">

                </div>
            </div>
        )
    }
}


export default About;