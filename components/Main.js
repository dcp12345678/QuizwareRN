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


class Main extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Quizware',
    headerStyle: { backgroundColor: 'steelblue' },
    headerTitleStyle: { color: 'darkblue', fontSize: Platform.OS === 'ios' ? 18 : 20, },
    headerLeft: (<View></View>
    ),
    headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          style={{
            borderRadius: 20,
          }}
          underlayColor='#578dba' onPress={() => { navigation.state.params.createQuizOnPress(); }}>
          <MaterialIcon name='add-circle-outline' color='white' size={30} style={{ alignSelf: 'center', marginLeft: 5, marginTop: 5, marginBottom: 5, marginRight: 5 }} />
        </TouchableHighlight>
      </View>
    ),
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // wire up the navigation parameters
    this.props.navigation.setParams(
      {
        createQuizOnPress: this.createQuizOnPress
      }
    );
  }

  createQuizOnPress = () => {
    this.props.navigation.navigate('CreateQuiz',
      {
        quizId: -1,
      });
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'lightsteelblue' }}>
        <Text>Display current quizzes here</Text>
      </View>
    );
  }
};

export default Main;
