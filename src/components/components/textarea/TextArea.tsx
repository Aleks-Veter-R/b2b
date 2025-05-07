import { FunctionComponent } from 'react';
import { ETextAreaType, IPropsTextArea } from './interfaces';
import TextAreaBase from './components/TextAreaBase'
import './styles/index.scss';

const componentStyleName = 'component-textarea';

const TextArea: FunctionComponent<IPropsTextArea> = (props) => {
    let styleName = `${componentStyleName}-${props.type}`;

    switch (props.type) {
        case ETextAreaType.Base:
            return (
                <TextAreaBase
                    {...props}
                    type={ETextAreaType.Base}
                    className={styleName}
                />
            );
        case ETextAreaType.Default:
        default:
            return null;
    };
};

export default TextArea;
