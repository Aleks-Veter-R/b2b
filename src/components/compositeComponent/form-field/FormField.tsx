import { FunctionComponent } from 'react';
import {
    EFormFieldType,
    TFormFieldValue,
    IPropsFormField,
    IPropsFormFieldCheckBoxField,
    IPropsFormFieldInputField,
    IPropsFormFieldInputDifferentTextField,
    IPropsFormFieldTextAreaField,
    IPropsFormFieldDropDownField,
} from './interfaces';
import InputCheckbox from './components/InputCheckbox';
import InputDifferentTextField from './components/InputDifferentTextField';
import InputField from './components/InputField';
import TextAreaField from './components/TextAreaField';
import DropDownField, { IPropsDropDownItem } from './components/DropDownField';
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
        case EFormFieldType.InputDifferentTextField:
        case EFormFieldType.InputDifferentTextMainField:
            let attributesInputDifferentTextField:
                Omit<IPropsFormFieldInputDifferentTextField, 'className' | 'type' | 'text' | 'onChange'> = {};

            if (props.name !== undefined) attributesInputDifferentTextField.name = props.name;
            if (props.value !== undefined) attributesInputDifferentTextField.value = props.value as string;
            if (props.isActiveState !== undefined)
                attributesInputDifferentTextField.isActiveState = props.isActiveState;

            return (
                <InputDifferentTextField
                    className={`${componentStyleName}-${props.type}`}
                    type={EFormFieldType.InputDifferentTextField}
                    text={props.text}
                    {...attributesInputDifferentTextField}
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
        case EFormFieldType.TextAreaField:
            let attributesTextAreaField:
                Omit<IPropsFormFieldTextAreaField, 'className' | 'type' | 'text' | 'onChange'> = {};

            if (props.name !== undefined) attributesTextAreaField.name = props.name;
            if (props.value !== undefined) attributesTextAreaField.value = props.value as string;
            if (props.isActiveState !== undefined) attributesTextAreaField.isActiveState = props.isActiveState;
            if (props.maxlength !== undefined) attributesTextAreaField.maxlength = props.maxlength;
            if (props.rows !== undefined) attributesTextAreaField.rows = props.rows;

            return (
                <TextAreaField
                    className={`${componentStyleName}-${props.type}`}
                    type={EFormFieldType.TextAreaField}
                    text={props.text}
                    {...attributesTextAreaField}
                    onChange={props.onChange}
                />
            );
        case EFormFieldType.DropDownField:
            let attributesDropDownField:
                Omit<IPropsFormFieldDropDownField, 'className' | 'type' | 'value' | 'text' | 'onChange'> = {};

            if (props.name !== undefined) attributesTextAreaField.name = props.name;
            if (props.isActiveState !== undefined) attributesTextAreaField.isActiveState = props.isActiveState;

            return (
                <DropDownField
                    className={`${componentStyleName}-${props.type}`}
                    type={EFormFieldType.DropDownField}
                    text={props.text}
                    value={props.value as IPropsDropDownItem<string>}
                    itemList={props.itemList}
                    {...attributesDropDownField}
                    onChange={props.onChange}
                />
            );
        case EFormFieldType.Default:
        default:
            return null;
    };
};

export default FormField;
