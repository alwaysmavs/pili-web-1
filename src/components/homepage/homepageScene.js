import React, { Component } from 'react';
import { render } from 'react-dom';
import { SCENES } from '../../constants/pageData';

class HomepageScene extends Component {
    render() {

        let scenesData = SCENES;

        let scenesDataList = scenesData.map(
            function(data){

                return(
                    <div className="scene-cell"  key={data.iconId}>
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
            }
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
                        <img className="scene-content-img" src="http://ofji7fgcp.bkt.clouddn.com/tonghua.png"/>
                    </div>
                    <div className="scene-content-arrow">
                        <img src="http://ofji7fgcp.bkt.clouddn.com/sceneHover.svg" />
                    </div>
                </div>
            </div>
        )
    }
}



export default HomepageScene;