import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { PLAYER_DOC } from '../../constants/pageData';

class Doc extends Component {


    render() {
        let Doc = PLAYER_DOC;
        return (
            <div className="doc-outbox">
                <div className="doc-outbox-line1">
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">更新日志</div>
                        <div className="doc-outbox-inner">{Doc.playerReleaseIos}</div>
                        <div className="doc-outbox-inner">{Doc.playerReleaseAndroid}</div>
                    </div>
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">快速开始</div>
                        <div className="doc-outbox-inner">{Doc.playerBeginIos}</div>
                        <div className="doc-outbox-inner">{Doc.playerBeginAndroid}</div>
                    </div>
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">资源下载</div>
                        <div className="doc-outbox-inner">{Doc.playerDocIosDemo}</div>
                        <div className="doc-outbox-inner">{Doc.playerDocAndroidDemo}</div>
                        <div className="doc-outbox-inner">{Doc.playerDocDev}</div>
                    </div>
                </div>
                <div className="doc-outbox-line2">
                    <div className="doc-outbox-line2-left">立即使用播放器 SDK</div>
                    <div className="doc-outbox-line2-right">
                        <div className="doc-outbox-line2-btn">联系我们</div>
                        <div className="doc-outbox-line2-btn">开发文档</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Doc;