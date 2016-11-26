import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { FEATURE } from '../../constants/pageData';
import  Doc  from '../public/doc';
import Faq from '../public/faq';

class Player extends Component {

    render() {

        let featureData = FEATURE;

        let featureList = featureData.map(
            function(data){

                return(
                    <div className="player-part3-line4-cell" key={data.featureId}>
                        <div className="player-part3-line4-title">
                            {data.featureName}
                        </div>
                        <div className="player-part3-line4-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                        </div>
                    </div>
                )
            }
        );

        return (
            <div className="player-outbox">
                <div className="player-part1">

                    <div className="player-part1-line1">

                        <div className="player-part1-line1-left">
                            <div>
                                <img className="player-part1-icon" src="http://ofji7fgcp.bkt.clouddn.com/playericon.svg" />
                            </div>
                            <div className="player-part1-line1-title">播放器 SDK</div>
                            <div className="player-part1-line1-inner">
                                精彩视野，<br/>
                                互动播放更加丰富。
                            </div>
                        </div>

                        <div  className="player-part1-line1-btn">
                            立即使用
                        </div>
                    </div>


                    <div className="player-part1-line2">
                        <img className="player-part1-img" src="http://ofji7fgcp.bkt.clouddn.com/player.png" />
                    </div>
                    <div className="player-part1-line3">
                        强大的播放解码 SDK，专注直播而不限直播。难以置<br/>
                        信的轻量体积，体验直播秒开的快感。
                    </div>
                </div>
                <div className="player-part2">

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/playercion2.svg" />
                        </div>
                        <div className="player-part2-cell-title">多用播放器</div>
                        <div className="player-part2-cell-inner">
                            不仅适用于直播格式还支持<br/>
                            更多主流媒体格式。
                        </div>
                    </div>

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/playercion2.svg" />
                        </div>
                        <div className="player-part2-cell-title">多用播放器</div>
                        <div className="player-part2-cell-inner">
                            不仅适用于直播格式还支持<br/>
                            更多主流媒体格式。
                        </div>
                    </div>

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/playercion2.svg" />
                        </div>
                        <div className="player-part2-cell-title">多用播放器</div>
                        <div className="player-part2-cell-inner">
                            不仅适用于直播格式还支持<br/>
                            更多主流媒体格式。
                        </div>
                    </div>
                </div>

                <div className="player-part3">
                    <div className="player-part3-line1">
                        <div className="player-part3-inner1">功能</div>
                        <div className="player-part3-inner2">完善的功能，多样的组合。</div>
                        <div className="player-part3-inner3">
                            Pili 的播放器 SDK 在最基础的拉流、解码、播放三步流程<br/>
                            中，不断优化和新增现有市场业务模型所需功能。
                        </div>
                    </div>

                    <div className="player-part3-line4">
                        {featureList}
                        <div className="float-clear"></div>
                        <div className="player-layer"></div>
                    </div>
                </div>

                <Faq/>
                <Doc/>
            </div>
        )
    }
}


export default Player;