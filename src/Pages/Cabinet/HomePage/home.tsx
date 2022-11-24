import { HomeList } from './HomeList';
import { useTodos } from '../../../Hooks/useTodos/Todos';
import { Error } from '../../../Components/common/ErrorPage';
import { LoadingPage } from '../../../Components/common/Loading';

export const Home = () => {
  const { isError, isLoading, todos } = useTodos();

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {todos?.map((item, index) => (
        <div key={index + 'todos'}>
          <HomeList {...item} />
        </div>
      ))}
    </div>
  );
};
