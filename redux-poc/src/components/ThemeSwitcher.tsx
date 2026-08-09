import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { type RootState } from "../redux/store";

function ThemeSwitcher() {
  const mode = useSelector(
    (state: RootState) => state.theme.mode
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Current Theme: {mode}</h2>

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;