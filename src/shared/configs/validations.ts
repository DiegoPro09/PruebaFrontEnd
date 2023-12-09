import { Rule } from "antd/es/form";
import { useTranslation } from "react-i18next";

const FormValidations = () =>{
    const { t } = useTranslation('global')

    const validations:{[fieldName:string]:Rule[]}={
        name: [
            {
                required: true,
                message: t('validations.name'),
            }
        ],
        description: [
            {
                required: true,
                message: 'Description is required',
            }
        ],
        image: [
            {
                required: true,
                message: 'Image is required',
            }
        ], 
    }

    return validations
}

export default FormValidations