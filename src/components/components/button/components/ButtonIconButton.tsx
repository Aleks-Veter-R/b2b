import { FunctionComponent } from 'react';
import Icon from '../../icon';
import { IPropsButtonIconButton } from '../interfaces';
import '../styles/index.scss';

const ButtonIconButton: FunctionComponent<IPropsButtonIconButton> = (props) => {
    const onClick = () => {
        if (!props.isInactive) props.onClick();
    }

    return (
        <div
            className={`${props.className} ${props.iconSize}`}
            title={props.title}
            onClick={onClick}
        >
            <Icon type={props.iconType} />
        </div>
    );
};

export default ButtonIconButton;
