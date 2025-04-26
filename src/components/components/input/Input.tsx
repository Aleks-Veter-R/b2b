import { FunctionComponent } from 'react';
import InputText from './components/InputText';
import { IPropsInput, EInputType, TInputValue } from './interfaces'
import './styles/index.scss';

const componentStyleName = 'component-input';

const Input: FunctionComponent<IPropsInput<TInputValue>> = (props) => {
    let attributes: Omit<IPropsInput<TInputValue>, 'type' | 'onChange'> = {};

    if (props.name !== undefined) attributes.name = props.name;
    if (props.value !== undefined) attributes.value = props.value;

    switch (props.type) {
        case EInputType.Text:
        case EInputType.Default:
        default:
            return (
                <InputText
                    type={EInputType.Text}
                    className={`${componentStyleName}-${props.type}`}
                    {...attributes}
                    onChange={props.onChange}
                />
            );
    };
};

export default Input;
