import React, { Component } from 'react';
import { render } from 'react-dom';
import HomepageBg from '../homepage/homepageBg';
import Apply from '../contact/apply';


class Enterprise extends Component {
    render() {
        return (
            <div className="enterprise-outbox">
                <div className="enterprise-part1">
                    <div className="enterprise-part1-left">
                        <div className="enterprise-part1-title">
                            手把手帮你接入直播，<br/>
                            广受青睐，事半功倍。
                        </div>
                        <div  className="enterprise-part1-inner">
                            Pili 面向市场推出企业定制化服务，围绕直播行业根据你的需求进行开发定<br/>
                            制，让你的事业起步即领跑。
                        </div>
                    </div>
                    <div  className="enterprise-part1-btn">
                        申请企业服务
                    </div>
                </div>
                <div className="enterprise-part2">
                    <HomepageBg />
                </div>
                <div className="enterprise-part3">
                    <div className="enterprise-part3-left">
                        <div className="enterprise-part3-title">客户评价</div>
                        <div className="enterprise-part3-inner">一心为你，做好解决直播难题的最佳帮手。</div>
                    </div>
                    <div className="enterprise-part3-right">
                        <div className="enterprise-part3-cell">
                            <div className="enterprise-part3-imgbox">
                                <img className="enterprise-part3-img" src="http://ofji7fgcp.bkt.clouddn.com/xuhuan.png" />
                            </div>
                            <div className="enterprise-part3-textbox">
                                <div className="enterprise-part3-custom">
                                    <span className="enterprise-part3-name">徐华</span>
                                    <span className="enterprise-part3-position">沪江网副总裁</span>
                                </div>
                                <div className="enterprise-part3-text">
                                    七牛为沪江提供了稳定高可用的云端文件大规模存储服务，很<br/>
                                    好地帮助企业降低了运营成本，提高了响应速度。
                                </div>
                            </div>
                        </div>

                        <div className="enterprise-part3-cell2">
                            <div className="enterprise-part3-imgbox">
                                <img className="enterprise-part3-img" src="http://ofji7fgcp.bkt.clouddn.com/zhaoyongli.png" />
                            </div>
                            <div className="enterprise-part3-textbox">
                                <div className="enterprise-part3-custom">
                                    <span className="enterprise-part3-name">阮永丽</span>
                                    <span className="enterprise-part3-position">美图秀秀 CTO</span>
                                </div>
                                <div className="enterprise-part3-text">
                                    七牛为沪江提供了稳定高可用的云端文件大规模存储服务，很<br/>
                                    好地帮助企业降低了运营成本，提高了响应速度。
                                </div>
                            </div>
                        </div>
                        <div className="enterprise-part3-cell2">
                            <div className="enterprise-part3-imgbox">
                                <img className="enterprise-part3-img" src="http://ofji7fgcp.bkt.clouddn.com/wangwei.png" />
                            </div>
                            <div className="enterprise-part3-textbox">
                                <div className="enterprise-part3-custom">
                                    <span className="enterprise-part3-name">汪威</span>
                                    <span className="enterprise-part3-position">咸蛋家 CTO</span>
                                </div>
                                <div className="enterprise-part3-text">
                                    七牛为沪江提供了稳定高可用的云端文件大规模存储服务，很<br/>
                                    好地帮助企业降低了运营成本，提高了响应速度。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="enterprise-part4">
                    <Apply />
                </div>
            </div>
        )
    }
}


export default Enterprise;