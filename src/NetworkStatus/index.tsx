import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Network from 'expo-network';

export interface NetworkStatusProps{
  message?:string;
  color?:string;
  colorText?:string;
  checkTime?:number;
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

export const NetworkStatus: React.FC<NetworkStatusProps> = ({message='Internet connection has been lost!', color='red', colorText='#FFFFFF', checkTime=10000}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isOnline, setisOnline] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(async () => {
      const { isConnected } = await Network.getNetworkStateAsync();
      setisOnline(prev => prev !== isConnected ? isConnected : prev);
    }, checkTime);
    return () => {
      clearInterval(interval)
    }
  }, []);

  useEffect(()=>{
    if(!isOnline && isOnline !== undefined){
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

    },[isOnline]);

  return (
    <Animated.View style={{
      position: 'absolute',
      top: 0,
      zIndex:9999,
      width: '100%',
      height: 80,
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
        <MaterialCommunityIcons name="close-network-outline" size={26} color={colorText} />
        <Text style={{color: colorText, fontSize: 18}}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
})
