import MethodCheatSheet from '../components/MethodCheatSheet';
import PageNav from '../components/PageNav';
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
