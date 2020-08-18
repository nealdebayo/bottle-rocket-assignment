import React from 'react';
import { motion } from 'framer-motion';
import { GoogleMap } from './GoogleMap';
import styled from 'styled-components';

const CardDetailsStyle = styled(motion.div)`
    @media (min-width: 900px) {
        position: fixed;
        top: 7%;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: #ffffff;
        z-index: 100;
    }

    @media (max-width: 600px) {
        position: fixed;
        top: 10.5%;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: #ffffff;
        z-index: 100;
    }

    @media (min-width: 600px) {
        position: fixed;
        top: 8%;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        background-color: #ffffff;
        z-index: 100;
    }

    .map__area {
        height: 180px;
        background-color: #ffffff;
    }

    .card__content {
        padding: 0 12px;
        background-color: #34b379;
        color: #ffffff;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            margin: 0;
            color: #ffffff;
            font-size: 16px;
        }

        span {
            display: block;
            font-size: 12px;
            color: #ffffff;
            margin-top: 6px;
        }
    }

    .details {
        padding: 0 12px;
        background-color: #ffffff;

        .p1 {
            margin-top: 16px !important;
            font-size: 16px;
            color: #000;
        }
        .p2 {
            margin-top: 26px !important;
            font-size: 16px;
            color: #000;
        }
        .p3 {
            margin-top: 26px !important;
            font-size: 14px;
            color: #000;
        }
    }
`;

type ItemProps = {
    details: any;
};

export const CardDetails: React.FC<ItemProps> = ({ details }) => {
    return (
        <CardDetailsStyle initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="map__area">
                <GoogleMap details={details} />
            </div>
            <div className="card__content">
                <p>{details && details.name}</p>
                <span>{details && details.category}</span>
            </div>
            <div className="details">
                <p className="p1">
                    {details && details.location.formattedAddress[0]} {details && details.location.formattedAddress[1]}
                </p>
                <p className="p2">{details && details.contact && details.contact.formattedPhone}</p>
                {details && details.contact && details.contact.twitter && (
                    <p className="p3">
                        {'@'}
                        {details.contact.twitter}
                    </p>
                )}
            </div>
        </CardDetailsStyle>
    );
};
