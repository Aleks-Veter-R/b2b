import { FunctionComponent } from 'react';
import { IPropsButtonActionButton } from '../interfaces';
import '../styles/index.scss';

const ButtonActionButton: FunctionComponent<IPropsButtonActionButton> = (props) => {
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

export default ButtonActionButton;
