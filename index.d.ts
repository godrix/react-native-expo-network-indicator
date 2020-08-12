interface NetworkStatusProps{
  message?:string;
  color?:string;
  colorText?:string;
  checkTime?:number;
}
 interface useNetworkAsyncProps{
  ipAddress?:string;
  netWorkState?:NetworkState;
  macAddress?:string;
}

 declare type NetworkState = {
  type?: NetworkStateType;
  isConnected?: boolean;
  isInternetReachable?: boolean;
};
declare enum NetworkStateType {
  NONE = "NONE",
  UNKNOWN = "UNKNOWN",
  CELLULAR = "CELLULAR",
  WIFI = "WIFI",
  BLUETOOTH = "BLUETOOTH",
  ETHERNET = "ETHERNET",
  WIMAX = "WIMAX",
  VPN = "VPN",
  OTHER = "OTHER"
}

export function NetworkStatus({message, color, colorText, checkTime}:NetworkStatusProps):React.JSXElementConstructor;
export function useNetworkAsync():Promise<useNetworkAsyncProps>;
