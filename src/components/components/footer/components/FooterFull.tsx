import { FunctionComponent } from 'react';
import { NavLink } from 'react-router';
import { IPropsFooterFull } from '../interfaces';
import Button, { EButtonType } from '../../button';
import Divider, { EDividerType } from '../../divider';
import Icon, { EIconType } from '../../icon';

const FooterFull: FunctionComponent<IPropsFooterFull> = (props) => {
    return (
        <div className={`${props.className}`}>
            <div className={`body`}>
                <div className={`logo`}>
                    <NavLink to='/'>
                        <Icon type={EIconType.Logo} />
                    </NavLink>
                </div>
                <div className={`b2b`}>
                    <div>Биржа B2B</div>
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
                    </div>
                </div>
                <div className={`info`}>
                    <div>Справочные материалы</div>
                    <div className={`link-list`}>
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
                <div className={`button`}>
                    <Button
                        type={EButtonType.Default}
                        title='Зарегистрироваться'
                        onClick={() => null}
                    />
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
    );
};

export default FooterFull;
