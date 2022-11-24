import React from 'react';

import { ISmeta } from '../../../Types/TodoTypes/Todo.interface';

import styles from '../../../Styles/homeStyles/homeList.module.css';
import { Link } from 'react-router-dom';
import { URLS } from '../../../Helpers/common';

export const HomeList: React.FC<ISmeta> = ({ title, id }) => {
  return (
    <Link to={URLS.SMETA_ITEM_ID(id)}>
      
      <div className={styles['list_container']}>
        <h1>{title}</h1>
      </div>
    </Link>
  );
};
