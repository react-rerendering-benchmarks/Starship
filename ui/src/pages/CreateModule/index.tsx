import { PageContainer } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Card, Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { createModule } from '../../services/ant-design-pro/api';
import CollectorFileds from './CollectorFileds';
import EBPFCode from './EBPFCode';
import EventSize from './EventSize';
import FunctionName from './FunctionName';
import Kprobe from './Kprobe';
import ModuleName from './ModuleName';
import PerfBuffers from './PerfBuffers';
import WasmUpload from './WasmUpload';

const Code: React.FC = () => {
  const [form] = Form.useForm();
  const intl = useIntl();
  const [fileContent, setFileContent] = useState<any>([]);
  const onFinish = async (values: any) => {
    try {
      const params = {
        ebpf: {
          code: values.code,
          fmt: 0,
          lang: 0,
          probes: values.probes,
          perf_buffer_name: values.perfBuffers,
        },
        name: values.name,
        wasm: {
          code: fileContent,
          // TODO(zhoujie): fmt default value
          fmt: 0,
          fn_name: values.fn,
          // TODO(zhoujie): lang default value
          lang: 0,
          output_schema: {
            fields: values.schemaAttr,
          },
        },
      };
      const msg = await createModule(params);
      if (msg.code === 200) {
        message.success('success');
        history.push('/module-list');
        sessionStorage.setItem('codeCache', '');
      } else {
        message.error(msg.message);
      }
      return msg.data;
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('failed:', errorInfo);
  };

  useEffect(() => {
    const unlisten = history.listen(() => {
      // Every time the route changes, it will go here
      sessionStorage.setItem('codeCache', JSON.stringify(form.getFieldsValue()));
    });
    const beforeunloadCallback = (event: any = window.event) => {
      // This api has been abolished. It is only done for compatibility with some browsers
      event.returnValue = 'You might lost changes on this page';
      return event.returnValue;
    };
    // The beforeupload event will only be triggered if the user has mouse interaction on the current page
    window.addEventListener('beforeunload', beforeunloadCallback);
    return () => {
      unlisten();
      window.removeEventListener('beforeunload', beforeunloadCallback);
    };
  }, [form]);

  const readFileContent = (info: any) => {
    if (info.file.status === 'done') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrBuffer: any = e.target?.result;
        const uint8Array = new Uint8Array(arrBuffer);
        setFileContent(Array.from(uint8Array));
      };
      reader.readAsArrayBuffer(info.file.originFileObj);
    }
  };

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          initialValues={
            sessionStorage.getItem('codeCache')
              ? JSON.parse(sessionStorage.getItem('codeCache') || '{}')
              : {}
          }
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <ModuleName />
          <EBPFCode />
          <EventSize />
          <PerfBuffers />
          <Kprobe />
          <WasmUpload readFileContent={readFileContent} />
          <FunctionName />
          <CollectorFileds />
          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {intl.formatMessage({
                id: 'button.submit',
              })}
            </Button>
            <Button
              type="primary"
              onClick={() => {
                sessionStorage.setItem('codeCache', '');
                form.setFieldsValue({
                  name: null,
                  code: null,
                  eventSize: null,
                  perfBuffers: null,
                  probes: null,
                  fn: null,
                  wasm: null,
                  schemaName: null,
                  schemaAttr: null,
                });
              }}
              style={{
                marginLeft: 10,
              }}
            >
              {intl.formatMessage({
                id: 'button.clear',
              })}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default Code;