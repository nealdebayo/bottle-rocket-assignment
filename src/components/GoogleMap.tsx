import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Marker } from './Marker';

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
`;

interface AppProps {
    details: any;
}

export const GoogleMap: React.FC<AppProps> = ({ details }) => {
    const [center, setCenter] = React.useState({ lat: 32.950787, lng: -96.821118 });
    const [zoom, setZoom] = React.useState(10);

    const getMapOptions = (maps: any) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: false,
            streetViewControl: false,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    return (
        <Wrapper>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDsXMwKdfyrcPczBaLD8a8ED_ESEwF_r90',
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <Marker
                    name={details && details.location && details.location.address}
                    lat={details && details.location.lat}
                    lng={details && details.location.lng}
                />
            </GoogleMapReact>
        </Wrapper>
    );
};
