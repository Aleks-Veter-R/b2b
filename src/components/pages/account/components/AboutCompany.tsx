import React, { useState } from 'react';
import Text, { ETextType } from '../../../components/text';
import Input, { EInputType } from '../../../components/input';
import Button, { EButtonType } from '../../../components/button';
import Modal, { EModalType, EModalModeType } from '../../../components/modal';
import Title, { ETitleType } from '../../../components/title';
import Icon, { EIconType } from '../../../components/icon';

const AboutChapter = () => {
    const [ modalMode, setModalMode ] = useState<EModalModeType>(EModalModeType.Close);
    const [ isPending, setIsPending ] = useState<boolean>(false);
    const [ isErrorSend, setIsErrorSend ] = useState<boolean>(false);
    const [ isSuccesSend, setIsSuccesSend ] = useState<boolean>(false);

    const onSendCompanyInfo = () => {
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
                text={'О компании'}
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
                    text={'Численность работающих'}
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
                    text={'Сайт'}
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
                    text={'Ж.Д. станция, код станции'}
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
                    text={'Электронная почта'}
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
                    text={'Телефоны'}
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
                    text={'Whatsapp'}
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
                    text={'Telegram'}
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
                    text={'Дилеры'}
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
                    text={'Контрагенты'}
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
                    text={'Фото компании'}
                />
            </div>
            <div
                className='control-field'
            >
                <Button
                    type={EButtonType.YellowButton}
                    title='Сохранить изменения'
                    onClick={onSendCompanyInfo}
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
                            text='Изменение данных компании' />
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
                                    text={'Ошибка сохранения! Попробуйте изменить данные о компании позже...'}
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
                                        text={'Данные о компании сохранены'}
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

export default AboutChapter;
