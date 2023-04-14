import React from 'react';
import backIcon from '../../../assets/Back.svg';
import Button from '../Button';
import { getButtonicon, getButtontext } from './helpers';

const Navigation = ({
  isSearch, isMain, isDetail, isEdit,
}) => (
  <nav className="nav">
    {isMain && <h1 className="title">Notes</h1>}
    {isSearch && <input value="re" className="search__input" type="text" placeholder="Search by the keyword..." />}
    {isDetail && <Button icon={backIcon} text="Go Back" />}
    <Button
      isSearch={isSearch}
      icon={getButtonicon(isSearch, isDetail, isEdit)}
      text={getButtontext(isSearch, isDetail, isEdit)}
    />
  </nav>
);

export default Navigation;
