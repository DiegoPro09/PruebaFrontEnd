import { SecondButtonApp } from "../models/SecondButton/SecondButtonApp";
import { FirstButtonApp } from "../models/FirstButton/FirstButtonApp";
import { CustomForm } from "../components/Form/CustomForm";
import { Flex, Form } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import Title from "antd/es/typography/Title";
import {  CustomButton, DivContainer, MainContent, MainText, StyleDivider } from "./styles/CustomStyles";
import { CustomSwitch } from "../components/Switch/CustomSwitch";

const App = () => { 
  const [form] = Form.useForm<any>()
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const { t } = useTranslation('global') //Componente de traduccion i18next

  useEffect(() => {
    //Elimina los datos dentro del local storage en caso de que hubiera
    localStorage.clear();
  }, []);

  //Declaracion de los campos que tendra el input principal, en caso de que hubiera mas fields se cargarian mas inputs
  const fields = [
    { name: 'name', placeholder: t('input.tooltip-places.name-movie'), tooltip: t('input.tooltip-places.name-movie') },
  ]

  //Accion que toma los datos que viene por el input principal y lo dirige a sus respectivos botones
  const handleAction = () =>{
    const formData = form.getFieldsValue()
    if(!firstValue){
      setFirstValue(formData.name)//En caso de que no hubiera ninguna pelicula cargada, este valor que viene por formulario se guardardara en el primer boton
      form.resetFields()//Una vez que se inserta el nombre en el boton se limpia el formulario para poder ingresar otro nombre de pelicula o serie
    }else{
      setSecondValue(formData.name)
      form.resetFields()
    }
  }

  const renderTitle = () => ( //Funcion personalizada que renderiza el titulo principal, cambiando el mismo en caso de que ya se hubieran cargado las dos peliculas o series
    <Title className="custom-text">
      {!firstValue || !secondValue  
        ? t('main.text-main.welcome')
        : t('main.text-main.wonderful')}
    </Title>
  );
  
  const renderSubtitle = () => (//Funcion personalizada que renderiza una breve introduccion al sistema , cambiando el mismo en caso de que ya se hubieran cargado las dos peliculas o series
    <Title className="custom-text" level={3}>
      {!firstValue || !secondValue  
        ? t('main.text-main.about')
        : t('main.text-main.explain')}
    </Title>
  );
  
  const renderFormSection = () => (//Funcion personalizada que dependiendo de si se cargaron las dos peliculas o series, se muestra el input para cargar peliculas o da paso a que se rendericen los botones
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

  return (
    //Cuadro principal de la pagina con los componentes creados dentro de la carpeta style
    <DivContainer>
      <MainContent className="mainText">
        <CustomSwitch />
        
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