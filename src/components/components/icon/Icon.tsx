import { FunctionComponent, ReactElement } from 'react';
import { IProps } from './interfaces';
import Logo from '../icon/images/Logo';
import './styles/index.scss';

const Icon: FunctionComponent<IProps> = (props) => {
    let icon: ReactElement = null;
    
    switch (props.type) {
        case 'Logo':
            icon = <Logo />;
            break;
        case 'Default':
        default:
            icon = null;
    };

    return (
        <div className={`component-icon-svg-${props.type.toLowerCase()}`}>
            {icon}
        </div>
    );
};

export default Icon;
