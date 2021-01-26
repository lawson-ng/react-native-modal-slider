import * as React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const width =  Math.round(Dimensions.get('window').width)

export interface ImageProps{
  src: string,
  resizeModes?:  "center" | "contain" | "cover" | "repeat" | "stretch",
}
const SliderImage: React.FunctionComponent<ImageProps> = (props) => {
  const {
    resizeModes = "contain"
  } = props
  return (
      <Image 
        style={style.image} 
        source={{ uri: props.src }}
        resizeMode={resizeModes}
      />
  );
};

const style = StyleSheet.create({
  image: {
    width,
    height: '100%',
  }
})
export default SliderImage