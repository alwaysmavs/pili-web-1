import React, { Component } from 'react';
import { render } from 'react-dom';

class Feature extends Component {
    render() {
        return (
            <div className="feature-outbox">

                <div className="feature-line">
                    <div className="feature-cell">
                        <div className="feature-title">混音</div>
                        <div className="feature-inner">
                            给主播端声音加入<br/>
                            种滤镜效果
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">滤镜</div>
                        <div className="feature-inner">
                            主播端画面加入各<br/>
                            各种特效
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">弹幕</div>
                        <div className="feature-inner">
                            给主播端声音加入<br/>
                            示文字表情弹幕
                        </div>
                    </div>

                    <div className="feature-cell2">
                        <div className="feature-title">IM</div>
                        <div className="feature-inner">
                            添加实时对话功能，主播和观<br/>
                            众，观众和观众的交流
                        </div>
                    </div>
                </div>

                <div className="feature-line">
                    <div className="feature-cell">
                        <div className="feature-title">美颜</div>
                        <div className="feature-inner">
                            让主播皮肤，妆容<br/>
                            更具吸引
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">录屏</div>
                        <div className="feature-inner">
                            给手机录屏实时展<br/>
                            现操作画面
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">连麦</div>
                        <div className="feature-inner">
                            主播和观众可以实<br/>
                            时连麦
                        </div>
                    </div>

                    <div className="feature-cell2">
                        <div className="feature-title">点亮（点赞）</div>
                        <div className="feature-inner">
                            点赞功能，实时显示细腻有趣<br/>
                            的动画效果
                        </div>
                    </div>
                </div>

                <div className="feature-line">

                    <div className="feature-cell">
                        <div className="feature-title">评论</div>
                        <div className="feature-inner">
                            观众可以在直播中<br/>
                            发表评论
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">投票</div>
                        <div className="feature-inner">
                            主播发起投票，实<br/>
                            时统计
                        </div>
                    </div>

                    <div className="feature-cell">
                        <div className="feature-title">纯音频</div>
                        <div className="feature-inner">
                            只采集纯音频信息，<br/>
                            支持 FM 直播
                        </div>
                    </div>

                    <div className="feature-cell2">
                        <div className="feature-title">实时字幕</div>
                        <div className="feature-inner">
                            实时翻译主播端声<br/>
                            音文字，甚至翻译
                        </div>
                    </div>

                </div>

                <div className="feature-line">
                    <div className="feature-cell">
                        <div className="feature-title">涂鸦</div>
                        <div className="feature-inner">
                            主播可在直播画面<br/>
                            种滤镜效果
                        </div>
                    </div>


                    <div className="feature-cell">
                        <div className="feature-title">动态脸萌</div>
                        <div className="feature-inner">
                            追踪主播脸部表<br/>
                            情，添加有趣画面<br/>
                            效果
                        </div>
                    </div>

                    <div className="feature-cell"></div>

                    <div className="feature-cell2"></div>

                </div>

            </div>
        )
    }
}


export default Feature;