import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const playerContext = createContext(null);

// eslint-disable-next-line react/function-component-definition
export const PlayerContextProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);

  const memoizedState = useMemo(() => ({ tracks, setTracks }), [tracks]);

  return (
    <playerContext.Provider value={memoizedState}>
      {children}
    </playerContext.Provider>
  );
};

const usePlayerContext = () => {
  const context = useContext(playerContext);

  return context;
};

export default usePlayerContext;

PlayerContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
