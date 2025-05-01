import { FunctionComponent } from 'react';
import { EFormFieldType, TFormFieldValue, IPropsFormField, IPropsFormFieldInputField } from './interfaces';
import InputField from './components/InputField';
import './styles/index.scss';

const componentStyleName = 'composite-component-form-field';

const FormField: FunctionComponent<IPropsFormField<TFormFieldValue>> = (props) => {
    switch (props.type) {
        case EFormFieldType.InputField:
            let attributesInputField: Omit<IPropsFormFieldInputField, 'className' | 'type' | 'onChange' | 'text'> = {};

            if (props.name !== undefined) attributesInputField.name = props.name;
            if (props.value !== undefined) attributesInputField.value = props.value;

            return (
                <InputField
                    className={`${componentStyleName}-${props.type}`}
                    type={EFormFieldType.InputField}
                    text={props.text}
                    {...attributesInputField}
                    onChange={props.onChange}
                />
            );
        case EFormFieldType.Default:
        default:
            return null;
    };
};

export default FormField;
