import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Navigator extends Component {


    componentWillMount(){
        require("../../Plugins/navAnimated");
    }


    render() {

        return (
            <header className="globalNav noDropdownTransition" id="top">
                <div className="navRoot allowExpand">
                    <div className="nav-width">
                        <div className="navSection logo">
                            <Link to="/">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/logo.svg"/>
                            </Link>
                        </div>
                        <div className="navSection primary">

                            <div className="hasDropdown colorize" data-dropdown="product">
                                <span className="rootLink">产品与功能</span>
                            </div>

                            <div className="hasDropdown colorize " data-dropdown="developers">
                                <span className="rootLink">开发者</span>
                            </div>

                            <a href="https://pili.kf5.com/hc/">
                                <div className="colorize" data-dropdown="problem">
                                    <span className="rootLink">常见问题</span>
                                </div>
                            </a>

                            <Link to="/living">
                                <div className="colorize" data-dropdown="enterprise">
                                    <span className="rootLink2">最佳实践 Living</span>
                                </div>
                            </Link>

                        </div>

                        <div className="navSection secondary">
                        </div>
                        <li className="navSection mobile">
                            <a className="rootLink "><h2>Menu</h2></a>

                            <div className="popup">
                                <div className="popupContainer">
                                    <a className="popupCloseButton">Close</a>

                                    <div className="mobileProducts">

                                    </div>
                                    <div className="mobileSecondaryNav">

                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>


                <div className="dropdownRoot">
                    <div className="dropdownBackground">
                        <div className="alternateBackground"></div>
                    </div>
                    <div className="dropdownArrow"></div>

                    <div className="dropdownContainer">

                        <div className="dropdownSection" data-dropdown="product">
                            <div className="dropdownContent">
                                <div className="nav-stripe-product">
                                    <div className="nav-stripe-product-midbox">

                                        <Link to="/rtc">
                                            <div className="nav-stripe-product-cell nav-stripe-margin">
                                                <div className="nav-stripe-product-imgbox">
                                                    <img src="http://ofji7fgcp.bkt.clouddn.com/lianmai.svg" />
                                                </div>
                                                <div className="nav-stripe-product-textbox">
                                                    <div className="nav-stripe-product-title">连麦互动 SDK</div>
                                                    <div className="nav-stripe-product-inner">
                                                        最好的连麦解决方案，<br/>
                                                        迎合现有市场的最佳直播套装。
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="/player">
                                            <div className="nav-stripe-product-cell">
                                                <div className="nav-stripe-product-imgbox">
                                                    <img src="http://ofji7fgcp.bkt.clouddn.com/player.svg" />
                                                </div>
                                                <div className="nav-stripe-product-textbox">
                                                    <div className="nav-stripe-product-title">播放器 SDK</div>
                                                    <div className="nav-stripe-product-inner">
                                                        多种格式和码率，<br/>
                                                        给予你的用户最佳播放体验。
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="/pushsdk">
                                            <div className="nav-stripe-product-cell nav-stripe-margin">
                                                <div className="nav-stripe-product-imgbox">
                                                    <img src="http://ofji7fgcp.bkt.clouddn.com/streaming.svg" />
                                                </div>
                                                <div className="nav-stripe-product-textbox">
                                                    <div className="nav-stripe-product-title">推流 SDK</div>
                                                    <div className="nav-stripe-product-inner">
                                                        采集硬件音视频，<br/>
                                                        结合自定义处理推流出去。
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link to="/character">
                                            <div className="nav-stripe-product-cell">
                                                <div className="nav-stripe-product-imgbox">
                                                    <img src="http://ofji7fgcp.bkt.clouddn.com/features.svg" />
                                                </div>
                                                <div className="nav-stripe-product-textbox">
                                                    <div className="nav-stripe-product-title">功能大全</div>
                                                    <div className="nav-stripe-product-inner">
                                                        涵盖市场主流功能，<br/>
                                                        更有自定义功能无限嵌入。
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdownSection" data-dropdown="developers">
                            <div className="dropdownContent">
                                <div className="nav-stripe-developers">
                                    <div className="nav-stripe-product-box">
                                        <Link to="/document">
                                            <div className="nav-stripe-product-cell nav-stripe-margin-bottom">
                                                <div className="nav-stripe-product-imgbox">
                                                    <img src="http://ofji7fgcp.bkt.clouddn.com/documents.svg" />
                                                </div>
                                                <div className="nav-stripe-product-textbox">
                                                    <div className="nav-stripe-product-title">开发文档</div>
                                                    <div className="nav-stripe-product-inner">
                                                        包含直播推流 SDK、连麦互动<br/>
                                                        SDK 以及播放器 SDK 文档。
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>


                                        <div className="nav-stripe-product-cell">
                                            <div className="nav-stripe-product-imgbox">
                                                <img src="http://ofji7fgcp.bkt.clouddn.com/blog.svg" />
                                            </div>
                                            <div className="nav-stripe-product-textbox">
                                                <div className="nav-stripe-product-title">技术博客</div>
                                                <div className="nav-stripe-product-inner">
                                                    技术博客包含直播知识普及，产<br/>
                                                    品更新以及团队动态。
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </header>
        )
    }
}


export default Navigator;
