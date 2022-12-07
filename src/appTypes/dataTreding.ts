export interface IProductTrading {
    currencyGroup?: string;
    color?: string;
    currencySymbol: string;
    name?: string;
    logo?: string | null;
    decimal_point?: Number;
    listingDate?: string;
    wallets?: IWallet[];
  }
  
  export interface IWallet {
    currencyGroup?: string;
    tokenSymbol?: string;
    decimal_point?: number;
    tokenType?: string;
    blockchain?: string;
    explorer?: string;
    listingDate?: string;
    blockchainName?: string;
    logo?: string;
  }
  