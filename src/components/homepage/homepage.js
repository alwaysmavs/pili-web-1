import React, { Component } from 'react';
import { render } from 'react-dom';
import HomepageScene from './homepageScene';
import HomepageDIY from './homepageDIY';
import HomepageBg from './homepageBg';

class Homepage extends Component {
    componentDidMount(){
        var words = document.getElementsByClassName('word');
        var wordArray = [];
        var currentWord = 0;

        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

            currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
        }

        function animateLetterOut(cw, i) {
            setTimeout(function() {
                cw[i].className = 'letter out';
            }, i*80);
        }

        function animateLetterIn(nw, i) {
            setTimeout(function() {
                nw[i].className = 'letter in';
            }, 340+(i*80));
        }

        function splitLetters(word) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                letter.innerHTML = content.charAt(i);
                word.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
        }

        changeWord();
        setInterval(changeWord, 4000);


    }

    render() {
        return (
            <div className="homepage-box">
                <div className="homepage-part1">
                    <div className="homepage-part1-left">
                        <div className="homepage-part1-title">
                            <p className="homepage-part1-p">完美直播体验，</p>
                            <p className="homepage-part1-p">
                                <span className="word wisteria">快如闪电。</span>
                                <span className="word belize">简单开发。</span>
                                <span className="word pomegranate">进步如新。</span>
                                <span className="word green">倍受欢迎。</span>
                                <span className="word midnight"> 我们给予。</span>
                            </p>
                        </div>
                        <div className="homepage-part1-text">
                            Pili 是面向直播产品推出的性能效率极致优化的推流、播放器 SDK 组合，<br/>
                            让你的直播产品更快、更全、更稳定，带给你的用户惊喜直播体验。
                        </div>
                    </div>
                    <div className="homepage-part1-right">
                        <div className="homepage-part1-btn">
                            立即免费使用
                        </div>
                    </div>
                </div>

                <div className="homepage-part2">
                    <HomepageScene />
                </div>

                <div className="homepage-part3">
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">SDK 功能</div>
                        <div className="homepage-part3-inner">
                            我们使用了胶水层开发模式，自定<br/>
                            义的开放接口，可以不断容纳第三<br/>
                            方音视频效果。
                        </div>
                    </div>
                    <div className="cutline-1"></div>
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">开发文档</div>
                        <div className="homepage-part3-inner">
                            我们支持了 iOS 以及 Android 的<br/>
                            直播推流以及播放，更加便捷给予<br/>
                            更多端的不同版本。
                        </div>
                    </div>
                    <div className="cutline-1"></div>
                    <div className="homepage-part3-box">
                        <div className="homepage-part3-title">企业服务</div>
                        <div className="homepage-part3-inner">
                            为了让足够好用的直播惠及更多的<br/>
                            客户，应对不断变化的市场需求，<br/>
                            我们提供定制化的企业服务。
                        </div>
                    </div>
                </div>

                <div className="homepage-part4">
                    <HomepageDIY />
                </div>

                <div className="homepage-part5">
                    <div className="homepage-part5-title">我们每天处理亿万直播生成与播放</div>
                    <div className="homepage-part5-inner">
                        <div className="homepage-part5-box">
                            <div className="homepage-part5-box1">
                                <span className="homepage-part5-num">20</span>
                                <span>多名</span>
                            </div>
                            <div className="homepage-part5-box2">
                                音视频领域顶尖工程师
                            </div>
                        </div>

                        <div className="homepage-part5-box">
                            <div className="homepage-part5-box1">
                                <span className="homepage-part5-num">1100</span>
                                <span>多天</span>
                            </div>
                            <div className="homepage-part5-box2">
                                不懈努力与专研
                            </div>
                        </div>

                        <div className="homepage-part5-box">
                            <div className="homepage-part5-box1">
                                <span className="homepage-part5-num">103</span>
                                <span>项</span>
                            </div>
                            <div className="homepage-part5-box2">
                                领先功能与改进
                            </div>
                        </div>

                        <div className="homepage-part5-box">
                            <div className="homepage-part5-box1">
                                <span className="homepage-part5-num">168</span>
                                <span>百万</span>
                            </div>
                            <div className="homepage-part5-box2">
                                每天亿万的直播发起与观看
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homepage-part6">
                    <HomepageBg />
                </div>

            </div>
        )
    }
}



export default Homepage;