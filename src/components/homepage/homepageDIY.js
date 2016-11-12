import React, { Component } from 'react';
import { render } from 'react-dom';

class HomepageDIY extends Component {


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
                        <div className="homepage-check-title">
                            <div>美颜</div>
                            <div>点赞</div>
                            <div>脸萌</div>
                            <div>视频通话</div>
                        </div>
                        <div className="homepage-check">
                            <div>
                                <input type="radio" name="Sex" value="female" /> 关闭
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 关闭
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 关闭
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 关闭
                            </div>
                        </div>
                        <div className="homepage-check">
                            <div>
                                <input type="radio" name="Sex" value="female" /> 轻度
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 开启
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 开启
                            </div>
                            <div>
                                <input type="radio" name="Sex" value="female" /> 开启
                            </div>
                        </div>
                        <div className="homepage-check">
                            <div>
                                <input type="radio" name="Sex" value="female" /> 重度
                            </div>
                        </div>
                    </div>
                    <div className="homepageDIY-btn">
                        查看更多功能
                    </div>
                </div>
                <div className="homepageDIY-right">
                    <img className="homepageDIY-right-img" src="http://ofji7fgcp.bkt.clouddn.com/hpIphone.png" />
                </div>
            </div>
        )
    }
}



export default HomepageDIY;