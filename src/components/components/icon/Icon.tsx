import { FunctionComponent, ReactElement } from 'react';
import { EIconType, IPropsIcon } from './interfaces';
import Arrow from '../icon/images/Arrow';
import ArrowSmall from '../icon/images/ArrowSmall';
import Check from './images/Check';
import ControlPanel from '../icon/images/ControlPanel';
import DefaultPhoto from './images/DefaultPhoto';
import Logo from '../icon/images/Logo';
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
