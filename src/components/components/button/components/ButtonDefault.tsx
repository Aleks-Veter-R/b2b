import { FunctionComponent } from 'react';
import { IPropsButtonDefault } from '../interfaces';
import '../styles/index.scss';

const ButtonDefault: FunctionComponent<IPropsButtonDefault> = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
};

export default ButtonDefault;
