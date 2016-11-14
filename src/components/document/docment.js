import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Document extends Component {

    render() {
        return (
            <div className="document-outbox">
                <div className="document-part1-bg">
                    <div className="document-part1">
                        <div className="document-part1-left">
                            <div className="document-part1-cell">
                                <div className="document-part1-title">开发者第一</div>
                                <div className="document-part1-inner">
                                    我们认为，直播技术最终是一个根植于代码的问题，我们<br/>
                                    痴迷寻求优雅，可组合的抽象，能够提供可靠的，可扩展<br/>
                                    的，灵活的直播集成。因为我们消除了不必要的复杂性和<br/>
                                    无关的细节，你可以在短短的几小时内基于 Pili SDK 实<br/>
                                    现你的直播应用。
                                </div>
                            </div>
                        </div>
                        <div className="document-part2-right">
                            <div className="document-part1-cell">
                                <div className="icosahedron-wraper">
                                    <div className="icosahedron spin">
                                        <div className="triangle-1"></div>
                                        <div className="triangle-2"></div>
                                        <div className="triangle-3"></div>
                                        <div className="triangle-4"></div>
                                        <div className="triangle-5"></div>

                                        <div className="triangle-6"></div>
                                        <div className="triangle-7"></div>
                                        <div className="triangle-8"></div>
                                        <div className="triangle-9"></div>
                                        <div className="triangle-10"></div>

                                        <div className="triangle-11"></div>
                                        <div className="triangle-12"></div>
                                        <div className="triangle-13"></div>
                                        <div className="triangle-14"></div>
                                        <div className="triangle-15"></div>

                                        <div className="triangle-16"></div>
                                        <div className="triangle-17"></div>
                                        <div className="triangle-18"></div>
                                        <div className="triangle-19"></div>
                                        <div className="triangle-20"></div>

                                        <div className="triangle-21"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="document-part2">
                    <div className="document-part2-line1">
                        <div className="document-part2-cell1">
                            <div className="document-part2-img">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/player.svg" />
                            </div>
                            <div className="document-part2-title">
                                播放器 SDK
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">iOS 播放器 SDK</div>
                            <div className="document-part2-inner">开发文档</div>
                            <div className="document-part2-inner">API 文档</div>
                            <div className="document-part2-inner">SDK 下载</div>
                        </div>
                        <div className="document-part2-cell">
                            <div>Android 播放器 SDK</div>
                            <div>开发文档</div>
                            <div>API 文档</div>
                            <div>SDK 下载</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Document;