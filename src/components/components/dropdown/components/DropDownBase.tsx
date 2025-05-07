import { FunctionComponent, useState } from 'react';
import { IPropsDropDownBase, IPropsDropDownItem } from '../interfaces';
import Icon, { EIconType } from '../../icon';
import '../styles/index.scss';

const DropDownBase: FunctionComponent<IPropsDropDownBase> = (props) => {
    let [ isOpen, setIsOpen ] = useState(false);
    let [ currentValue, setCurrentValue ] = useState<IPropsDropDownItem<string>>(null);

    const onChange = (item: IPropsDropDownItem<string>) => {
        props.onChange(item);
        setCurrentValue(item);
        setIsOpen(false);
    }

    const onTogle = () => {
        setIsOpen(!isOpen);
    }

    const dropdownList = props.itemList.map((item) => {
        return (
            <div
                key={item.value}
                className='item-value'
                onClick={() => onChange({...item})}
            >
                {item.title}
            </div>
        );
    })

    return (
        <div className={props.className}>
            <div className='value-fields'>
                <div className='current-value'>
                    {currentValue === null ? '' : currentValue.title}
                </div>
                <div className={`dropdown-list${isOpen ? ' open' : ''}`}>
                    {dropdownList}
                </div>
            </div>
            <div
                className={`control-field${isOpen ? ' open' : ''}`}
                onClick={onTogle}
            >
                <Icon type={EIconType.ArrowSmall} />
            </div>
        </div>
    );
};

export default DropDownBase;
