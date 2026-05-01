import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();
  
 React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.popTo('Home', { post: postText });
        }}
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }) {
  const navigation = useNavigation();

  /* 2. Get the param */
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
onPress={
          () =>
            navigation.setParams({itemId: Math.floor(Math.random() * 100),)}
      >
        Go to Details... again
      </Button>
    </View>
  );
}


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'Overview',
      },
    },
    Details: DetailsScreen,
  },
  Details: {
    screen: DetailsScreen,
    initialParams: { itemId: 42 },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
