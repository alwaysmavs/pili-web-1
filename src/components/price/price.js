import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, Link} from 'react-router';

class Price extends Component {

    render() {
        return (
            <div className="price-outbox">
                <div className="price-part1-bg">
                    <div className="price-part1-title">
                        服务方案
                    </div>
                </div>
                <div className="price-part1">
                    <div  className="price-part1-list">
                        <div className="price-line-box">
                            <div className="price-line1">
                                默认免费使用
                            </div>
                            <div className="price-line2">
                                选择此方案
                            </div>
                        </div>

                        <div className="price-line3">
                            SDK 内置功能
                        </div>
                        <div className="price-line3 text-cut">
                            面部识别以及特效功能
                        </div>
                        <div className="price-line3 text-cut">
                            Airplay 录屏功能
                        </div>
                        <div className="price-line3 text-cut">
                            高级美颜功能
                        </div>
                        <div className="price-line3">
                            仅 Release 版本推送
                        </div>
                        <div className="price-line3 text-cut">
                            开放授权
                        </div>
                        <div className="cutline"></div>
                        <div className="price-line3 text-cut">
                            线上支持
                        </div>
                        <div className="price-line3 text-cut">
                            驻场支持
                        </div>
                        <div className="price-line3">
                            工单支持
                        </div>
                    </div>

                    <div  className="price-part1-list">
                        <div className="price-line-box">
                            <div className="price-line1">
                                可选拓展服务
                            </div>
                            <div className="price-line2">
                                选择此方案
                            </div>
                        </div>

                        <div className="price-line3">
                            SDK 内置功能
                        </div>
                        <div className="price-line3 ">
                            面部识别以及特效功能
                        </div>
                        <div className="price-line3 ">
                            Airplay 录屏功能
                        </div>
                        <div className="price-line3 ">
                            高级美颜功能
                        </div>
                        <div className="price-line3">
                            仅 Release 版本推送
                        </div>
                        <div className="price-line3 ">
                            开放授权
                        </div>
                        <div className="cutline"></div>
                        <div className="price-line3 ">
                            线上支持
                        </div>
                        <div className="price-line3 ">
                            驻场支持
                        </div>
                        <div className="price-line3">
                            工单支持
                        </div>

                    </div>
                </div>


                <div className="price-part2">
                    <div className="price-part2-left">
                        定制需求可以进一步了解我们的企业服务。
                    </div>
                    <Link to="/enterprise">
                        <div className="price-part2-right">
                            了解企业服务
                        </div>
                    </Link>
                </div>

                <div className="price-part3">
                    <div className="cutline"></div>
                    <div  className="price-part3-inner">
                        1 基本功能：<br/>
                        2 高级功能：高级自选美颜，脸部特效，多滤镜选择等等（这里面的功能大部分基础功能肯定有，但是没有这么牛，比如滤镜效果少）<br/>
                        3 驻唱支持：专职的技术实施人员，前往贵公司进行服务，每次时效是一天。
                    </div>
                </div>
            </div>
        )
    }
}


export default Price;