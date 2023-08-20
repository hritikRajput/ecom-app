import { useContext } from "react";
import { FilterContext } from "./FilterContext";

const useFilter = () => useContext(FilterContext);

export default useFilter;
