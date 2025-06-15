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
import Ok from './images/Ok';
import MainImage from './images/MainImage';
import Company1 from './images/Company1';
import Company2 from './images/Company2';
import Company3 from './images/Company3';
import Company4 from './images/Company4';
import Company5 from './images/Company5';
import Company6 from './images/Company6';
import Company7 from './images/Company7';
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
        case EIconType.Ok:
            icon = <Ok />;
            break;
        case EIconType.MainImage:
            icon = <MainImage />;
            break;
        case 'Company1':
            icon = <Company1 />;
            break;
        case 'Company2':
            icon = <Company2 />;
            break;
        case 'Company3':
            icon = <Company3 />;
            break;
        case 'Company4':
            icon = <Company4 />;
            break;
        case 'Company5':
            icon = <Company5 />;
            break;
        case 'Company6':
            icon = <Company6 />;
            break;
        case 'Company7':
            icon = <Company7 />;
            break;
        case 'Default':
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
