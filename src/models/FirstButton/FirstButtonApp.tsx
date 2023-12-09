import { CustomForm } from "../../components/Form/CustomForm";
import { CustomModal } from "../../components/Modal/CustomModal";
import { Form } from "antd";
import { CustomList } from "../../components/List/CustomList";
import { useSaveStorage } from "../../shared/hooks/useSaveStorage";
import { useTranslation } from "react-i18next";
import FormFields from "../../shared/configs/formConfig";

export const FirstButtonApp:React.FC<({name:string})> = ({name}) =>{
    const [form] = Form.useForm<any>()
    const { error, reloadVersion, setReloadVersion, handleCharacterStorage } = useSaveStorage()
    const { t } = useTranslation('global')
    const fields = FormFields()

    const handleReset = () =>{
        form.resetFields()
    }

    //Action que manda los datos al modal
    const handleAction = () => {
        handleCharacterStorage(form, handleReset, name)
    }

    return (
        <>
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={`${name}${t('buttons.-characters')}`} 
                tooltiptitle={t('buttons.view-add')} 
                buttonTitle={name}
                shape='default'
            >
                <CustomForm form={form} fields={fields}/>
                <CustomList nameMedia={`${name}${t('localstorage._char')}`} reloadVersion={reloadVersion} setReloadVersion={setReloadVersion}/>
            </CustomModal>
        </>
    )
}