import { FunctionComponent } from 'react';
import { EFooterType, IPropsFooter } from './interfaces';
import FooterFull from './components/FooterFull';
import FooterMini from './components/FooterMini';

import './styles/index.scss';

const componentStyleName = 'component-app-footer';

const Footer: FunctionComponent<IPropsFooter> = (props) => {
    const className = `${componentStyleName}-${props.type}`;

    switch (props.type) {
        case EFooterType.Full:
            return (
                <FooterFull
                    className={className}
                    type={EFooterType.Full}
                />
            )
        case EFooterType.Mini:
        default:
            return (
                <FooterMini
                    className={className}
                    type={EFooterType.Mini}
                />
            )
    }
};

export default Footer;
