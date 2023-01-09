import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ratingProduct.module.css';

function makeRating (defaultRating: number, maxRating: any[]): JSX.Element {
    return (
        <>
            <div className={styles.ratingBarStyle}> 
                {maxRating.map((item: number) => { 
                    return ( 
                        <Image 
                            key={item}
                            width='20'
                            height='20'
                            src={item <= defaultRating
                                ? 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0a36550016d049b77b62276c54366967'
                                : 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0f8d70d931c521961657dcfbf1d338c1'
                                }
                            alt='estrela'
                        /> 
                    ); 
                })}
            </div>
        </>
    );
}

function RatingProduct (props: { rating: number }): JSX.Element{
    const [defaultRating, setDefaultRating] = useState(props.rating);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    return (
        <>
            <div className={`${styles.marginTop} ${styles.container}`}>
                <span>Avaliação</span>
                <div className={styles.container}> 
                    {makeRating(defaultRating, maxRating)}  
                </div> 
            </div> 
        </>
    );
}

export default RatingProduct;