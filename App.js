
import { View, Text, Button, StyleSheet, Alert, AppRegistry } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [turn, setTurn] = useState(0);
  const [cell1, setcell1] = useState('');
  const [cell2, setcell2] = useState('');
  const [cell3, setcell3] = useState('');
  const [cell4, setcell4] = useState('');
  const [cell5, setcell5] = useState('');
  const [cell6, setcell6] = useState('');
  const [cell7, setcell7] = useState('');
  const [cell8, setcell8] = useState('');
  const [cell9, setcell9] = useState('');
  const [winner, setwinner] = useState('');


  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);
  const [isDisabled5, setIsDisabled5] = useState(false);
  const [isDisabled6, setIsDisabled6] = useState(false);
  const [isDisabled7, setIsDisabled7] = useState(false);
  const [isDisabled8, setIsDisabled8] = useState(false);
  const [isDisabled9, setIsDisabled9] = useState(false);
 
  const data = [
    cell1,
    cell2,
    cell3,
    cell4,
    cell5,
    cell6,
    cell7,
    cell8,
    cell9,
  ];
  useEffect(() => {
    console.log("update"+ data[0])
    const fetchData = async () => {
       
      if(isDisabled1==true&&isDisabled2==true &&isDisabled3==true &&isDisabled4==true   &&isDisabled5==true&&isDisabled6==true &&isDisabled7==true &&isDisabled8==true&&isDisabled9==true){
       
        setwinner("Its a draw")
      }
      if(data[0]=='x'&&data[1]=='x'&&data[2]=='x'){
        console.log("player 1 Win")
        showinner("player 1 Win")
      }
      if(data[0]=='o'&&data[1]=='o'&&data[2]=='o'){
        console.log(" player 2 Win")
       showinner("player 2 Win")
      }

      if(data[3]=='x'&&data[4]=='x'&&data[5]=='x'){
        console.log(" player 1 Win")
       
        showinner("player 1 Win")
      }
      if(data[3]=='o'&&data[4]=='o'&&data[5]=='o'){
        console.log(" player 2 Win")
        
        showinner("player 2 Win")
      }

      if(data[6]=='x'&&data[7]=='x'&&data[8]=='x'){
        console.log(" player 1 Win")
        
        showinner("player 1 Win")
      }
      if(data[6]=='o'&&data[7]=='o'&&data[8]=='o'){
        console.log(" player 2 Win")
        
        showinner("player 2 Win")
      }

      if(data[0]=='x'&&data[4]=='x'&&data[8]=='x'){
        console.log(" player 1 Win")
       
        showinner("player 1 Win")
      }
      if(data[0]=='o'&&data[4]=='o'&&data[8]=='o'){
        console.log(" player 2 Win")
        
        showinner("player 2 Win")
      }

      if(data[2]=='x'&&data[4]=='x'&&data[6]=='x'){
        console.log(" player 1 Win")
        
        showinner("player 1 Win")
      }
      if(data[2]=='o'&&data[4]=='o'&&data[6]=='o'){
        console.log(" player 2 Win")
      
        showinner("player 2 Win")
      }

      if(data[0]=='x'&&data[3]=='x'&&data[6]=='x'){
        console.log(" player 1 Win")
        
        showinner("player 1 Win")
      }
      if(data[0]=='o'&&data[3]=='o'&&data[6]=='o'){
        console.log(" player 2 Win")
    
        showinner("player 2 Win")
      }
      if(data[1]=='x'&&data[4]=='x'&&data[7]=='x'){
        console.log(" player 1 Win")
        
        showinner("player 1 Win")
      }
      if(data[1]=='o'&&data[4]=='o'&&data[7]=='o'){
        console.log(" player 2 Win")
      
        showinner("player 2 Win")
      }
      if(data[2]=='x'&&data[5]=='x'&&data[8]=='x'){
        console.log(" player 1 Win")
      
        showinner("player 1 Win")
      }
      if(data[2]=='o'&&data[5]=='o'&&data[8]=='o'){
        console.log(" player 2 Win")
      
        showinner("player 2 Win")
      }

     

    
    };

    fetchData(); 
  },[turn] ); 
  
  const showinner = (winner) => {
   setwinner(winner)
   disableAllCells()
   
  };
  const changeturn = () => {
    if(turn=="0"){
      setTurn("1")
    }
    else{
      setTurn("0")
    }
   
  };
  const disableAllCells = () => {
     setIsDisabled1(true);
     setIsDisabled2(true);
     setIsDisabled3(true);
     setIsDisabled4(true);
     setIsDisabled5(true);
     setIsDisabled6(true);
     setIsDisabled7(true);
     setIsDisabled8(true);
     setIsDisabled9(true);
   
  };
  const handlePress1 = () => {
    changeturn()
    if(turn==0){
      setcell1("x")
    }
    if(turn=="1"){
      setcell1("o")
    }
    setIsDisabled1(true)
   
  };
  const handlePress2 = () => {
    changeturn()
    if(turn==0){
      setcell2("x")
    }
    if(turn=="1"){
      setcell2("o")
    }
    setIsDisabled2(true)
  };
  const handlePress3 = () => {
    changeturn()
    if(turn==0){
      setcell3("x")
    }
    if(turn=="1"){
      setcell3("o")
    }
    setIsDisabled3(true)
   
  };
  const handlePress4 = () => {
    changeturn()
    if(turn==0){
      setcell4("x")
    }
    else{
      setcell4("o")
    }
    setIsDisabled4(true)
  };
  const handlePress5 = () => {
    changeturn()
    if(turn==0){
      setcell5("x")
    }
    else{
      setcell5("o")
    }
    setIsDisabled5(true)
  };
  const handlePress6 = () => {
    changeturn()
    if(turn==0){
      setcell6("x")
    }
    else{
      setcell6("o")
    }
    setIsDisabled6(true)
    
  };
  const handlePress7 = () => {
    changeturn()
    if(turn==0){
      setcell7("x")
    }
    else{
      setcell7("o")
    }
    setIsDisabled7(true)
    
  };
  const handlePress8 = () => {
    changeturn()
    if(turn==0){
      setcell8("x")
    }
    else{
      setcell8("o")
    }
    setIsDisabled8(true)
  };
  const handlePress9 = () => {
    changeturn()
    if(turn==0){
      setcell9("x")
    }
    else{
      setcell9("o")
    }
    setIsDisabled9(true)
    
  };
  const Restart= () => {
   setTurn(0);
    setcell1('');
    setcell2('');
     setcell3('');
   setcell4('');
   setcell5('');
    setcell6('');
    setcell7('');
     setcell8('');
     setcell9('');
  setwinner('');
  
  
    setIsDisabled1(false);
    setIsDisabled2(false);
     setIsDisabled3(false);
   setIsDisabled4(false);
    setIsDisabled5(false);
     setIsDisabled6(false);
     setIsDisabled7(false);
     setIsDisabled8(false);
    setIsDisabled9(false);
  };

  return (
    <View style={styles.pcontainer}>
          <Text style={{alignSelf:'top'}}>{winner}</Text>
      <View style={styles.container}>
    
      <Button  title={cell1 === '' ? '   ' : cell1} onPress={handlePress1} disabled={isDisabled1} />
      <Button  title={cell2 === '' ? '   ' : cell2} onPress={handlePress2}disabled={isDisabled2} />
      <Button title={cell3 === '' ? '   ' : cell3}  onPress={handlePress3}disabled={isDisabled3} />

    </View>

    <View style={styles.container}>
  
      <Button title={cell4 === '' ? '   ' : cell4}  onPress={handlePress4}disabled={isDisabled4} />
      <Button title={cell5 === '' ? '   ' : cell5}  onPress={handlePress5}disabled={isDisabled5} />
      <Button title={cell6 === '' ? '   ' : cell6} onPress={handlePress6}disabled={isDisabled6}/>

    </View>
    <View style={styles.container}>
     
      <Button title={cell7 === '' ? '   ' : cell7 } onPress={handlePress7}disabled={isDisabled7} />
      <Button title={cell8 === '' ? '   ' : cell8 } onPress={handlePress8}disabled={isDisabled8} />
      <Button title={cell9 === '' ? '   ' : cell9 } onPress={handlePress9}disabled={isDisabled9} />


    </View>
    <View style={{marginVertical:20}}>
    <Button title="Reset" onPress={Restart} />
    </View>
    
    </View>
    
  
    
  );
};

// Styles for the app
const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection:'row'
  },
  pcontainer: {
   flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5f5f5',
    
    // flexDirection:'row'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  cell: {
  
    width:5,
    height:5,
    
  },
});

export default App;



