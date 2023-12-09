import { Alert, Button, Divider, Modal, Tooltip } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
} 

export const CustomModal:React.FC<customModalProps> = ({action, onClose, disabled, closeOn, children, title, tooltiptitle, error ,buttonTitle, shape}) => {
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
            <Tooltip title={tooltiptitle} placement="bottomRight">
                <Button disabled={disabled} shape={shape === 'default' ? 'default' : 'circle'} onClick={openModal} style={{marginRight: '5px'}}>
                    {buttonTitle ? buttonTitle : ''}
                </Button>
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
                {children}
                {error && <Alert message={error} type="error" showIcon /> }
            </Modal>
        </>
    )
}