import { FunctionComponent } from 'react';
import { ETextType, IPropsText } from './interfaces'
import './styles/index.scss';

const componentStyleName = 'component-text';

const Text: FunctionComponent<IPropsText> = (props) => {
    switch (props.type) {
        case ETextType.Medium:
            return (
                <div className={`${componentStyleName}-${props.type}`}>
                    {props.text}
                </div>
            );
        case ETextType.Default:
        default:
            return null;
    };
};

export default Text;
