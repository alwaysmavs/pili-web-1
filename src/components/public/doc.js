import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Doc extends Component {

    render() {
        const { docData } = this.props;

        return (
            <div className="doc-outbox">
                <div className="doc-outbox-line1">
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">更新日志</div>
                        <div className="doc-outbox-inner">
                            <a href={docData.releaseIosUrl}  target="_blank">
                                iOS 更新记录
                            </a>
                        </div>
                        <div className="doc-outbox-inner">
                            <a href={docData.releaseAndroidUrl}  target="_blank">
                                Android 更新记录
                            </a>
                        </div>
                    </div>
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">开发文档</div>
                        <div className="doc-outbox-inner">
                            <a href={docData.developerIosUrl}  target="_blank">
                                iOS 开发文档
                            </a>
                        </div>
                        <div className="doc-outbox-inner">
                            <a href={docData.developerAndroidUrl}  target="_blank">
                                Android 开发文档
                            </a>
                        </div>
                        <div className="doc-outbox-inner">
                            <a href={docData.developerServerUrl}  target="_blank">
                                {docData.serveSdkDocName}
                            </a>
                        </div>
                    </div>
                    <div className="doc-outbox-cell">
                        <div className="doc-outbox-title">下载地址</div>
                        <div className="doc-outbox-inner">
                            <a href={docData.iosDownLoadUrl}  target="_blank">
                                iOS 下载地址
                            </a>
                        </div>
                        <div className="doc-outbox-inner">
                            <a href={docData.AndroidDownloadUrl}  target="_blank">
                                Android 下载地址
                            </a>
                        </div>
                        <div className="doc-outbox-inner">
                            <a href={docData.ServerDownloadUrl}  target="_blank">
                                {docData.serveSdkDownloadName}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="doc-outbox-line2">
                    <div className="doc-outbox-line2-left">立即使用{docData.pageName} SDK</div>
                    <div className="doc-outbox-line2-right">
                        <a href="mailto:pili-product@qiniu.com">
                            <div className="doc-outbox-line2-btn">
                                联系我们
                            </div>
                        </a>
                        <Link to="/document" >
                            <div className="doc-outbox-line2-btn">
                                文档中心
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Doc;