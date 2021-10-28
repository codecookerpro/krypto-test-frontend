import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readTokens } from './actions';
import { Datatable } from './components';
import { ThunkDispatch } from "redux-thunk";

function App() {
  const dispatch: ThunkDispatch<RootState, any, TokenReadAction> = useDispatch();
  const tokens: ITokens = useSelector((state: RootState) => state.main.tokens);

  // eslint-disable-next-line
  useEffect(() => dispatch(readTokens()), []);

  return (
    <div className="App">
      <Datatable tokens={tokens} />
    </div>
  );
}

export default App;
