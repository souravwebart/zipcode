// App.js
import React from 'react';
import PostalCodeForm from "./zipcodeForm";

const Main = () => {

    return (
        <div className="main" style={{ minHeight: '100vh', maxWidth: '1190px', margin: 'auto', verticalAlign: 'middle' }}>
            <div style={{ textAlign: 'center', padding: '80px 0px' }}>
                <h1 style={{ color: '#fff', fontFamily: 'poppins', fontWeight: 800, fontSize: '32px', textTransform: 'uppercase' }}>Zip Code Information App - React</h1>
                <PostalCodeForm />
            </div>

        </div>
    );
};

export default Main;
