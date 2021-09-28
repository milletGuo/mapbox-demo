import React from 'react';
import MapControl from '../../untils/mapControl';
import { Store } from './store';

export default class Map extends React.Component {
    componentDidMount() {
        new MapControl(this.domRef, {}, (mapControl) => {
            Store.mapControl(mapControl);
            this.props.onLoaded();
        })
    }

    render() {
        return (
            <div className="map-container" ref={ref => this.domRef = ref}></div>
        )
    }
}