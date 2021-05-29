import React from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Side from '../components/Side.js';

function Home() {
    return (
        <>
            <Header />
            <div className="bg-gray-50 width-full mx-auto pt-12">
            <div className="w-9/12 flex justify-between flex-row mx-auto ">
                <Main />
                <Side />
            </div>
            </div>
        </>
    );
  }
  
  export default Home;
  