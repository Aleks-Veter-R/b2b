import { FunctionComponent } from 'react';
import { NavLink } from 'react-router';
import Icon, { EIconType } from '../icon';
import './styles.scss';

const componentStyleName = 'component-app-navigation';

const MainNavigation: FunctionComponent = () => {
    return (
        <div className={`${componentStyleName}`}>
            <div className={`${componentStyleName}-wrapper`}>
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
                </div>
                <div className={`${componentStyleName}-profile`}>
                    <NavLink to='/first-page'>
                        Магнитогорский металлургический комбинат
                    </NavLink>
                    <NavLink to='/first-page'>
                        Выход
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainNavigation;
