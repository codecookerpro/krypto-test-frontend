interface  IToken {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

interface ITokens {
  [addr: string]: IToken;
}

interface ITokenState {
  tokens: ITokens;
}

interface RootState {
  main: ITokenState;
}

type TokenReadAction = {
  type: string;
  tokens: ITokens;
}
