import styles from '../components/productBox/productBox.module.css';
import ProductBox from '../components/productBox/ProductBox';
import React from 'react';

export async function getStaticProps(): Promise<{ props: { dataJson: any; }; revalidate: number; }>{
  const data: Response = await fetch('https://dummyjson.com/products?limit=100')
  const dataJson: any = await data.json()

  return {
    props: { dataJson },
    revalidate: 30,
  }
}

function validateProduct (dataJson: any): any[] {
  let categorys: string[] = ['sunglasses', 'womens-jewellery', 'womens-bags', 
  'womens-watches', 'mens-watches', 'mens-shoes',
  'mens-shirts', 'womens-shoes', 'womens-dresses',
  'tops']
  var products: any[] = dataJson.products
  let validProducts: any[] = []

  for(let i: number = 0; i < products.length; i ++){
    if(categorys.includes(products[i].category) && products[i].stock > 9){
      validProducts.push(products[i])
    }
  }
  return validProducts
}

export default function Home({ dataJson }: any): JSX.Element {
  let products: any[] = validateProduct(dataJson)
  let productBox: any[] = []
  products.forEach(element => {
    productBox.push(<ProductBox key={element.id} product={element} />)
   })

  return (
    <>
      <div className={styles.container}>
        {
           productBox
        }
      </div>
    </>
  )
}
