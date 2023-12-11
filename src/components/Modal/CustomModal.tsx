import { Alert, Divider, Modal, Tooltip } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomModalButton } from './styles/ModalStyles';

interface customModalProps{
    disabled?:boolean,
    action: () => any,
    closeOn?:boolean,
    children: React.ReactNode, 
    title: string, 
    tooltiptitle: string,  
    error?:string,
    buttonTitle: string,
    onClose?:()=>void,
    shape?:string,
    type:string
} 

//Componente Modal reutilizable
export const CustomModal:React.FC<customModalProps> = ({action, onClose, disabled, closeOn, children, title, tooltiptitle, error ,buttonTitle, shape, type}) => {
    const [modal,setModal] = useState(false)
    const { t } = useTranslation('global')

    const closeModal = useCallback(() =>{
        setModal(false)
        onClose && onClose()
    }, [onClose])

    const openModal= () => {
        setModal(true)
    }

    const handleOk = () => {
        action()
    }

    useEffect(()=>{
        closeOn && closeModal()
    },[closeOn, closeModal])
    
    return (
        <>
            <Tooltip title={tooltiptitle} placement="bottom">
                {/* Boton personalizado que acciona la apertura del modal */}
                <CustomModalButton typeButton={type} disabled={disabled} shape={shape === 'default' ? 'default' : 'circle'} onClick={openModal} style={{marginRight: '5px'}}>
                    {buttonTitle ? buttonTitle : ''}
                </CustomModalButton>
            </Tooltip> 

            <Modal
                title = {title}
                open={modal} 
                onCancel={closeModal} 
                okText={t('general.save')} 
                destroyOnClose 
                centered 
                onOk={handleOk} 
            >   
                <Divider />
                {children} {/* Propiedad children que indica que dentro puede ir cualquier componente o elemento html haciendolo reutilizable y configurable */}
                {error && <Alert message={error} type="error" showIcon /> }
            </Modal>
        </>
    )
}