import { FunctionComponent } from 'react';
import { EMainNavigationType, IPropsMainNavigation } from './interfaces';
import MainNavigationLanding from './components/MainNavigationLanding';
import MainNavigationDefault from './components/MainNavigationDefault';
import './styles/index.scss';

const componentStyleName = 'component-app-navigation';

const MainNavigation: FunctionComponent<IPropsMainNavigation> = (props) => {
    const className = `${componentStyleName}-${props.type}`;

    switch (props.type) {
        case EMainNavigationType.Landing:
            return (
                <MainNavigationLanding
                    className={className}
                    type={EMainNavigationType.Landing}
                />
            )
        case EMainNavigationType.Default:
        default:
            return (
                <MainNavigationDefault
                    className={className}
                    type={EMainNavigationType.Default}
                />
            )
    }
};

export default MainNavigation;
