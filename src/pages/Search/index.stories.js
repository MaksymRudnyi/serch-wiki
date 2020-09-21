import React from 'react';
import moxios from 'moxios'

import Page from '.';

moxios.install();

moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=50', {
  status: 200,
  response: ["elon",["Elon","Elon Musk","Elon Musk's Tesla Roadster","Elon University","Elongated Man","Elon Phoenix men's soccer","Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future","Elongated coin","Elonka Dunin","Elon University School of Law","Eloni Vunakece","Elongation factor","Elongated tortoise","Elongatoolithus","Elonex ONE","Elon Rutberg","Elon Ganor","Elonex ONEt","Elonis v. United States","Elongated triangular tiling","Elon, North Carolina","Elongation factor 2 kinase","Elona (video game)","Elongated labia","Elon Moreh","Elon Gold","Elon Phoenix","Elon Lindenstrauss","Elonkerjuu","Elonzo","Elon Lages Lima","Elongated square gyrobicupola","Elongation factor P","Elongation (astronomy)","Elongatoolithidae","Elongate surgeonfish","Elon Phoenix men's basketball","Elonex ebook","Elon Galusha","Elon Phoenix football","Elongated soft palate","Elongated square bipyramid","Elon Phoenix women's basketball","Elon Huntington Hooker","Elongation factor for RNA polymerase II 2","Elongate twig ant","Elon J. Farnsworth","Elongator complex protein 5","Elon Peace Plan","Elon James White"],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["https://en.wikipedia.org/wiki/Elon","https://en.wikipedia.org/wiki/Elon_Musk","https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster","https://en.wikipedia.org/wiki/Elon_University","https://en.wikipedia.org/wiki/Elongated_Man","https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_soccer","https://en.wikipedia.org/wiki/Elon_Musk:_Tesla,_SpaceX,_and_the_Quest_for_a_Fantastic_Future","https://en.wikipedia.org/wiki/Elongated_coin","https://en.wikipedia.org/wiki/Elonka_Dunin","https://en.wikipedia.org/wiki/Elon_University_School_of_Law","https://en.wikipedia.org/wiki/Eloni_Vunakece","https://en.wikipedia.org/wiki/Elongation_factor","https://en.wikipedia.org/wiki/Elongated_tortoise","https://en.wikipedia.org/wiki/Elongatoolithus","https://en.wikipedia.org/wiki/Elonex_ONE","https://en.wikipedia.org/wiki/Elon_Rutberg","https://en.wikipedia.org/wiki/Elon_Ganor","https://en.wikipedia.org/wiki/Elonex_ONEt","https://en.wikipedia.org/wiki/Elonis_v._United_States","https://en.wikipedia.org/wiki/Elongated_triangular_tiling","https://en.wikipedia.org/wiki/Elon,_North_Carolina","https://en.wikipedia.org/wiki/Elongation_factor_2_kinase","https://en.wikipedia.org/wiki/Elona_(video_game)","https://en.wikipedia.org/wiki/Elongated_labia","https://en.wikipedia.org/wiki/Elon_Moreh","https://en.wikipedia.org/wiki/Elon_Gold","https://en.wikipedia.org/wiki/Elon_Phoenix","https://en.wikipedia.org/wiki/Elon_Lindenstrauss","https://en.wikipedia.org/wiki/Elonkerjuu","https://en.wikipedia.org/wiki/Elonzo","https://en.wikipedia.org/wiki/Elon_Lages_Lima","https://en.wikipedia.org/wiki/Elongated_square_gyrobicupola","https://en.wikipedia.org/wiki/Elongation_factor_P","https://en.wikipedia.org/wiki/Elongation_(astronomy)","https://en.wikipedia.org/wiki/Elongatoolithidae","https://en.wikipedia.org/wiki/Elongate_surgeonfish","https://en.wikipedia.org/wiki/Elon_Phoenix_men%27s_basketball","https://en.wikipedia.org/wiki/Elonex_ebook","https://en.wikipedia.org/wiki/Elon_Galusha","https://en.wikipedia.org/wiki/Elon_Phoenix_football","https://en.wikipedia.org/wiki/Elongated_soft_palate","https://en.wikipedia.org/wiki/Elongated_square_bipyramid","https://en.wikipedia.org/wiki/Elon_Phoenix_women%27s_basketball","https://en.wikipedia.org/wiki/Elon_Huntington_Hooker","https://en.wikipedia.org/wiki/Elongation_factor_for_RNA_polymerase_II_2","https://en.wikipedia.org/wiki/Elongate_twig_ant","https://en.wikipedia.org/wiki/Elon_J._Farnsworth","https://en.wikipedia.org/wiki/Elongator_complex_protein_5","https://en.wikipedia.org/wiki/Elon_Peace_Plan","https://en.wikipedia.org/wiki/Elon_James_White"]]
});

moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=sdfsdfsdfsdfsd&limit=50', {
  status: 200,
  response: ["sdfsdfsdfsdfsd",[],[],[]]
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