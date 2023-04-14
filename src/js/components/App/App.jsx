import React, { useState } from 'react';

import plusIcon from '../../../assets/Plus.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Empty from '../Empty';

const App = () => {
  const [isMain, setIsMain] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    setIsMain(false);
    setIsDetail(true);
    setIsEdit(true);
  };

  return (
    <>
      <Navigation isMain={isMain} isDetail={isDetail} isSearch={isSearch} isEdit={isEdit} />
      {!isDetail && <Empty isSearch={isSearch} />}
      {isMain && <Button handler={handleAdd} text="Add Note" icon={plusIcon} isFloat />}
    </>
  );
};

export default App;
