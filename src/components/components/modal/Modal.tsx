import { FunctionComponent } from 'react';
import { EModalType, IPropsModal } from './interfaces';
import ModalBlackModal from './components/ModalBlackModal'
import './styles/index.scss';

const componentStyleName = 'component-modal';

const Modal: FunctionComponent<IPropsModal> = (props) => {
    let styleName = `${componentStyleName}-${props.type}`;

    switch (props.type) {
        case EModalType.BlackModal:
            return (
                <ModalBlackModal
                    {...props}
                    type={EModalType.BlackModal}
                    className={styleName}
                />
            );
        case EModalType.Default:
        default:
            return null;
    };
};

export default Modal;
