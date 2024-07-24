import React from 'react';
import Banner from '../portal/src/components/banner/banner';

export default {
    title: 'Components/Banner',
    component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Seal_of_the_United_States_Space_Force.svg/1200px-Seal_of_the_United_States_Space_Force.svg.png',
        title: 'This is a banner title',
        description: 'This is a banner description',
        missionText: 'This is a mission text',
        visionText: 'This is a vision text',
        tagline: 'This is a tagline',
    }

    // Add necessary props here
};