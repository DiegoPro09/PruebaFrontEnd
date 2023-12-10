import { SecondButtonApp } from "../models/SecondButton/SecondButtonApp";
import { FirstButtonApp } from "../models/FirstButton/FirstButtonApp";
import { CustomForm } from "../components/Form/CustomForm";
import { Flex, Form, Switch } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Title from "antd/es/typography/Title";
import {  CustomButton, DivContainer, MainContent, MainText, StyleDivider } from "./styles/CustomStyles";
import i18next from "i18next";

function App() {
  const [form] = Form.useForm<any>()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const { t } = useTranslation('global') 

  useEffect(() => {
    localStorage.clear();
  }, []);

  const fields = [
    { name: 'name', placeholder: t('input.tooltip-places.name-movie'), tooltip: t('input.tooltip-places.name-movie') },
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

  const renderTitle = () => (
    <Title className="custom-text">
      {!firstValue || !secondValue  
        ? t('main.text-main.welcome')
        : t('main.text-main.wonderful')}
    </Title>
  );
  
  const renderSubtitle = () => (
    <Title className="custom-text" level={3}>
      {!firstValue || !secondValue  
        ? t('main.text-main.about')
        : t('main.text-main.explain')}
    </Title>
  );
  
  const renderFormSection = () => (
    <>
      <Title className="custom-text" level={4}>
        {t('main.text-main.first-half')} 
        {!firstValue ? t('main.text-main.first') : t('main.text-main.second')} 
        {t('main.text-main.second-half')}
      </Title>
      
      <Flex justify='center' align='center' gap={4}>
        <CustomForm form={form} fields={fields} mainInput={true}/>
        <CustomButton type="primary" htmlType="submit" onClick={handleAction} style={{textAlign:"center"}}>{t('main.next')}</CustomButton>
      </Flex>
    </>
  );

  const toggleLanguage = (checked:any) => {
    const newLanguage = checked ? 'es' : 'en'; // Cambia 'es' y 'en' según tus códigos de idioma
    i18next.changeLanguage(newLanguage);
  };

  return (
    <DivContainer>
      <div>
        <Switch
          checkedChildren="ES"
          unCheckedChildren="EN"
          defaultChecked={i18next.language === 'es'}
          onChange={toggleLanguage}
        />
      </div>
      <MainContent className="mainText">
        <MainText>
          {renderTitle()}
          {renderSubtitle()}

          <StyleDivider/>

          {(!firstValue || !secondValue) && renderFormSection()}
        </MainText>

        <Flex justify='center' align='center' gap={15}>
          {firstValue && <FirstButtonApp name={firstValue} />}
          {secondValue && <SecondButtonApp name={secondValue} />}    
        </Flex>
      </MainContent>
    </DivContainer>
  )
}

export default App