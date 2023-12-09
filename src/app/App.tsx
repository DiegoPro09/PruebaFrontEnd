import { SecondButtonApp } from "../models/SecondButton/SecondButtonApp";
import { FirstButtonApp } from "../models/FirstButton/FirstButtonApp";
import { CustomForm } from "../components/Form/CustomForm";
import { Button, Form } from "antd";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  const [form] = Form.useForm<any>()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const { t } = useTranslation('global') 

  const fields = [
    { name: 'name', label: t('input.labels.name-movie'), placeholder: t('input.tooltip-places.name-movie'), tooltip: t('input.tooltip-places.name-movie') },
  ]

  const handleAction = () =>{
    const formData = form.getFieldsValue()
    if(!firstValue){
      setFirstValue(formData.name)
      form.resetFields()
    }else{
      setSecondValue(formData.name)
      form.resetFields()
    }
  }

  return (
    <>
      {(!firstValue || !secondValue) && 
        <>
          <label>
            {t('main.text-main.first-half')} 
            {!firstValue ? t('main.text-main.first') : t('main.text-main.second')} 
            {t('main.text-main.second-half')}
          </label>

          <CustomForm form={form} fields={fields}/>
          <Button type="primary" htmlType="submit" onClick={handleAction}>{t('main.next')}</Button>
        </>
      }

      {firstValue && <FirstButtonApp name={firstValue} />}
      {secondValue && <SecondButtonApp name={secondValue} />}
      
    </>
  )
}

export default App
