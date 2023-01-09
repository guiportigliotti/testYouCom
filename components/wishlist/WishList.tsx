import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import setSessionStorage from '../../hooks/setSessionStorage';
import styles from './wishlist.module.css'


function AddWishList(props: {status: any, productId: number}): JSX.Element{
    const [icon, setIcon] = useState(props.status)
    const productId: string = props.productId.toString()
    const isntFavorite: string = 'naoEhFavorito'
    const isFavorite: string = 'ehFavorito'
    
    if(!icon){
        setSessionStorage(productId, isntFavorite)
    } else {
        setSessionStorage(productId, isFavorite)
    }

    return (
        <button onClick={() => setIcon(!icon)} className={styles.wishList}>
            {icon ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
    )
}

export default AddWishList


