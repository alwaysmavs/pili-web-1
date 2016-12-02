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
                                    我们认为，直播技术最终是一个根植于代码的问题，我们
                                    痴迷寻求优雅，可组合的抽象，能够提供可靠的，可扩展
                                    的，灵活的直播集成。因为我们消除了不必要的复杂性和
                                    无关的细节，你可以在短短的几小时内基于 Pili SDK 实
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
                            <div className="document-part2-title1">
                                播放器 SDK &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">iOS 播放器 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/plplayerkit/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://cocoadocs.org/docsets/PLPlayerKit/2.2.1/Classes/PLPlayer.html">
                                    API 文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="https://github.com/pili-engineering/PLPlayerKit">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">Android 播放器 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/pldroidplayer/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://pili-docs.cloudvdn.com/android-player/index.html">
                                    API 文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="https://github.com/pili-engineering/PLDroidPlayer">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="document-part2-line1">
                        <div className="document-part2-cell1">
                            <div className="document-part2-img">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/streaming.svg" />
                            </div>
                            <div className="document-part2-title1">
                                推流 SDK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">iOS 推流 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/plmediastreamingkit/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://cocoadocs.org/docsets/PLCameraStreamingKit/1.7.2/">
                                    API 文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="https://github.com/pili-engineering/PLMediaStreamingKit">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">Android 推流 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/androidpush/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://pili-docs.cloudvdn.com/android-streaming/index.html">
                                    API 文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="https://github.com/pili-engineering/PLDroidMediaStreaming">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="document-part2-line1">
                        <div className="document-part2-cell1">
                            <div className="document-part2-img">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/lianmai.svg" />
                            </div>
                            <div className="document-part2-title1">
                                连麦互动 SDK
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">iOS 连麦 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/plrtcios/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://obyikocz6.bkt.clouddn.com/%E4%B8%83%E7%89%9B%E8%BF%9E%E9%BA%A6SDK-11-16-iOS.zip">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">Android 连麦 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/plrtcdroid/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://obyikocz6.bkt.clouddn.com/%E4%B8%83%E7%89%9B%E8%BF%9E%E9%BA%A6SDK-11-16-Android-1.0.1.zip">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="document-part2-line1">
                        <div className="document-part2-cell1">

                        </div>
                        <div className="document-part2-cell">
                            <div className="document-part2-title">server 连麦 SDK</div>
                            <div className="document-part2-inner">
                                <a href="https://alwaysmavs.gitbooks.io/plserverrtc/content/">
                                    开发文档
                                </a>
                            </div>
                            <div className="document-part2-inner">
                                <a href="http://obyikocz6.bkt.clouddn.com/%E4%B8%83%E7%89%9B%E8%BF%9E%E9%BA%A6SDK-Server.zip">
                                    SDK 下载
                                </a>
                            </div>
                        </div>
                        <div className="document-part2-cell">

                        </div>
                    </div>



                </div>

                <div className="document-part3">

                    <a href="http://www.blog.beings.me"  target="_blank">
                        <div className="document-part3-cell">
                            <div className="document-part3-title">博客</div>
                            <div className="document-part3-inner">产品动态、直播知识</div>
                        </div>
                    </a>

                    <div className="document-part3-cutline"></div>

                    <a href="https://pili.kf5.com/hc/"  target="_blank">
                        <div className="document-part3-cell">
                            <div className="document-part3-title">常见问题</div>
                            <div className="document-part3-inner">关于 SDK 的常见问题</div>
                        </div>
                    </a>

                    <div className="document-part3-cutline"></div>

                    <a href="mailto:pili-product@qiniu.com">
                        <div className="document-part3-cell">
                            <div className="document-part3-title">联系我们</div>
                            <div className="document-part3-inner">产品使用、销售</div>
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}


export default Document;