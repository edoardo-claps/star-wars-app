import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import '../../languages/langConfig';
import { fetchForSingup } from '../../store/actions/authentication';
import {fetchForLogin} from '../../store/actions/authentication';
import {
  getError,
  getIsLoading,
  getSuccessLogin,
} from '../../store/selectors/authentication';

export default ({navigation}) => {
  const [email, setemail] = useState({value: '', valid: true});
  const [password, setPassword] = useState({value: '', valid: true});
  const [isSignUp, setIsSignUp] = useState(false);
  const {t} = useTranslation();
  const loadingLogin = useSelector(getIsLoading);
  const error = useSelector(getError);
  const success = useSelector(getSuccessLogin);

  const dispatch = useDispatch();

  const handlingError = e => {
    if (e == 'INVALID_EMAIL') {
      Alert.alert(t('sometingWasWrong'), t('notValidMail'), [
        {title: 'ok'},
      ]);
    } else if (e == 'MISSING_PASSWORD') {
      Alert.alert(t('sometingWasWrong'), t('passNotInsert'), [
        {title: 'ok'},
      ]);
    } else if (e == 'INVALID_PASSWORD') {
      Alert.alert(t('sometingWasWrong'), t('passNotValid'), [{title: 'ok'}]);
    } else if (e == 'EMAIL_EXIST') {
      Alert.alert(t('sometingWasWrong'), t('EmailAlreadyUsed'), [{title: 'ok'},]);
    } else if (e == 'EMAIL_NOT_FOUND') {
      Alert.alert(t('sometingWasWrong'), t('mailNotFound'), [
        {title: 'ok'},
      ]);
    } else {
      Alert.alert(t('sometingWasWrong'),t('unexpectedError'), [{title: 'ok'}]);
    }
  };

  const useLoginFormState = async () => {
    //TODO: anticipare controlli mail e password
    if (email.value.includes('@') && email.value.includes('.')) {
      setemail({...email, valid: true});

      if (password.value.length >= 8) {
        setPassword({...password, valid: true});
        if (isSignUp) {
          dispatch(
            fetchForSingup({email: email.value, password: password.value}),
          );
        } else {
          dispatch(
            fetchForLogin({email: email.value, password: password.value}),
          );
        }
      } else {
        setPassword({...password, valid: false});
      }
    } else {
      setemail({...email, valid: false});
    }
  };

  useEffect(() => {
    if (error) {
      handlingError(error);
    }
  }, [error]);

  useEffect(() => {
    if (!error) {
      if (success) {
        if(isSignUp){
            navigation.navigate(t('successfullySign_up'));
        }
        else{

          navigation.navigate(t('list'));
        }
      }
    }
  }, [success]);

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
          {loadingLogin ? (
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
