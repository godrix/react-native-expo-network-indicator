interface NetworkStatusProps{
  message?:string;
  color?:string;
  colorText?:string;
  icon?:'network-strength-off'|'close-network-outline'|'cloud-alert'|'alert-circle'|'alert';
  children:React.ReactNode;
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

export function NetworkStatus({message, color, colorText, children}:NetworkStatusProps):React.JSXElementConstructor;
export function useNetworkAsync():Promise<useNetworkAsyncProps>;
