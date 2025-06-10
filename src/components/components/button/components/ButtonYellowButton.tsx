import { FunctionComponent } from 'react';
import { IPropsButtonYellowButton } from '../interfaces';
import '../styles/index.scss';

const ButtonYellowButton: FunctionComponent<IPropsButtonYellowButton> = (props) => {
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

export default ButtonYellowButton;
