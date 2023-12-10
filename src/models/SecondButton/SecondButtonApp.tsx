import { Form } from "antd";
import { CustomModal } from "../../components/Modal/CustomModal";
import { CustomForm } from "../../components/Form/CustomForm";
import { CustomList } from "../../components/List/CustomList";
import { useSaveStorage } from "../../shared/hooks/useSaveStorage";
import FormFields from "../../shared/configs/formConfig";
import { useTranslation } from "react-i18next";
import { SecondButtonContainer } from "./styles/SecondButtonStyle";

export const SecondButtonApp:React.FC<({name:string})> = ({name}) => {
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
        <SecondButtonContainer>
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={`${name}${t('buttons.-characters')}`} 
                tooltiptitle={t('buttons.view-add')} 
                buttonTitle={name}
                shape='default' 
                type={'second'}
            >
                <CustomForm form={form} fields={fields} mainInput={false}/>
                <CustomList nameMedia={`${name}${t('localstorage._char')}`} reloadVersion={reloadVersion} setReloadVersion={setReloadVersion}/>
            </CustomModal>
        </SecondButtonContainer>
    )
}