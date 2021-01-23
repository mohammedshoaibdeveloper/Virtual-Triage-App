import React,{useState} from 'react';
import {Alert,View , Text,StyleSheet,SafeAreaView} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';



const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
    signin: {
    width: 300,
    height: 54,
    padding: 10,

    borderRadius:10,

    backgroundColor:'#c53ae8'



  },
  });

  const CELL_COUNT = 6;

  const otpverification = (data) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const { result }  = data.route.params;


    const save_data=()=>{




      // Alert.alert('Credentials', `${username} + ${password}`);

      var formdata = new FormData();
      formdata.append("Full_Name", result.Full_Name );
      formdata.append("Username", result.Username);
      formdata.append("Mobile_Number", result.Mobile_Number);
      formdata.append("Password", result.Password);
      formdata.append("ohip_number", result.ohip_number);
      formdata.append("date_of_issue", result.date_of_issue);
      formdata.append("date_of_expiry", result.date_of_expiry);
      formdata.append("otp",result.otp );
      formdata.append("otpdata",value );
      formdata.append("ohip_Status", result.ohip_Status);
      formdata.append("Email", result.Email);
      formdata.append("Sender_ID","dCCqEA1dRbyN_9YmWCRDDD:APA91bGpyATcY7d-IH2ksllRzmWuOWk7fn1HsHD71kQWdaPiYxqHYCsbbqKdVL1pjoSf4wRtzzgoctlf0d6LXwNbC03b3f7g__tW2GSKaBIzdAvYpbXf-07bMYzCq5XWVfCxqppacAGL");
      formdata.append("Device_type", "android");
      formdata.append("First_Name", result.First_Name);
      formdata.append("Last_Name", result.Last_Name);

      console.log(formdata);

          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };

          fetch("https://www.virtualtriage.ca/Ear_HEaalth_Api/otp_Verification", requestOptions)
            .then(response => response.json()

            )
            .then(result => {console.log("my result is",result)


            if(result.status == true){
              data.navigation.navigate("signin",{result})
              console.log("my result is",result)
              Alert.alert(result.message);
            }
            else{
              Alert.alert(result.message);
            }


          })
            .catch(error => console.log('error', error));




          }




    return (
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Verification</Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>

          )}

        />

            <View style={{bottom: 10,position:'absolute',alignSelf:'center'}}>


            <Button style={styles.signin} mode="contained"title="LOGIN"
            onPress={save_data}


            ><Text style={{letterSpacing:4.5,color:'white',fontWeight:'bold'}}>Verify</Text></Button>

        </View>

      </SafeAreaView>

    );
  };
export default otpverification
