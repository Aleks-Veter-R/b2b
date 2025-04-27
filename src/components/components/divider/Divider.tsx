import { FunctionComponent } from 'react';
import { IPropsDivider } from './interfaces'
import './styles/index.scss';

const componentStyleName = 'component-divider';

const Divider: FunctionComponent<IPropsDivider> = (props) => {
    return <div className={`${componentStyleName}-${props.type}`} />;
};

export default Divider;
