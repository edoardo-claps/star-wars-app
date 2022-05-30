import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import '../../languages/langConfig';
import {login, singup} from '../../store/actions';
export default ({navigation}) => {
  const [email, setemail] = useState({value: '', valid: true});
  const [password, setPassword] = useState({value: '', valid: true});
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const handlingError = e => {
    if (e.message == 'INVALID_EMAIL') {
      Alert.alert(t('sometingWasWrong'), 'Email address not valid', [
        {title: 'ok'},
      ]);
    } else if (e.message == 'MISSING_PASSWORD') {
      Alert.alert(t('sometingWasWrong'), 'Password not insert', [
        {title: 'ok'},
      ]);
    } else if (e.message == 'INVALID_PASSWORD') {
      Alert.alert(t('sometingWasWrong'), 'Password not valid', [{title: 'ok'}]);
    } else if (e.message == 'EMAIL_EXIST') {
      Alert.alert(t('sometingWasWrong'), 'Email address already used', [
        {title: 'ok'},
      ]);
    } else {
      Alert.alert(t('sometingWasWrong'), 'Email address already used', [
        {title: 'ok'},
      ]);
    }
  };

  const useLoginFormState = async () => {
    if (isSignUp) {
      //TODO: anticipare controlli mail e password
      if (email.value.includes('@') && email.value.includes('.')) {
        setemail({...email, valid: true});
        if (password.value.length >= 8) {
          setPassword({...password, valid: true});
          const body = JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          });
          const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsfUy-Dp3-M0QHhMgZGdhsWnsatPnJ4rw',
            {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: body,
            },
          );
          console.log(response);

          const data = response.json();
          dispatch(singup(data));
          singup(email.value, password.value);
        } else {
          setPassword({...password, valid: false});
        }
      } else {
        setemail({...email, valid: false});
      }
    } else {
      setLoading(true);
      try {
        const body = JSON.stringify({
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        });
        //TODO:axios
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsfUy-Dp3-M0QHhMgZGdhsWnsatPnJ4rw',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body,
          },
        );
        if (!response.ok) {
          setLoading(false);
          const data = await response.json();
          throw new Error(data.error.message);
        } else {
          const data = await response.json();

          dispatch(login(data));

          setLoading(false);
          navigation.navigate(t('list'));
        }
      } catch (e) {
        handlingError(e);
        console.log(e);
        console.log(e.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="25">
          <Text style={styles.headerText}>
            {isSignUp ? t('signUp') : t('login')}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>

            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                onChangeText={text => setemail({...email, value: text})}
                value={email.value}
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                textContentType="emailAddress"
              />

              {email.valid ? (
                <Text></Text>
              ) : (
                <View style={styles.error}>
                  <Text style={styles.errorText}>!</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>

            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={text => setPassword({...password, value: text})}
                value={password.value}
                textContentType="password"
                keyboardType="default"
                onEndEditing={useLoginFormState}
              />
              {password.valid ? (
                <Text></Text>
              ) : (
                <View style={styles.error}>
                  <Text style={styles.errorText}>!</Text>
                </View>
              )}
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="small" color="yellow" />
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => useLoginFormState()}>
              <Text style={styles.buttonText}>
                {isSignUp ? t('signUp') : t('login')}
              </Text>
            </TouchableOpacity>
          )}
          <View>
            <Text>
              {isSignUp ? t('alreadyRegistered') : t('whantRegister')}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setIsSignUp(prevstate => !prevstate)}>
              <Text style={styles.buttonText}>
                {isSignUp ? t('login') : t('signUp')}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  headerText: {
    color: '#353031',
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#f4f6f8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabel: {
    fontSize: 10,
    color: '#b4b6b8',
  },
  input: {
    color: '#353031',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 3,
    marginRight: 10,
    flex: 1,
  },
  error: {
    backgroundColor: '#cc0011',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
