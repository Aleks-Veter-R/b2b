import React, { useState } from 'react';
import Text, { ETextType } from '../../../components/text';
import Button, { EButtonType } from '../../../components/button';
import Modal, { EModalType, EModalModeType } from '../../../components/modal';
import Title, { ETitleType } from '../../../components/title';
import Icon, { EIconType } from '../../../components/icon';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url ).toString();

const OfertaChapter = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const [ modalMode, setModalMode ] = useState<EModalModeType>(EModalModeType.Close);
    const [ isPending, setIsPending ] = useState<boolean>(false);
    const [ isErrorSend, setIsErrorSend ] = useState<boolean>(false);
    const [ isSuccesSend, setIsSuccesSend ] = useState<boolean>(false);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const onNextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const onPrevPage = () => {
        setPageNumber(pageNumber - 1)
    }

    const onSendOffer = () => {
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
                text={'Оферта'}
            />
            <div className='document-field' >
                <div className='document-field-doc-navigate' >
                    <div className='document-field-prev-link' >
                        {pageNumber > 1 && <Button
                            type={EButtonType.LinkButton}
                            title='Предыдущая'
                            linkTextType={ETextType.Medium}
                            onClick={onPrevPage}
                        />}
                    </div>
                    <div className='document-field-page-count' >
                        Страница {pageNumber} из {numPages}
                    </div>
                    <div className='document-field-next-link' >
                        {pageNumber < numPages && <Button
                            type={EButtonType.LinkButton}
                            title='Следующая'
                            linkTextType={ETextType.Medium}
                            onClick={onNextPage}
                        />}
                    </div>
                </div>
                <div className='document-field-pdf' >
                    <Document
                        file="proffer.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>
            <div
                className='control-field'
            >
                <Button
                    type={EButtonType.YellowButton}
                    title='Сохранить изменения'
                    onClick={onSendOffer}
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
                            text='Подпись оферты' />
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
                                    text={'Ошибка сохранения! Попробуйте подписать оферту позже...'}
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
                                        text={'Оферта подписана'}
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

export default OfertaChapter;
