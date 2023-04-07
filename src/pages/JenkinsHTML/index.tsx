// import Guide from '@/components/Guide';
// import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { MicroApp } from '@umijs/max';
// import styles from './index.less';

const JenkinsHTMLPage: React.FC = () => {
  // const { name } = useModel('global');
  return (
    <PageContainer ghost>
     <MicroApp name="jenkinsHTML" />
    </PageContainer>
  );
};

export default JenkinsHTMLPage;
