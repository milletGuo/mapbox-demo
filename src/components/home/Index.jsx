import React from 'react';
import Map from './Map';
import MapLoaded from './MapLoaded';
import './home.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        }
    }

    onLoaded = () => {
        this.setState({ isLoaded: true });
    }

    render() {
        const { isLoaded } = this.state;

        return (
            <div className="home">
                <Map onLoaded={this.onLoaded} />
                {isLoaded ? <MapLoaded /> : ""}
            </div>
        )
    }
}