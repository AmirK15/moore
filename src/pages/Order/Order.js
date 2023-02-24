import React, {useContext, useState} from 'react';
import {CustomContext} from "../../Context";
import OrderCard from "./OrderCard/OrderCard";
import dropdown from '../../assets/images/order.svg'

const Order = () => {

    const {products, setProducts} = useContext(CustomContext)
    const [drop, setDrop] = useState(true)

    let total = products.reduce((acc, rec) => {
        return acc + rec.count * rec.price
    }, 0)

    return (
        <section className="order">
            <div className="container">
                <p className="order__crumbs">Главная / Корзина / Оформление заказа</p>
                <h2 className="order__title">Оформление заказа</h2>
                <div className="order__content">
                    <div className="order__left">
                        <div onClick={() => setDrop(!drop)} className="order__basket">
                            Корзина ({products.length})
                            <img className={drop ? "order__drop" : ''} src={dropdown} alt="Drop"/>
                        </div>
                        {
                            drop && <div className="order__row">
                                <ul className="order__products">
                                    <li className="order__item">Фото</li>
                                    <li className="order__item">Название</li>
                                    <li className="order__item">Артикул</li>
                                    <li className="order__item">Кол-во</li>
                                    <li className="order__item">Цена</li>
                                </ul>
                                {
                                    products.length ? products.map((item, idx) => (
                                        <OrderCard key={idx} id={item.id} image={item.image} title={item.title} article={item.article} price={item.price} sale={item.priceSale} count={item.count}/>
                                    )) : <p className="order__none">Ваша корзина пуста(</p>
                                }
                            </div>
                        }
                    </div>
                    <div className="order__confirm">
                        <h3 className="order__confirm-title">Стоимость заказа</h3>
                        <div className="order__confirm-info">
                            <p>Товары({products.length})</p>
                            <p className="order__confirm-text">
                                {total}c
                            </p>
                        </div>
                        <div className="order__confirm-info">
                            <p>Доставка</p>
                            <p className="order__confirm-text">Бесплатно</p>
                        </div>
                        <div className="order__confirm-info">
                            <p>Итого</p>
                            <p>
                                {total}с
                            </p>
                        </div>
                        <button className="order__confirm-btn">
                            Подтвердить заказ
                        </button>
                        <p className="order__confirm-conditions">Подтверждая заказ, я принимаю условия <br/> <a href="#">пользовательского соглашения</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;