import { PlusOutlined } from '@ant-design/icons';
import { Form, Row, Col, FormInstance, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import FormValidations from '../../shared/configs/validations';
import { StyleInput } from './styles/FormStyles';

//Declaracion de interfaces con props que luego seran requeridas dentro del componente
interface CustomFormProps {
  form: FormInstance
  fields: Array<{ name: string, label?: string, placeholder: string, tooltip: string }>, //Esta seccion se declara como arreglo ya que la misma pueden venir varios campos y generar asi varios inputs
  mainInput:boolean
}

/* Componente Form personalizado y reutilizable en cualquier parte de la aplicacion, este componente 
renderizara siempre el mismo formulario y se manejara independientemente recibiendo props pre-definidas 
dentro de cualquier otro componente */ 
export const CustomForm: React.FC<CustomFormProps> = ({ form, fields, mainInput }: CustomFormProps) => {
  const { t } = useTranslation('global')
  const validations = FormValidations()//Incorpora las validaciones personalizadas
  
  const normFile = (e: any) => { //Funcion que devuelve el thumbURL de cada imagen para luego en el hook poder transformarla a string y guardarla
    const file = e.file

    if (file) {
      return file
    }

  }

  return (
    <Form form={form} layout="vertical" autoComplete="on">
      <Row gutter={[10, 10]}>
        {fields.map((field, index) => ( //Mapeo del array fields, que dependiendo de cuantos datos vengan en esta prop, sera la cantidad de inputs que se mostrara
          <Col key={index} span={fields.length > 1 ? 12 : 24}>
            {field.name === 'image' ? ( //Operador ternario que verifica si el nombre de un field o input es igual a image, para asi mostrar un input diferente de tipo upload
              <Form.Item name={field.name} label={field.label} valuePropName="file" getValueFromEvent={normFile} rules={validations.image}>
                <Upload listType="picture-card" beforeUpload={()=>false} maxCount={1}>
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>{t('general.upload')}</div>
                  </div>
                </Upload>
              </Form.Item>
            ) : (
              <Form.Item name={field.name} label={field.label} tooltip={field.tooltip} rules={validations[field.name]}>
                <StyleInput placeholder={field.placeholder} mainInput={mainInput}/>
              </Form.Item>
            )}
          </Col>
        ))}
      </Row>
    </Form>
  )
}