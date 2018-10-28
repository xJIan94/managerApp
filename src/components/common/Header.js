import React from 'react';
import { Platform, Text, View } from 'react-native';

// Make a Component

const Header = (props) => {
  const { textStyles, viewStyles } = styles;

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>

  );
};

const styles = {

  viewStyles: {
    justifyContent: 'center',
       alignItems: 'center',
       height: 60,
       backgroundColor: '#F8F8F8',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       position: 'relative',
       ...Platform.select({
           ios: {
               paddingTop: 15,
               shadowOpacity: 0.2
           },
           android: { elevation: 10 }
       })
  },
  textStyles: {
    fontSize: 20
  }

};
// Make the component available to other place

export { Header };
