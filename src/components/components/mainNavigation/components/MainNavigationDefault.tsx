import { FunctionComponent } from 'react';
import { IPropsMainNavigationDefault } from '../interfaces';
import { NavLink } from 'react-router';
import Icon, { EIconType } from '../../icon';

const componentStyleName = 'component-app-navigation';

const MainNavigationDefault: FunctionComponent<IPropsMainNavigationDefault> = (props) => {
    return (
        <div className={`${props.className}`}>
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
                    <NavLink to='/account-page'>
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

export default MainNavigationDefault;
