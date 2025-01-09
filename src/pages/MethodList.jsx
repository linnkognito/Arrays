import MethodCheatSheet from '../components/methods/MethodCheatSheet';
import PageNav from '../components/common/PageNav';
import methodList from '../dev-data/methodList.json';

function MethodList() {
  return (
    <>
      <PageNav />
      <MethodCheatSheet methodList={methodList} />
    </>
  );
}

export default MethodList;
