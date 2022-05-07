import React from 'react';
import Author from '../Author/Author';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Items from '../Items/Items';

const Home = () => {
          return (
                    <div>
                              <Banner></Banner>
                              <Items></Items>
                              <Author></Author>
                              <Extra></Extra>
                    </div>
          );
};

export default Home;