import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom";
import { SmetaServices } from "../../Helpers/API";
import { URLS } from "../../Helpers/common";
import { ISmeta } from "../../Types/TodoTypes/Todo.interface";

export const useTodos = () => {
  const { isError, isLoading, data: todos } = useQuery(
    ["smeta", "list"],
    SmetaServices.getSmeta
  );
  return { isError, isLoading, todos };
}

export const useSmetaById = (id?: string) => {
  const {
    isError,
    isLoading,
    data: smeta
  } = useQuery(
    ["smeta", id], () => SmetaServices.getSmetaByID(id), {
    enabled: !!id
  }
  )
  return { isError, isLoading, smeta }
}
export const useAddSmeta = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate()

  const { isLoading, mutate } = useMutation(
    (data: ISmeta) =>
      SmetaServices.addSmeta(data),
    {
      onSuccess: (id) => {
        queryClient.refetchQueries(["smeta", "list"]);
        navigate(URLS.SMETA_ITEM_ID(id));
      },
    },
  )
  return { isLoading, mutate }
}