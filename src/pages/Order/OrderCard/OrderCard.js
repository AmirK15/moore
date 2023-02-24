import React, {useContext} from 'react';
import {CustomContext} from "../../../Context";
import cross from '../../../assets/images/delete.svg'

const OrderCard = ({ id, image, title, article, price, sale, count }) => {

    const {minusProduct, plusProduct, deleteProduct} = useContext(CustomContext)

    let pricing = price * count
    let pricingSale = sale * count

    return (
        <ul className="order__list">
            <li className="order__item">
                <img src={image} alt={title}/>
            </li>
            <li className="order__item">
                <p className="order__text">
                    {title}
                </p>
            </li>
            <li className="order__item">
                <p className="order__text">
                    {article}
                </p>
            </li>
            <li className="order__item">
                <div className="order__counter">
                    <button onClick={() => minusProduct(id)} disabled={count === 1} type="button" className="order__counter-btn">-</button>
                    <span className="order__count">{count}</span>
                    <button onClick={() => plusProduct(id)} type="button" className="order__counter-btn">+</button>
                </div>
            </li>
            <li className="order__item">
                <p className="order__price">
                    {sale ?
                        <>
                            <span style={{color: '#E11E26', marginRight: "4px"}}>{pricing}c</span>
                            <span className="order__price-sale">{pricingSale}c</span>
                        </>
                        : <span>{pricing}c</span>
                    }
                </p>
            </li>
            <li className="order__cross">
                <img onClick={() => deleteProduct(id)} src={cross} alt="Delete"/>
            </li>
        </ul>
    );
};

export default OrderCard;