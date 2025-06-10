import { FunctionComponent } from 'react';
import { IPropsInputDifferentText, EInputType } from '../interfaces';
import '../styles/index.scss';

const InputDifferentText: FunctionComponent<IPropsInputDifferentText> = (props) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    let attributes: Omit<
        IPropsInputDifferentText,
        'className' | 'type' | 'onChange' | 'checked' | 'imageSizeMb' | 'imageType'
    > = {};

    if (props.name !== undefined) attributes.name = props.name;
    if (props.value !== undefined) attributes.value = props.value;
    if (props.placeholder !== undefined) attributes.placeholder = props.placeholder;

    return (
        <input
            className={props.className}
            type='text'
            {...attributes}
            onChange={onChange}
        />
    );
};

export default InputDifferentText;
