import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class FeatureList extends Component {

    render() {

        const { featureArray } = this.props ;

        let featureList = featureArray.map(
            function(data){

                return(
                    <div className="featureList-test" key={data.featureId}>
                        <div className="featureList-test-midbox">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                            <span>{data.featureName}</span>
                        </div>
                    </div>
                )
            }
        );
        return (
            <div className="rtc-part2-list">
                { featureList }
                <div className="float-clear"></div>
            </div>
        )
    }
}


export default FeatureList;