import React, {useContext, useState} from 'react';
import {CustomContext} from "../../Context";
import OrderCard from "./OrderCard/OrderCard";
import InputMask from 'react-input-mask';
import dropdown from '../../assets/images/order.svg'
import {MdDone} from "react-icons/md";

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
                                        <OrderCard key={idx} id={item.id} image={item.image} title={item.title}
                                                   article={item.article} price={item.price} sale={item.priceSale}
                                                   count={item.count}/>
                                    )) : <p className="order__none">Ваша корзина пуста(</p>
                                }
                            </div>
                        }
                        <form className="order__form">
                            <h4 className="order__making-title">Оформление заказа</h4>
                            <div className="order__form-content">
                                <label className="order__form-label">
                                    <p className="order__form-sub">Имя</p>
                                    <input className="order__form-input" type="text" placeholder="Татьяна"/>
                                </label>
                                <label className="order__form-label">
                                    <p className="order__form-sub">Фамилия</p>
                                    <input className="order__form-input" type="text" placeholder="Смолянинова"/>
                                </label>
                                <div className="order__form-block">
                                    <label className="order__form-label order__form-label-max">
                                        <p className="order__form-sub">Телефон</p>
                                        <InputMask className="order__form-input" mask={'+\\9\\96(999)99-99-99'}
                                                   placeholder="+996(555)50-50-50" type="tel"/>
                                    </label>
                                    <label className="order__form-label order__form-label-min">
                                        <p className="order__form-sub">Доб.</p>
                                        <input className="order__form-input" min={0} type="number" placeholder="0"/>
                                    </label>
                                </div>
                                <label className="order__form-label">
                                    <p className="order__form-sub">E-mail</p>
                                    <input className="order__form-input" type="email" placeholder="Tatyana@gmail.com"/>
                                </label>
                                <label className="order__form-label">
                                    <p className="order__form-sub">Доп телефон или whatsapp</p>
                                    <InputMask className="order__form-input" mask={'+\\9\\96(999)99-99-99'}
                                               placeholder="+996(555)50-50-50" type="tel"/>
                                </label>
                            </div>
                            <div className="order__form-about">
                                <h4 className="order__making-title">Я</h4>
                                <div className="order__form-about-content">
                                    <label className="order__form-labels">
                                        <input type="radio"/>
                                        <span>Физическое лицо</span>
                                    </label>
                                    <label className="order__form-labels">
                                        <input type="radio"/>
                                        <span>Юридическое лицо</span>
                                    </label>
                                </div>
                            </div>
                            <div className="order__form-delivery">
                                <h4 className="order__making-title">Доставка</h4>
                                <div className="order__form-delivery-content">
                                    <p className="order__form-text" style={{marginBottom: '20px'}}>Способ доставки</p>
                                    <div className="order__form-about-content">
                                        <label className="order__form-labels">
                                            <input type="radio" name="order"/>
                                            <div className="order__form-labels--box">
                                                <MdDone size={15} fill="#fff"/>
                                            </div>
                                            <span>Самовывоз</span>
                                            <p>
                                                режим работы магазина
                                                <span><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#5178DC"/></svg></span>
                                            </p>
                                        </label>
                                        <label className="order__form-labels">
                                            <input type="radio" name="order"/>
                                            <div className="order__form-labels--box">
                                                <MdDone size={15} fill="#fff"/>
                                            </div>
                                            <span>Курьерская доставка</span>
                                            <p>
                                                режим работы магазина
                                                <span><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#5178DC"/></svg></span>
                                            </p>
                                        </label>
                                    </div>
                                    <p className="order__form-text" style={{margin: '30px 0'}}>Адрес доставки</p>
                                    <div className="order__form-content">
                                        <label className="order__form-label">
                                            <p className="order__form-sub">Страна</p>
                                            <input className="order__form-input" type="text" placeholder="Кыргызстан"/>
                                        </label>
                                        <label className="order__form-label">
                                            <p className="order__form-sub">Город</p>
                                            <input className="order__form-input" type="text" placeholder="Бишкек"/>
                                        </label>
                                        <label className="order__form-label">
                                            <p className="order__form-sub">Улица</p>
                                            <input className="order__form-input" type="text" placeholder="Чуй 345"/>
                                        </label>
                                        <label className="order__form-label">
                                            <p className="order__form-sub">Доп телефон или whatsapp</p>
                                            <input className="order__form-input" type="number" placeholder="53"/>
                                        </label>
                                        <label className="order__form-label">
                                            <p className="order__form-sub">Дом</p>
                                            <input className="order__form-input" type="email" placeholder="1"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                            <p className="order__confirm-info-total">Итого</p>
                            <p style={{color: '#EA5A5A'}} className="order__confirm-info-total">
                                {total}с
                            </p>
                        </div>
                        <button className="order__confirm-btn">
                            Подтвердить заказ
                        </button>
                        <p className="order__confirm-conditions">Подтверждая заказ, я принимаю условия <br/> <a
                            href="#">пользовательского соглашения</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;