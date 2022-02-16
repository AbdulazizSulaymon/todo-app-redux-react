import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "@types";

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.global.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header>
      <button
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => dispatch({ type: TOGGLE_THEME })}
      >
        {theme}
      </button>
    </header>
  );
}
