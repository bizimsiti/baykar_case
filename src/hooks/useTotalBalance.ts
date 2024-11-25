import { formatCurrency } from "@/helpers/formatCurrency";
import { selectTotals } from "@/store/budget/totalBalanceSelector";
import { useSelector } from "react-redux";

const useBudgetTotals = () => {
  const { totalBalance } = useSelector(selectTotals);

  return {
    totalBalanceFormatted: formatCurrency(totalBalance),
    totalBalance
  };
};

export default useBudgetTotals;
