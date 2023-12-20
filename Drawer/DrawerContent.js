import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";


function DrawerContent(props){
    return (
        <View style={{flex: 1}}>
          <DrawerContentScrollView>
            <View style={styles.drawerContent}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.userInfoSection}>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <View style={{marginleft: 10, flexDirection: 'column'}}>
                      <Title style={styles.title}>Adarsh</Title>
                      <Text style={styles.caption} numberOfLines={1}>
                        adarshthakur210@gmail.com
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        </View>
      );
}

export default DrawerContent;
