import { NavigationContainer } from '@react-navigation/native'

import DrawerRoutes from './drawer.routes'
import { StatusBar } from 'expo-status-bar'

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <DrawerRoutes />
    </NavigationContainer>
  )
}
