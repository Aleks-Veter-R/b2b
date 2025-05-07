import { FunctionComponent } from 'react';
import { IPropsTextAreaBase } from '../interfaces';
import '../styles/index.scss';

const TextAreaBase: FunctionComponent<IPropsTextAreaBase> = (props) => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event.target.value);
    }

    let attributes: Omit<IPropsTextAreaBase, 'className' | 'type' | 'onChange'> = {};

    if (props.maxlength !== undefined) attributes.maxlength = props.maxlength;
    if (props.name !== undefined) attributes.name = props.name;
    if (props.rows !== undefined) attributes.rows = props.rows;
    if (props.value !== undefined) attributes.value = props.value;

    return (
        <textarea
            {...attributes}
            className={props.className}
            onChange={onChange}
        />
    );
};

export default TextAreaBase;
