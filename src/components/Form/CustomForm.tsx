import { PlusOutlined } from '@ant-design/icons';
import { Form, Row, Col, FormInstance, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import FormValidations from '../../shared/configs/validations';
import { StyleInput } from './styles/FormStyles';

interface CustomFormProps {
  form: FormInstance
  fields: Array<{ name: string, label?: string, placeholder: string, tooltip: string }>,
  mainInput:boolean
}

export const CustomForm: React.FC<CustomFormProps> = ({ form, fields, mainInput }: CustomFormProps) => {
  const { t } = useTranslation('global')
  const validations = FormValidations()
  
  const normFile = (e: any) => {
    const file = e.file

    if (file) {
      return file
    }

  }

  return (
    <Form form={form} layout="vertical" autoComplete="on">
      <Row gutter={[10, 10]}>
        {fields.map((field, index) => (
          <Col key={index} span={fields.length > 1 ? 12 : 24}>
            {field.name === 'image' ? (
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