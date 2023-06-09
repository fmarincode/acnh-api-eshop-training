import React from 'react';


const Fossil = (props) => {

    
    return (
        <>
            

                <div className='fossil'>
                    <img src={props.fossil.image_uri} alt='fossil'></img>
                    <h2>{props.fossil['file-name']}</h2>
                    <h3>Price : {props.fossil.price}🔔</h3>
                    <p className='museumPhrase'>{props.fossil['museum-phrase']}</p>
                    <button className='btnAddToCart' >Add to Cart</button>
                </div>
        </>
        
    );
};

export default Fossil;