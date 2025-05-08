import { FunctionComponent } from 'react';
import { IPropsButtonActionButtonGray } from '../interfaces';
import '../styles/index.scss';

const ButtonActionButtonGray: FunctionComponent<IPropsButtonActionButtonGray> = (props) => {
    const onClick = () => {
        if (!props.isInactive) props.onClick();
    }

    return (
        <button
            className={props.className}
            onClick={onClick}
        >
            {props.title}
        </button>
    );
};

export default ButtonActionButtonGray;
