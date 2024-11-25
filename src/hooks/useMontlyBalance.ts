import { formatCurrency } from "@/helpers/formatCurrency";
import { selectMonthlyBalance } from "@/store/budget/monthlyBalanceSelector";
import { useSelector } from "react-redux";

const useMonthlyBalance = () => {
  const { monthlyBalance } = useSelector(selectMonthlyBalance);

  return {
    monthlyBalance
  };
};

export default useMonthlyBalance;
