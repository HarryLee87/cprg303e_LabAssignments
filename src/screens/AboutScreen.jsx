import MainLayout from '../layouts/MainLayout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <MainLayout>
      <SafeAreaView>
        <Button
          title="Go to HomeScreen"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default AboutScreen;
