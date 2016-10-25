import React, { Component } from 'react';
import { render } from 'react-dom';
import HomepageScene from './homepageScene';
import HomepageDIY from './homepageDIY';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-box">
                <div className="homepage-part1">
                    <div className="homepage-part1-left">
                        <div className="homepage-part1-title">
                            完美直播体验，Pili 给予。
                        </div>
                        <div className="homepage-part1-text">
                            Pili 是面向直播产品推出的性能效率极致优化的推流、播放器 SDK 组合，<br/>
                            让你的直播产品更快、更全、更稳定，带给你的用户惊喜直播体验。
                        </div>
                    </div>
                    <div className="homepage-part1-right">
                        <div className="homepage-part1-btn">
                            立即免费使用
                        </div>
                    </div>
                </div>

                <div className="homepage-part2">
                    <HomepageScene />
                </div>

                <div className="homepage-part3">
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">SDK 功能</div>
                        <div className="homepage-part3-inner">
                            我们使用了胶水层开发模式，自定<br/>
                            义的开放接口，可以不断容纳第三<br/>
                            方音视频效果。
                        </div>
                    </div>
                    <div className="cutline-1"></div>
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">开发文档</div>
                        <div className="homepage-part3-inner">
                            我们支持了 iOS 以及 Android 的<br/>
                            直播推流以及播放，更加便捷给予<br/>
                            更多端的不同版本。
                        </div>
                    </div>
                    <div className="cutline-1"></div>
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">企业服务</div>
                        <div className="homepage-part3-inner">
                            为了让足够好用的直播惠及更多的<br/>
                            客户，应对不断变化的市场需求，<br/>
                            我们提供定制化的企业服务。
                        </div>
                    </div>
                </div>

                <div className="homepage-part4">
                    <HomepageDIY />
                </div>

            </div>
        )
    }
}



export default Homepage;