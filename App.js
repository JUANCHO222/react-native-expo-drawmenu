import 'react-native-gesture-handler';
import { Button, View, Image, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign,MaterialIcons } from '@expo/vector-icons';
import PaginaInicial from './MyScreens/PaginaInicial';
import RegistrarPacientes from './MyScreens/RegistrarPacientes';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeIcon=()=><AntDesign name="home" size={24}></AntDesign>
const changeUIcon=()=><AntDesign name="addusergroup" size={24}></AntDesign>
const SupportIcon=()=><MaterialIcons name="support-agent" size={24}></MaterialIcons>
const LogoutIcon=()=><MaterialIcons name="logout" size={24}></MaterialIcons>

function cambiarUsuario() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cambiar de usuario!</Text>
    </View>
  );
}
function soportePantalla() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor:"#fff",
          width:250
        },
        headerStyle:{
          backgroundColor:"#4D82BC",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight:"bold"
        },
        drawerActiveTintColor:"#4D82BC",
        drawerLabelStyle:{
          color:"black"
        }
      }}>
        <Drawer.Screen name="Pagina Inicial" component={PaginaInicial} options={{drawerIcon:HomeIcon}} />
        <Drawer.Screen
            name="Registrar Pacientes"
            component={RegistrarPacientes}
            options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})}
        />
        <Drawer.Screen name="Cambiar de usuario" component={cambiarUsuario} options={{drawerIcon:changeUIcon}}/>
        <Drawer.Screen name="Soporte Técnico" component={soportePantalla} options={{drawerIcon:SupportIcon}}/>
        <Drawer.Screen name="Cerrar cesion" component={soportePantalla} options={{drawerIcon:LogoutIcon}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}