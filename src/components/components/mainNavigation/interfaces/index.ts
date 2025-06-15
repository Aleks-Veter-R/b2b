import { EMainNavigationType } from './enums';

interface IPropsMainNavigation {
    type: EMainNavigationType;
}

interface IPropsMainNavigationLanding extends IPropsMainNavigation {
    className: string;
    type: EMainNavigationType.Landing;
}

interface IPropsMainNavigationDefault extends IPropsMainNavigation {
    className: string;
    type: EMainNavigationType.Default;
}

export {
    EMainNavigationType,
    IPropsMainNavigation,
    IPropsMainNavigationLanding,
    IPropsMainNavigationDefault,
};
