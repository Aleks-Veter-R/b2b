import { FunctionComponent } from 'react';
import { IPropsFormFieldTextAreaField } from '../interfaces';
import TextArea, { ETextAreaType, IPropsTextArea } from '../../../components/textarea';
import Text, { ETextType, IPropsText } from '../../../components/text';
import '../styles/index.scss';

const TextAreaField: FunctionComponent<IPropsFormFieldTextAreaField> = (props) => {
    const attributesTextArea:
        Omit<IPropsTextArea, 'className' | 'type' | 'onChange'> = {};

    if (props.name !== undefined) attributesTextArea.name = props.name;
    if (props.value !== undefined) attributesTextArea.value = props.value;
    if (props.maxlength !== undefined) attributesTextArea.maxlength = props.maxlength;
    if (props.rows !== undefined) attributesTextArea.rows = props.rows;

    const disabledFlag: Omit<IPropsText, 'type' | 'text'> = {};

    if (!props.isActiveState) disabledFlag.isDisabled = true;

    return (
        <div className={props.className}>
            <Text
                type={ETextType.Medium}
                text={props.text}
                {...disabledFlag}
            />
            <div className='field'>
                <TextArea
                    type={ETextAreaType.Base}
                    {...attributesTextArea}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};

export default TextAreaField;
