export interface HttpConfig {
  /** perfix */
  perfix?: string;
  /** method */
  method?: string;
  /** params */
  params?: any;
  headers?: { [key: string]: string };
  [x: string]: any;
}
