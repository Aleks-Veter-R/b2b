import { FunctionComponent } from 'react';
import { ETextType, IPropsText } from './interfaces'
import './styles/index.scss';

const componentStyleName = 'component-text';

const Text: FunctionComponent<IPropsText> = (props) => {
    switch (props.type) {
        case ETextType.Default:
        case ETextType.Medium:
        default:
            return (
                <div className={`${componentStyleName}-${ETextType.Medium}`}>
                    {props.text}
                </div>
            );
    };
};

export default Text;
