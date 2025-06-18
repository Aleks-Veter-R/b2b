import { FunctionComponent } from 'react';
import { NavLink } from 'react-router';
import { IPropsFooterMini } from '../interfaces';
import Divider,  { EDividerType } from '../../divider';
import Icon, { EIconType } from '../../icon';

const FooterMini: FunctionComponent<IPropsFooterMini> = (props) => {
    return (
        <div className={`${props.className}`}>
            <div>
                <div className={`logo`}>
                    <NavLink to='/'>
                        <Icon type={EIconType.Logo} />
                    </NavLink>
                </div>
            </div>
            <div>
                <div className={`body`}>
                    <div className={`link-list`}>
                        <NavLink to='/'>
                            О нас
                        </NavLink>
                        <NavLink to='/'>
                            Контакты
                        </NavLink>
                        <NavLink to='/'>
                            Товары
                        </NavLink>
                        <NavLink to='/'>
                            Тарифы
                        </NavLink>
                        <NavLink to='/'>
                            Ответы на вопросы
                        </NavLink>
                        <NavLink to='/'>
                            Правила работы
                        </NavLink>
                        <NavLink to='/'>
                            Классификатор товаров ОКПД-2
                        </NavLink>
                        <NavLink to='/'>
                            Банковские реквизиты
                        </NavLink>
                    </div>
                </div>
                <Divider type={EDividerType.Base} />
                <div>
                    <div>
                        <NavLink to='/'>
                            Политика кофеденциальности
                        </NavLink>
                        <NavLink to='/'>
                            Соглашение на обработку персональных данных
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/'>
                            info@mail.ru
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMini;
