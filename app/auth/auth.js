import { AsyncStorage } from 'react-native';

export const USER_KEY = 'user-key';
export const USER_CITIZEN_ID = 'user-citizen';

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const saveUserCitizen = citizenId => AsyncStorage.setItem(USER_CITIZEN_ID, citizenId);

export const removeUserCitizen = AsyncStorage.removeItem(USER_CITIZEN_ID);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => new Promise((resolve, reject) => {
  AsyncStorage.getItem(USER_KEY)
    .then((res) => {
      if (res !== null) {
        resolve(true);
      } else {
        resolve(false);
      }
    })
    .catch(err => reject(err));
});

export const getUserCitizen = () => {
  const userCitizenId = AsyncStorage.getItem(USER_CITIZEN_ID);
  if (userCitizenId !== null) {
    return userCitizenId;
  } 
  return userCitizenId;
};
