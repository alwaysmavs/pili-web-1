import React, { Component } from 'react';
import { render } from 'react-dom';
import { SCENES } from '../../constants/pageData';

class HomepageScene extends Component {

    changeImage(id){

        switch (id){
            case 1:
                {   this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/tonghua.png";
                    this.refs.sceneLeft.data ++
                };
                break;
            case 2:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 3:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 4:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 5:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 6:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 7:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
                break;
            case 8:
                { this.refs.sceneImg.src = "http://ofji7fgcp.bkt.clouddn.com/Nexus.png" };
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
                    <div className="scene-content-arrow">

                    </div>
                    <div className="scene-content-box">
                        <img ref="sceneImg"
                             className="scene-content-img"
                             src="http://ofji7fgcp.bkt.clouddn.com/tonghua.png"/>
                    </div>
                    <div className="scene-content-arrow">
                    </div>
                </div>
            </div>
        )
    }
}



export default HomepageScene;