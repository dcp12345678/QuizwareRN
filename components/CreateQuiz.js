import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
} from 'react-native';
import _ from 'lodash';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  textInput: {
    height: 40,
    fontSize: (Platform.OS === 'ios') ? 20 : 18,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 7,
    color: 'darkblue',
    paddingLeft: 7,
  },
});

class CreateQuiz extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Create New Quiz',
    headerStyle: { backgroundColor: 'steelblue' },
    headerTitleStyle: { color: 'darkblue', fontSize: Platform.OS === 'ios' ? 18 : 20, },
    headerLeft: (<View></View>
    ),
    headerRight: (
      <View></View>
    ),
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // wire up the navigation parameters
    this.props.navigation.setParams(
      {
      }
    );
  }

  nextOnPress = () => {
    Alert.alert('test message', `inside nextOnPress`);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightsteelblue', paddingTop: 30 }}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            onChangeText={(quizName) => this.setState({ quizName })}
            placeholder="Quiz Name" />
          <LinearGradient style={{ borderRadius: 5, alignSelf: 'stretch', marginTop: 20 }}
            colors={['#4c669f', '#3b5998', '#192f6a']} >
            <TouchableHighlight underlayColor='steelblue' onPress={this.nextOnPress}>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 5, marginTop: 5, marginBottom: 5 }}>Next</Text>
                <MaterialIcon name='arrow-forward' color='white' size={20} style={{ alignSelf: 'center', marginLeft: 5, marginTop: 5, marginBottom: 5 }} />
              </View>
            </TouchableHighlight>
          </LinearGradient>
        </View >
      </View >
    );
  }
};

export default CreateQuiz;
