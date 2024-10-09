import { memo } from "react";
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
const Footer: React.FC = memo(() => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Tricorder Support'
  });
  const currentYear = new Date().getFullYear();
  return <DefaultFooter style={{
    background: 'none'
  }} copyright={`${currentYear} ${defaultMessage}`} links={[]} />;
});
export default Footer;