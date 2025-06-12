import React, { useState } from 'react';
import Text, { ETextType } from '../../../components/text';
import Input, { EInputType } from '../../../components/input';
import Button, { EButtonType } from '../../../components/button';
import Modal, { EModalType, EModalModeType } from '../../../components/modal';
import Title, { ETitleType } from '../../../components/title';
import Icon, { EIconType } from '../../../components/icon';

const BankDetailsChapter = () => {
    const [ modalMode, setModalMode ] = useState<EModalModeType>(EModalModeType.Close);
    const [ isPending, setIsPending ] = useState<boolean>(false);
    const [ isErrorSend, setIsErrorSend ] = useState<boolean>(false);
    const [ isSuccesSend, setIsSuccesSend ] = useState<boolean>(false);

    const onSendBankDetails = () => {
        setIsPending(true);
        setModalMode(EModalModeType.Open)

        new Promise((resolve, reject) => {
            setTimeout(
                resolve,
                3000
            )
        }).then(() => {
            setIsSuccesSend(true);
            setIsErrorSend(false);
            setIsPending(false);
        }).catch(() => {
            setIsSuccesSend(false);
            setIsErrorSend(true);
            setIsPending(false);
        })
    }

    return (
        <>
            <Text
                type={ETextType.Large}
                text={'Банковские реквизиты'}
            />
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Получатель'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Расчётный счёт'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Банк получателя'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'ИНН Банка получателя'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'БИК Банка получателя'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'Корреспондентский счет'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'ИНН'}
                />
            </div>
            <div
                className='input-info-field'
            >
                <div>
                    <Input
                        type={EInputType.Text}
                        onChange={() => null}
                    />
                </div>
                <Text
                    type={ETextType.Small}
                    text={'КПП'}
                />
            </div>
            <div
                className='control-field'
            >
                <Button
                    type={EButtonType.YellowButton}
                    title='Сохранить изменения'
                    onClick={onSendBankDetails}
                />
            </div>
            {(isPending || isErrorSend || isSuccesSend) && (
                <Modal
                    type={EModalType.BlackModal}
                    mode={modalMode}
                    toggleModal={() => {
                        if (!isPending) setModalMode(EModalModeType.Close)
                    }}
                >
                    <div className='change-pass'>
                        <Title
                            type={ETitleType.HeaderH1}
                            text='Изменение реквизитов' />
                        {isPending ? (
                            <div className='change-pass-pending'>
                                <Text
                                    type={ETextType.Small}
                                    text={'Сохранение изменений...'}
                                />
                            </div>
                        ) : isErrorSend ? (
                            <div className='change-pass-error'>
                                <Icon type={EIconType.Ok} />
                                <Text
                                    type={ETextType.Small}
                                    text={'Ошибка сохранения! Попробуйте изменить реквизиты позже...'}
                                />
                                <Button
                                    type={EButtonType.YellowButton}
                                    title='Спасибо!'
                                    onClick={() => {
                                        setModalMode(EModalModeType.Close);
                                        setIsSuccesSend(false);
                                        setIsErrorSend(false);
                                        setIsPending(false);

                                    }}
                                />
                            </div>
                            ) : isSuccesSend ? (
                                <div className='change-pass-success'>
                                    <Icon type={EIconType.Ok} />
                                    <Text
                                        type={ETextType.Small}
                                        text={'Банковские реквезиты изменены'}
                                    />
                                    <Button
                                        type={EButtonType.YellowButton}
                                        title='Спасибо!'
                                        onClick={() => {
                                            setModalMode(EModalModeType.Close);
                                            setIsSuccesSend(false);
                                            setIsErrorSend(false);
                                            setIsPending(false);
                                        }}
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                </Modal>
            )}
        </>
    )
}

export default BankDetailsChapter;
