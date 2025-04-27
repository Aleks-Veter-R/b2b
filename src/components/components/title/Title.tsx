import { FunctionComponent } from 'react';
import { IPropsTitle } from './interfaces';
import './styles/index.scss';

const componentStyleName = 'component-title';

const Title: FunctionComponent<IPropsTitle> = (props) => {
    return (
        <div className={`${componentStyleName}-${props.type}`}>
            {props.text}
        </div>
    );
};

export default Title;
