import React, { useState } from 'react';
import Text, { ETextType } from '../../../components/text';
import Input, { EInputType } from '../../../components/input';
import Button, { EButtonType } from '../../../components/button';
import Modal, { EModalType, EModalModeType } from '../../../components/modal';
import Title, { ETitleType } from '../../../components/title';
import Icon, { EIconType } from '../../../components/icon';

const InfoChapter = () => {
    const [ modalMode, setModalMode ] = useState<EModalModeType>(EModalModeType.Close);
    const [ isPending, setIsPending ] = useState<boolean>(false);
    const [ isErrorSend, setIsErrorSend ] = useState<boolean>(false);
    const [ isSuccesSend, setIsSuccesSend ] = useState<boolean>(false);

    const onSendBaseInfo = () => {
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
                text={'Общая информация от продавца'}
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
                    text={'Общий прайс'}
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
                    text={'Часто покупаем'}
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
                    text={'Акции и распродажа'}
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
                    text={'Продажа н/в оборудования'}
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
                    text={'Продажа н/в автотехники'}
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
                    text={'Продажа н/в спецтехники'}
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
                    text={'Прочие товары б/у'}
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
                    text={'Прочие неликвиды'}
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
                    text={'Порожний транспорт'}
                />
            </div>
            <div
                className='control-field'
            >
                <Button
                    type={EButtonType.YellowButton}
                    title='Сохранить изменения'
                    onClick={onSendBaseInfo}
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
                            text='Изменение доп. информации' />
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
                                    text={'Ошибка сохранения! Попробуйте изменить доп. информацию позже...'}
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
                                        text={'Дополнительная информация сохранена'}
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

export default InfoChapter;
