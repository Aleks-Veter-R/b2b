import { FunctionComponent } from 'react';
import { EDropDownType, TDropDownValue, IPropsDropDown } from './interfaces';
import DropDownBase from './components/DropDownBase'
import './styles/index.scss';

const componentStyleName = 'component-dropdown';

const DropDown: FunctionComponent<IPropsDropDown<TDropDownValue>> = (props) => {
    let styleName = `${componentStyleName}-${props.type}`;

    switch (props.type) {
        case EDropDownType.Base:
            return (
                <DropDownBase
                    {...props}
                    type={EDropDownType.Base}
                    className={styleName}
                />
            );
        case EDropDownType.Default:
        default:
            return null;
    };
};

export default DropDown;
