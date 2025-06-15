import { FunctionComponent } from 'react';
import { IPropsMainNavigationLanding } from '../interfaces';
import { NavLink } from 'react-router';
import Icon, { EIconType } from '../../icon';

const componentStyleName = 'component-app-navigation';

const MainNavigationLanding: FunctionComponent<IPropsMainNavigationLanding> = (props) => {
    return (
        <div className={`${props.className}`}>
            <div className={`${componentStyleName}-wrapper`}>
                <div>
                    <div className={`${componentStyleName}-logo`}>
                        <Icon type={EIconType.Logo} />
                    </div>
                    <div className={`${componentStyleName}-link-list`}>
                        <NavLink to='/'>
                            Главная
                        </NavLink>
                        <NavLink to='/first-page'>
                            Товары
                        </NavLink>
                        <NavLink to='/companies-page'>
                            Компании
                        </NavLink>
                        <NavLink to='/companies-page'>
                            О нас
                        </NavLink>
                        <NavLink to='/companies-page'>
                            Правила работы
                        </NavLink>
                        <NavLink to='/companies-page'>
                            Контакты
                        </NavLink>
                    </div>
                </div>
                <div className={`${componentStyleName}-profile`}>
                    <NavLink to='/first-page'>
                        Войти
                    </NavLink>
                    <NavLink to='/first-page'>
                        Регистрация
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainNavigationLanding;
