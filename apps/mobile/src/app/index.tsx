<<<<<<< HEAD
// import React, { useState } from 'react';
// import { Select } from '@mobile/components/ui/select';

//   const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//   ];

//   const Index = () => {
//     const [value, setValue] = useState<string | null>(null);
//     const Placeholderstyle=
//     return (
//       <Select
//         data={data}
//         search
//        labelField="label"
//         valueField="value"
//         placeholder="Select item"
//         searchPlaceholder="Search..."
//         rounded
//         value={value}
//         onChange={item => {
//           setValue(item.value);
//         }}
       
//       />
//     );
//   };

//   export default Index;



// AutreComposant.tsx
import React from "react";
import { View, Text } from "react-native";
import { Timeline } from "@mobile/components/ui/timeline"; // Assurez-vous d'ajuster le chemin correctement



const YourParentComponent: React.FC = () => {
  const timelineData= [
    {  title: "Event 1", description: "Event 1 Description" },
    { title: "Event 2", description: "Event 2 Description" },
    {  title: "Event 3", description: "Event 3 Description" },
    {  title: "Event 4", description: "Event 4 Description" },
    { title: "Event 5", description: "Event 5 Description" }
  ];

  return (
    <View>
   
      <Timeline
      
        variant="primary"
        data={timelineData}
        circleColor="#ff5722"
        lineColor="#009688"
      />
    </View>
=======
import { useState } from "react";
import { Image, Text, View, useWindowDimensions,ScrollView  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Button } from "@mobile/components/ui/button";
import { Card } from "@mobile/components/ui/card";
import { Avatar } from "@mobile/components/ui/avatar";
import { Input } from "@mobile/components/ui/input";
import { Radio } from "@mobile/components/ui/radio";
import { Modal } from '@mobile/components/ui/modal';
import { SceneMap, TabBar } from "react-native-tab-view";
import { Tab } from "@mobile/components/ui/tab";
import {Load} from "@mobile/components/ui/load"; 
import React from "react";


 //definition related to tab
 const Colis = () => <View className="text-black" />;

 const Adresses = () => <View/>;
 
 const Tarifs = () => <View/>;
 
 const Compte = () => <View/>;
 
 
 const renderScene = SceneMap({
   first: Colis,
   second: Adresses,
   third: Tarifs,
   fourth: Compte,
 });

 const renderTabBar: React.FC<any> = ({ ...props }) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'red', }}
    style={{ backgroundColor: 'white', height: 40 }}
    renderLabel={({ route, focused, color }) => (
      <View>
        <Text
          style={{
            color: focused ? 'black' : 'grey',
            fontSize: 14,
            marginVertical: 1,
            fontWeight: 'bold',
          }}
        >
          {route.title}
        </Text>
      </View>
    )}
  />
);

export default function Index() {
  //define constate for component card text
  const[trajet,setTrajet]=useState([
    {
      depart: "Chine",
      arrive: "Cotonou",
      code:"BN7530245",
      contenu:"Chaussure de sport bleu Adidas Air Max pointure 42"
    },
    ])

  //define constate for component input text
  const [inputValue, setInputValue] = useState("");

  //define function to render the input text
  const handleInputChange = (text: string) => {
    console.log(text);
      setInputValue(text);
    };

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState: boolean) => !previousState);
  };
    
  //define modal constante
  const [modalVisible, setModalVisible] = useState(false);

 
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "first", title: "Mes colis", icon: "" },
    { key: "second", title: "Adresses", icon: "" },
    { key: "third", title: "Tarifs", icon: "" },
    { key: "fourth", title: "Compte", icon: "" },
  ];

  //define cosntance for loader component 

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (

    <ScrollView className="bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      {
        !refreshing && <>
           <View className="h-full w-full bg-background p-4">
      
      <Text className="pb-2 text-center text-5xl font-bold text-foreground">
        Test
      </Text>

      <Button className="m-2" onPress={() => console.log("Button pressed")}>
        <Text>Press me</Text>
      </Button>

      <Card className="m-2">
      {trajet.map((item, index) => (
        
        <View key={index} >
          <View style={{flexDirection:"row",marginTop:10,marginStart:10}}>
            <Text style={{}} >{item.depart}</Text>
              <Text>{item.arrive}</Text>
              <Text style={{ marginHorizontal:120}}>{item.code}</Text>
          </View> 
          <View>
            <Text style={{textAlign:"center",marginTop:20,fontSize:18,fontWeight:"bold", }} numberOfLines={2}>{item.contenu}</Text>
          </View>
        </View>
      
        ))}
        
      </Card>
      
      
      <View style={{backgroundColor:'#fff', height:100, width:100, margin:10, borderRadius:50}}>

          <Avatar
            size="large"
            source
             />
        </View>


        <Input className="h-full w-full bg-background"
          size="medium" 
          variant="primary"
          rounded
          value={inputValue}
          placeholder="Name"
          onChangeText={handleInputChange}
          
        />
      
      
      <View>
          <Radio 
            size="small"
            trackColor={{ false: '#767577', true: '#24cf2a' }}
            thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            disabled = {false}
            value={isEnabled}
          />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Modal
          size="small"
          variant="secondary"
          visible={modalVisible}
          animationType="fade"
          transparent = {true}
          onRequestClose={() => {
            console.log('Modal has been closed.');
            setModalVisible(!modalVisible);}}
        >
          <View style={{ marginTop:40, paddingTop: 90, paddingLeft:20, paddingRight:20,  paddingBottom:20, borderRadius:20, borderWidth:1, borderColor:'transparent', height:'100%', backgroundColor:'#ffffff'}}>
            <Text style={{ textAlign: 'center' }}>
            <Text className="mb-4 text-4xl font-extrabold  text-gray-900 ligth:text-black">Privacy Policy</Text>
               
            <Text className="">  Last updated: June 30, 2022 </Text>

                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.

                Interpretation and Definitions

                Interpretation
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plura
           
           
             </Text>
             <Button variant="primary"  className="m-2 flex items-center w-[100%] left-4 justify-center absolute bottom-16" size={"large"} rounded={5} >
              <Text>Accepter</Text>
            </Button>
            <Button variant="secondary"  className="m-2 w-[50px] h-[50px] flex items-center justify-center absolute top-2 left-2 z-index-90" size={"small"} rounded={50} onPress={() => setModalVisible(false)}>
              <Text>X</Text>
            </Button>

          </View>

        </Modal>
    
        <Button variant="tertiary" className="m-2" size={"large"} onPress={() => setModalVisible(true)}>
            <Text>Press me</Text>
        </Button>
        
      </View>
      
          
      <Tab
      size="small"
      variant="primary"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      renderTabBar={renderTabBar}
    />
    
      
    </View>
        </>
      }
        <Load size="small"  
      onRefresh={onRefresh}
       refreshing={refreshing} />

      

      
    </ScrollView>
    
>>>>>>> 9d596cad6c2d747a1ecb33ecc7a2a038fa3ec101
  );
};

export default YourParentComponent;
