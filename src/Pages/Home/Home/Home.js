import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AdditionalLocations from '../../../Shared/AdditionalLocations/AdditionalLocations';
import JannetAbout from '../../../Shared/JannetAbout/JannetAbout';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <LimitServices></LimitServices>
            <JannetAbout></JannetAbout>
            <AdditionalLocations></AdditionalLocations>
        </div>
    );
};

export default Home;