import { FunctionComponent } from 'react';
import {
    EFormFieldType,
    TFormFieldValue,
    IPropsFormField,
    IPropsFormFieldCheckBoxField,
    IPropsFormFieldInputField } from './interfaces';
import InputCheckbox from './components/InputCheckbox';
import InputField from './components/InputField';
import './styles/index.scss';

const componentStyleName = 'composite-component-form-field';

const FormField: FunctionComponent<IPropsFormField<TFormFieldValue>> = (props) => {
    switch (props.type) {
        case EFormFieldType.CheckBoxField:
            let attributesCheckBoxField:
                Omit<IPropsFormFieldCheckBoxField, 'className' | 'type' | 'text' | 'onChange'> = {};

            if (props.name !== undefined) attributesCheckBoxField.name = props.name;
            if (props.value !== undefined) attributesCheckBoxField.value = props.value as boolean;

            return (
                <InputCheckbox
                    className={`${componentStyleName}-${props.type}`}
                    type={EFormFieldType.CheckBoxField}
                    text={props.text}
                    {...attributesCheckBoxField}
                    onChange={props.onChange}
                />
            );
        case EFormFieldType.InputField:
            let attributesInputField:
                Omit<IPropsFormFieldInputField, 'className' | 'type' | 'text' | 'onChange'> = {};

            if (props.name !== undefined) attributesInputField.name = props.name;
            if (props.value !== undefined) attributesInputField.value = props.value as string;

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
