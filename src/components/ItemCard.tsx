import React from 'react';
import styled from 'styled-components';
import { images } from '../constants/images';

const ItemCardStyles = styled.div`
    height: 150px;
    margin: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;

    p {
        margin: 0;
        color: #ffffff;
        font-size: 16px;
    }

    span {
        display: block;
        font-size: 12px;
        color: #ffffff;
    }
`;

type ItemProps = {
    name: string;
    image: string;
    category: string;
    handleView: () => void;
};

export const ItemCard: React.FC<ItemProps> = ({ image, name, category, handleView }) => {
    return (
        <ItemCardStyles className="container" onClick={handleView}>
            <div>
                <p>{name}</p>
                <span>{category}</span>
            </div>
            <style>{`
                .container {
                    background-image: url(${images.background}), url(${image});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
        </ItemCardStyles>
    );
};
