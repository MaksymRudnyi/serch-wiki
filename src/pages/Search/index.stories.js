import React from 'react';
import moxios from 'moxios'

import Page from '.';
import { axiosInstance } from '../../fetch';

moxios.install(axiosInstance);

moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=50', {
  status: 200,
  response: ["elon",["Elon","Elon Musk","Elon Musk's Tesla Roadster","Elon University","Elongated Man","Elon Phoenix men's soccer","Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future","Elongated coin","Elonka Dunin","Elon University School of Law"],["","","","","","","","","",""],["https://en.wikipedia.org/wiki/Elon","https://en.wikipedia.org/wiki/Elon_Musk","https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster","https://en.wikipedia.org/wiki/Elon_University","https://en.wikipedia.org/wiki/Elongated_Man","https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_soccer","https://en.wikipedia.org/wiki/Elon_Musk:_Tesla,_SpaceX,_and_the_Quest_for_a_Fantastic_Future","https://en.wikipedia.org/wiki/Elongated_coin","https://en.wikipedia.org/wiki/Elonka_Dunin","https://en.wikipedia.org/wiki/Elon_University_School_of_Law"]]
});

export default {
  title: 'Pages/Search',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  location: {
    search: '?query=elon'
  }
};

export const NoData = Template.bind({});
NoData.args = {
  location: {
    search: '?query=sdfsdfsdfsdfsd'
  }
};