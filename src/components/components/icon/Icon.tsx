import { FunctionComponent, ReactElement } from 'react';
import { IPropsIcon } from './interfaces';
import Arrow from '../icon/images/Arrow';
import ControlPanel from '../icon/images/ControlPanel';
import Logo from '../icon/images/Logo';
import './styles/index.scss';

const Icon: FunctionComponent<IPropsIcon> = (props) => {
    let icon: ReactElement = null;
    
    switch (props.type) {
        case 'Arrow':
            icon = <Arrow />;
            break;
        case 'ControlPanel':
            icon = <ControlPanel />;
            break;
        case 'Logo':
            icon = <Logo />;
            break;
        case 'Default':
        default:
            icon = null;
    };

    return (
        <div className={`component-icon-svg-${props.type}`}>
            {icon}
        </div>
    );
};

export default Icon;
