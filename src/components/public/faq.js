import React, { Component } from 'react';
import { render } from 'react-dom';

class Faq extends Component {

    render() {

        const { faqData } = this.props;

        let faqArray = faqData.pageFaq;

        let faqList = faqArray.map(
            function (data) {
                return (
                    <a href={data.faqUrl}  target="_blank">
                        <div className="faq-question" key={data.faqId}>
                            <div className="faq-question-title">
                                {data.faqTitle}
                            </div>
                            <div className="faq-question-inner">
                                {data.faqInner}
                            </div>
                        </div>
                    </a>
                )
            }
        );

        return (
            <div className="faq">
                <div className="faq-left">
                    <div className="faq-left-midbox">
                        <div className="faq-title">常见问题</div>
                        <div className="faq-btn">关于{faqData.pageName}更多问题</div>
                    </div>
                </div>

                {faqList}

                <div className="float-clear"></div>
            </div>
        )
    }
}


export default Faq;