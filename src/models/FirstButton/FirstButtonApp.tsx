import { CustomForm } from "../../components/Form/CustomForm";
import { CustomModal } from "../../components/Modal/CustomModal";
import { Form } from "antd";
import { CustomList } from "../../components/List/CustomList";
import { useSaveStorage } from "../../shared/hooks/useSaveStorage/useSaveStorage";
import { useTranslation } from "react-i18next";
import FormFields from "../../shared/configs/formConfig";
import { FirstButtonContainer } from "./styles/FirstButtonStyle";

//Primer boton que recibe como prop el nombre de la primer pelicula o serie
export const FirstButtonApp:React.FC<({name:string})> = ({name}) =>{
    const [form] = Form.useForm<any>()
    const { error, reloadVersion, handleCharacterStorage } = useSaveStorage() //Importacion del hook personalizado que permite guardar datos en el localstorage
    const { t } = useTranslation('global') //importacion de traducciones
    const fields = FormFields() //Se importan los fields preconfigurados

    const handleReset = () =>{ //Funcion que reinicia el formulario
        form.resetFields()
    }

    //Action que manda los datos al hook para guardar
    const handleAction = () => {
        handleCharacterStorage(form, handleReset, name)
    }

    return (
        <FirstButtonContainer> {/* Contenedor personalizado dentro de la carpeta styles */}
            <CustomModal 
                error={error} 
                action={handleAction} 
                onClose={handleReset}
                title={`${name}${t('buttons.-characters')}`} 
                tooltiptitle={t('buttons.view-add')} 
                buttonTitle={name}
                shape='default' 
                type={'first'}
            >
                <CustomForm form={form} fields={fields} mainInput={false}/>
                <CustomList nameMedia={`${name}${t('localstorage._char')}`} reloadVersion={reloadVersion}/>
            </CustomModal>
        </FirstButtonContainer>
    )
}