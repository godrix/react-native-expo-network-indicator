import React, {  useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize'
import * as Network from 'expo-network';

import { useNetInfo } from '@react-native-community/netinfo';

export interface NetworkStatusProps{
  message?:string;
  color?:string;
  colorText?:string;
  icon?:'network-strength-off'|'close-network-outline'|'cloud-alert'|'alert-circle'|'alert';
  children:React.ReactNode;
}

export async function useNetworkAsync(){
  const netWorkState = await Network.getNetworkStateAsync();
  const ipAddress = await Network.getIpAddressAsync();
  const macAddress = await Network.getMacAddressAsync();

  return {
    netWorkState,
    ipAddress,
    macAddress,
  }

}

export const NetworkStatus: React.FC<NetworkStatusProps> = ({children,message='Internet connection has been lost!', color='red', colorText='#FFFFFF', icon='alert'}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { isConnected } = useNetInfo();

  useEffect(()=>{
    if(!isConnected){
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver:true
        },
      ).start();
    }else{
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver:true
        },
      ).start();
    }

    },[isConnected]);

  return (
    <>
    {children}
    <Animated.View style={{
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 99999,
      width: '100%',
      height: RFValue(80),
      backgroundColor: color,
      opacity: fadeAnim,
      transform: [{
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-150, 0]
        }),
      }],
    }}>
      <View style={styles.containerInfo}>
        <MaterialCommunityIcons name={icon} size={RFValue(26)} color={colorText} />
        <Text style={{color: colorText, fontSize: Platform.OS === 'ios' ? RFValue(16) : RFValue(14)}}>{message}</Text>
      </View>
    </Animated.View>

    </>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(50),
  },
})
