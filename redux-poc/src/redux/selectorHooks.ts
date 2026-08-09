import {
  useDispatch,
  useSelector,
} from "react-redux";

import type {
  SelectorEntityDispatch,
  SelectorEntityRootState,
} from "./selectorEntityStore";

export const useSelectorEntityDispatch =
  useDispatch.withTypes<SelectorEntityDispatch>();

export const useSelectorEntitySelector =
  useSelector.withTypes<SelectorEntityRootState>();