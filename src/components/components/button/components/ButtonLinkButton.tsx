import { FunctionComponent } from 'react';
import Text from '../../text';
import { IPropsButtonLinkButton } from '../interfaces';
import '../styles/index.scss';

const ButtonLink: FunctionComponent<IPropsButtonLinkButton> = (props) => {
    const onClick = () => {
        if (!props.isInactive) props.onClick();
    }

    return (
        <div
            className={props.className}
            onClick={onClick}
        >
            <Text
                type={props.linkTextType}
                text={props.title}
            />
        </div>
    );
};

export default ButtonLink;
