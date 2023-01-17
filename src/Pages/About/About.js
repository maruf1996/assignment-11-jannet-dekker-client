import React from 'react';
import useTitle from '../../hooks/useTitle';
import AdditionalLocations from '../../Shared/AdditionalLocations/AdditionalLocations';
import JannetAbout from '../../Shared/JannetAbout/JannetAbout';

const About = () => {
    useTitle('About')
    return (
        <div>
            <JannetAbout></JannetAbout>
            <AdditionalLocations></AdditionalLocations>
        </div>
    );
};

export default About;