import { FunctionComponent } from 'react';
import { IPropsModalBlackModal, EModalModeType } from '../interfaces';

const Modal: FunctionComponent<IPropsModalBlackModal> = (props) => {
    const onClickBody = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.stopPropagation();

    return (
        <div
            className={`${props.className} ${props.mode === 'open' ? 'active' : ''}`}
            onClick={props.toggleModal.bind(this, EModalModeType.Close)}
        >
            <div
                className='modal-body'
                onClick={onClickBody}
            >
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
