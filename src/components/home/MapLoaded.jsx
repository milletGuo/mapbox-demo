import React from 'react';
import { Store } from './store';

let mapControl;
export default class Maploaded extends React.Component {

    componentWillMount() {
        mapControl = Store.mapControl();
    }

    render() {
        return (
            <div className="maploaded-container">
                
            </div>
        )
    }
}