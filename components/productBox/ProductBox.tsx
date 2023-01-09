import React, { useState } from 'react';
import RatingProduct from '../rating/RatingProduct';
import styles from './productBox.module.css';
import AddWishList from '../wishlist/WishList';
import Image from 'next/image'


function calcDiscount (category: string, price: number, discountPercentage: number): any[] {
    let calcados: string[] = [ 'mens-shoes', 'womens-shoes']
    let newPrice: number
    let finalPrice: any[] = []
    let newPriceTwo: number
    let hasDiscount: boolean = true

    if(calcados.includes(category)) {
        if(discountPercentage <= 15){
            newPrice = (price * discountPercentage) / 100
            newPriceTwo = price - newPrice
            finalPrice.push(newPriceTwo.toFixed(2))
            finalPrice.push(hasDiscount)
            return finalPrice
        } else{
            hasDiscount = false
            finalPrice.push('')
            finalPrice.push(hasDiscount)
            return finalPrice
        }
    } else {
        newPrice = (price * discountPercentage) / 100
        newPriceTwo = price - newPrice
        finalPrice.push(newPriceTwo.toFixed(2))
        finalPrice.push(hasDiscount)
        return finalPrice
    }
}

function ProductBox(props: any): JSX.Element {
    const priceDiscount: any[] = calcDiscount(props.product.category, props.product.price, props.product.discountPercentage)
    const [isHovering, setIsHovering] = useState(false)


    const showNewPrice = function (hasDiscount: any): JSX.Element {
        if(hasDiscount){
            return (
                <span className={styles.productPrice}>
                    <span className={`listPrice_${props.product.id} ${styles.discountable}`}>R$&nbsp;{priceDiscount[0]}</span>
                </span>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <div className={styles.polaroid}>
                <div className={styles.divFavoriteIcon}>
                    <AddWishList status={false} productId={props.product.id}/>
                </div>
                <Image 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    width="500"
                    height="290"
                    src={isHovering ? props.product.images[1] : props.product.images[0]} 
                    alt={props.product.description} 
                    className={styles.image} 
                />
                <div className={styles.productInfosSection}>
                    <div className={styles.productInfosSub}>
                        <div className={styles.productName}>
                            <a>{props.product.title.toLowerCase()}</a>
                        </div>
                        <div className={styles.productPricesSection}>
                            <div className={styles.productPricesSubSection}>
                                {
                                    showNewPrice(priceDiscount[1])
                                }
                                <br />
                                <span className={styles.productNewPrice}>
                                    <span className={`${styles.productSalePrice} ${priceDiscount[1] ? styles.oldPrice : ''}`}>R$&nbsp;{props.product.price},00</span>
                                </span>
                                <RatingProduct key={props.product} rating={props.product.rating}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductBox;