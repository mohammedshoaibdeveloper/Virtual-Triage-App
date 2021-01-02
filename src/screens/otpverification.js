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
   
  const CELL_COUNT = 5;

  const otpverification = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
   
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
        

            <Button style={styles.signin} mode="contained"title="LOGIN" onPress={()=>props.navigation.navigate("otpverification")}><Text style={{letterSpacing:4.5,color:'white',fontWeight:'bold'}}>Verify</Text></Button>

        </View>
        
      </SafeAreaView>
      
    );
  };
export default otpverification