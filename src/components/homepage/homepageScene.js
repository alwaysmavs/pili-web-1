import React, { Component } from 'react';
import { render } from 'react-dom';
import { SCENES } from '../../constants/pageData';

class HomepageScene extends Component {

    changeImage(id){

        switch (id){
            case 1:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E7%A4%BE%E4%BA%A4.png";
                };
                break;
            case 2:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E6%95%99%E8%82%B2.png" };
                break;
            case 3:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E5%8C%BB%E7%96%97.png" };
                break;
            case 4:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E6%B8%B8%E6%88%8F.png" };
                break;
            case 5:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E5%AE%A2%E6%9C%8D.png" };
                break;
            case 6:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E7%94%B5%E5%95%86.png" };
                break;
            case 7:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D.png" };
                break;
            case 8:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/FM.png" };
                break;
        }
    };

    render() {

        let scenesData = SCENES;

        let scenesDataList = scenesData.map(
            function(data){

                return(
                    <div className="scene-cell"  key={data.iconId} onClick={this.changeImage.bind(this,data.iconId)}>
                        <div className="scene-cell-midbox">
                            <div className="scene-icon">
                                <img className="scene-icon-img" src={data.iconImg} />
                            </div>
                            <div className="scene-title">
                                {data.name}
                            </div>
                        </div>
                    </div>
                )
            },this
        );

        return (
            <div className="homepage-scene">
                <div className="scene-nav">
                    {scenesDataList}
                </div>
                <div className="scene-content">

                    <div className="scene-content-box">
                        <img ref="sceneImg"
                             className="scene-content-img"
                             src="http://ofji7fgcp.bkt.clouddn.com/tonghua.png"/>
                    </div>

                </div>
            </div>
        )
    }
}



export default HomepageScene;