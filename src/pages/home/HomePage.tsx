import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import { HomePageStyle } from './HomePageStyle';
import { images } from '../../constants/images';
import { ItemCard, CardDetails } from '../../components';

const URL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

export const HomePage = () => {
    const [items, setItems] = React.useState<Array<any>>([]);
    const [viewDetails, setViewDetails] = React.useState<boolean>(false);
    const [details, setDetails] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const promise = await fetch(URL, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            });

            const payload = await promise.json();
            setItems((items) => items.concat(payload.restaurants));
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetails = React.useCallback(
        (details) => {
            setDetails(details);
            setViewDetails(!viewDetails);
        },
        [viewDetails]
    );

    const handleToggle = React.useCallback(() => {
        setViewDetails(!viewDetails);
    }, [viewDetails]);

    React.useEffect(() => {
        fetchItems();
    }, []);

    return (
        <HomePageStyle>
            <div className="app__header">
                <div className="app__header-left__nav">{viewDetails && <img onClick={handleToggle} src={images.backward} alt="back_icon" />}</div>
                <div className="app__header-title">
                    <p className="title">Lunch Tyme</p>
                </div>
                <div className="app__header-right__nav">
                    <img src={images.map} alt="map_icon" />
                </div>
            </div>
            <div className="app__content">
                {loading && (
                    <div className="load__wrapper">
                        <p>Loading....</p>
                    </div>
                )}
                {!loading &&
                    items.length > 0 &&
                    items.map((item) => {
                        const id = uuid();
                        const image = item.backgroundImageURL;
                        return (
                            <ItemCard key={id} handleView={() => handleViewDetails(item)} category={item.category} name={item.name} image={image} />
                        );
                    })}
                <AnimatePresence>{viewDetails && <CardDetails details={details} />}</AnimatePresence>
            </div>
        </HomePageStyle>
    );
};
