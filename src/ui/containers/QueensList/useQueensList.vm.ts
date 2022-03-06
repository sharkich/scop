import { getQueensApi } from '../../api/queens.api';
import { queenMap } from '../../services/mapping/queen.map';
import { useQueensStore } from '../../stores/hooks/useQueensStore';

export const useQueensListViewModel = () => {
  const queensStore = useQueensStore();
  const { queens } = queensStore;

  const loadQueens = async () => {
    const resp = await getQueensApi();
    const list = resp.queens.map(queenMap);
    queensStore.setList(list);
  };

  return {
    queens,
    loadQueens
  };
};
