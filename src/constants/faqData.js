export const RTC_FAQ = {
    pageName:"连麦",
    pageFaq:[
        {
            faqId: 1,
            faqTitle:"普通观众端是否需要专用的播放器？",
            faqInner:"不需要，任何支持 RTMP/HLS 协议的媒体播放器均可播放。",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 2,
            faqTitle:"点播回放是否也能看到连麦画面？",
            faqInner:"是的，连麦 SDK 是在推流 SDK 基础上增加了",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 3,
            faqTitle:"连麦对讲延时多大 ？",
            faqInner:"正常网络条件下，连麦对讲延时在 500ms~1s 以内",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 4,
            faqTitle:"观众端看到的合流画面的延时多大？",
            faqInner:"观众端看到的合流画面延时，在 2~5s 左右",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 5,
            faqTitle:"最大支持多少路同时连麦和合流？",
            faqInner:"理论上只要带宽和性能足够，没有限制的，推荐在 8 路以下。 ",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 6,
            faqTitle:"连麦 SDK 是否支持硬编?",
            faqInner:"支持硬编，且可以自由软硬编切换。",
            faqUrl:"http://www.baidu.com"
        }
    ]
};

export const PUSH_FAQ = {
    pageName:"推流",
    pageFaq:[
        {
            faqId: 1,
            faqTitle:"如何开始推流",
            faqInner:"推流前需要将业务服务器返回的 streamJSON 传入才可以推流",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 2,
            faqTitle:"iOS 水印位置确定",
            faqInner:"水印是相对于采集到的画幅来的，跟 sessionPreset 有关，如果 sessionPreset 设置为 960*540 的话...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 3,
            faqTitle:"iOS 摄像头横竖屏转换",
            faqInner:"建议 iOS 摄像头横竖屏最好一次设置好再进入。",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 4,
            faqTitle:"Android 关于推流 view 的尺寸",
            faqInner:"目前推流 sdk view 的尺寸是根据大部分的 android 手机屏幕比例来定的，支持 16:9 和 4:3 两种比例，通过...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 5,
            faqTitle:"Android 重连机制",
            faqInner:"在网络断开、sendTimeOut 后没有发出数据、网络链接被服务端断开等网络异常后，STATE.DISCONNECTED 消息会被回调...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 5,
            faqTitle:"推流预览前可以不传入 json 吗？",
            faqInner:"不需要，可以传入 null，然后后面再传入 streamJson。",
            faqUrl:"http://www.baidu.com"
        }
    ]
};

export const PLAYER_FAQ = {
    pageName:"播放器",
    pageFaq:[
        {
            faqId: 1,
            faqTitle:"Android 如何处理重连",
            faqInner:"在 onCompletion 回调后，查询业务服务器，获知直播是否结束，如果已经结束，则关闭播放器，清理资源；如果直播没有结束...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 2,
            faqTitle:"Android 如何设置全屏？",
            faqInner:"setDisplayAspectRatio(ASPECT_RATIO_PAVED_PARENT)，这个接口设置这个可以全屏。",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 3,
            faqTitle:"Android 播放器回放重连不重头开始播放设置",
            faqInner:"目前发现 android 播放器播放回放的时候断网重连的时候会重头播放，当前给出的建议是，手动记录播放位置...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 4,
            faqTitle:"iOS 播放器PLPlayerKit设置音频后台播放",
            faqInner:"在当前类中设置一下AVAudioSession的category，这个可以是AVAudioSessionCategoryPlayback 具体如下...",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 5,
            faqTitle:"设置缓冲需要注意什么",
            faqInner:"需要注意的是，增大缓冲有机会降低卡顿，但是会增大延时。",
            faqUrl:"http://www.baidu.com"
        },
        {
            faqId: 6,
            faqTitle:"用 Pili 的播放器就可以首屏秒开么",
            faqInner:"是的，我们在播放器层面和网络层面做了很多的优化。只要集成播放器 SDK 就可以体验首屏秒开效果。",
            faqUrl:"http://www.baidu.com"
        }
    ]
};