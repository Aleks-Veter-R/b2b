import { FunctionComponent, ReactElement } from 'react';
import { EIconType, IPropsIcon } from './interfaces';
import Arrow from './images/Arrow';
import ArrowSmall from './images/ArrowSmall';
import Check from './images/Check';
import ControlPanel from './images/ControlPanel';
import DefaultPhoto from './images/DefaultPhoto';
import Logo from './images/Logo';
import Search from './images/Search';
import YellowAddress from './images/YellowAddress';
import YellowDoc from './images/YellowDoc';
import YellowMail from './images/YellowMail';
import YellowProfile from './images/YellowProfile';
import YellowTube from './images/YellowTube';
import './styles/index.scss';

const componentStyleName = 'component-icon-svg';

const Icon: FunctionComponent<IPropsIcon> = (props) => {
    let icon: ReactElement = null;
    
    switch (props.type) {
        case EIconType.Arrow:
            icon = <Arrow />;
            break;
        case EIconType.ArrowSmall:
            icon = <ArrowSmall />;
            break;
        case EIconType.Check:
            icon = <Check />;
            break;
        case EIconType.ControlPanel:
            icon = <ControlPanel />;
            break;
        case EIconType.DefaultPhoto:
            icon = <DefaultPhoto />;
            break;
        case EIconType.Logo:
            icon = <Logo />;
            break;
        case EIconType.Search:
            icon = <Search />;
            break;
        case EIconType.YellowAddress:
            icon = <YellowAddress />;
            break;
        case EIconType.YellowDoc:
            icon = <YellowDoc />;
            break;
        case EIconType.YellowMail:
            icon = <YellowMail />;
            break;
        case EIconType.YellowProfile:
            icon = <YellowProfile />;
            break;
        case EIconType.YellowTube:
            icon = <YellowTube />;
            break;
        case 'Default':
        default:
            icon = null;
    };

    return (
        <div className={`${componentStyleName}-${props.type}`}>
            {icon}
        </div>
    );
};

export default Icon;
