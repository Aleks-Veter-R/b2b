import { FunctionComponent } from 'react';
import InputCheckBox from './components/InputCheckBox';
import InputDifferentText from './components/InputDifferentText';
import InputFile from './components/InputFile';
import InputText from './components/InputText';
import { IPropsInput, EInputType, TInputValue, IPropsInputFileImage } from './interfaces'
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
        case EInputType.InputFileImage:
            let attributesInputFileImage: Omit<
                IPropsInputFileImage,
                'className' | 'type' | 'onChange' | 'value' | 'checked'
            > = {};

            if (props.name !== undefined) attributesInputFileImage.name = props.name;
            if (props.imageType !== undefined) attributesInputFileImage.imageType = props.imageType;
            if (props.imageSizeMb !== undefined) attributesInputFileImage.imageSizeMb = props.imageSizeMb;

            return (
                <InputFile
                    type={EInputType.InputFileImage}
                    className={`${componentStyleName}-${props.type}`}
                    {...attributesInputFileImage}
                    onChange={(value) => console.log('value', value)}
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
