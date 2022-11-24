import React from 'react';
import { useParams } from 'react-router-dom';
import { useSmetaById, useTodos } from '../../../Hooks/useTodos/Todos';

export const SmetaItem = () => {
  const params = useParams<string>();
  const { smeta, isError, isLoading } = useSmetaById(params.id);
  
  return (
    <div>
      {smeta?.map((item) => {
        return (
          <div>
            <p>{item.author} author:</p>
            <p>{item.title} title:</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};
