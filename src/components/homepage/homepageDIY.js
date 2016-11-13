import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

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
                        <input type="radio" name="Sex" value="female" /> 关闭

                    </div>
                    <Link to="/character">
                        <div className="homepageDIY-btn">
                            查看更多功能
                        </div>
                    </Link>
                </div>
                <div className="homepageDIY-right">
                    <img className="homepageDIY-right-img" src="http://ofji7fgcp.bkt.clouddn.com/hpIphone.png" />
                </div>
            </div>
        )
    }
}



export default HomepageDIY;