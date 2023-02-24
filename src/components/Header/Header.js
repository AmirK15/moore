import React, {useContext} from 'react';
import {CustomContext} from "../../Context";
import {TfiEmail} from 'react-icons/tfi'
import phone from '../../assets/images/red-phone.svg'
import logo from '../../assets/images/logo.png'
import decor from '../../assets/images/select.png'
import search from '../../assets/images/search.svg'
import basket from '../../assets/images/basket.svg'
import user from '../../assets/images/user.svg'

const Header = () => {

    const {products, setSearchVal, searchVal, searchData} = useContext(CustomContext)

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a className="header__link" href="#">Каталог</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">Акции</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">Популярные товары</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">Новинки</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">Новости</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">О компании</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#">Контакты</a>
                            </li>
                        </ul>
                        <div className="header__contact">
                            <p className="header__email">
                                <TfiEmail color="#333333" width="13px"/>
                                info@Kanzler.kg
                            </p>
                            <label className="header__call">
                                <img src={phone} alt="Phone"/>
                                <select>
                                    <option>Позвонить</option>
                                </select>
                            </label>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container">
                <div className="header__content">
                    <a href="#" className="header__logo">
                        <h1 className="header__title">
                            <div></div>
                            <img src={logo} alt="Logo"/>
                        </h1>
                    </a>
                    <label className="header__catalog">
                        <img src={decor} alt="decor"/>
                        <select>
                            <option value="">Каталог</option>
                        </select>
                    </label>
                    <label className="header__search">
                        <img src={search} alt="Search"/>
                        <input onChange={({target: {value}}) => setSearchVal(value)} type="text"
                               placeholder="Найти товар"/>
                        {
                            searchData.length ?
                                <div className="header__products" >
                                    {searchData.map(item => (
                                        <ul key={item.id}>
                                            <li>
                                                <img src={item.image} alt={item.title}/>
                                            </li>
                                            <li>{item.title}</li>
                                        </ul>
                                    ))}
                                </div> : ''
                        }
                    </label>
                    <button className="header__label header__label-basket">
                        <img src={basket} alt="Basket"/>
                        <div className="header__count">
                            {products.length}
                        </div>
                    </button>
                    <button className="header__label">
                        <img src={user} alt="User"/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;