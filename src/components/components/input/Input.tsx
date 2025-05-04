import { FunctionComponent } from 'react';
import InputCheckBox from './components/InputCheckBox';
import InputDifferentText from './components/InputDifferentText';
import InputText from './components/InputText';
import { IPropsInput, EInputType, TInputValue } from './interfaces'
import './styles/index.scss';

const componentStyleName = 'component-input';

const Input: FunctionComponent<IPropsInput<TInputValue>> = (props) => {
    switch (props.type) {
        case EInputType.CheckBox:
            let attributesInputCheckBox: Omit<IPropsInput<boolean>, 'type' | 'onChange' | 'value'> = {};

            if (props.name !== undefined) attributesInputCheckBox.name = props.name;
            if (props.checked !== undefined) attributesInputCheckBox.checked = props.checked;

            return (
                <InputCheckBox
                    type={EInputType.CheckBox}
                    className={`${componentStyleName}-${props.type}`}
                    {...attributesInputCheckBox}
                    onChange={props.onChange}
                />
            );
        case EInputType.DifferentText:
            let attributesInputDifferentText: Omit<IPropsInput<string>, 'type' | 'onChange' | 'checked'> = {};

            if (props.name !== undefined) attributesInputDifferentText.name = props.name;
            if (props.value !== undefined) attributesInputDifferentText.value = props.value as string;

            return (
                <InputDifferentText
                    type={EInputType.DifferentText}
                    className={`${componentStyleName}-${props.type}`}
                    {...attributesInputDifferentText}
                    onChange={props.onChange}
                />
            );
        case EInputType.Text:
            let attributesInputText: Omit<IPropsInput<string>, 'type' | 'onChange' | 'checked'> = {};

            if (props.name !== undefined) attributesInputText.name = props.name;
            if (props.value !== undefined) attributesInputText.value = props.value as string;

            return (
                <InputText
                    type={EInputType.Text}
                    className={`${componentStyleName}-${props.type}`}
                    {...attributesInputText}
                    onChange={props.onChange}
                />
            );
        case EInputType.Default:
        default:
            return null;
    };
};

export default Input;
