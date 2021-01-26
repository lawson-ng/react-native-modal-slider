import * as React from 'react'
import {
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
    Text,
    FlatList,
} from 'react-native'
import SliderImage from './components/SliderImage'
import Counter from './components/Counter'

interface DataSlider {
    src: string,
    name?: string,
}

interface SliderModalProps {
    isVisible: true | false,
    data: Array<DataSlider>,
    initialIndex?: number,
    toggleVisiable?: any,
}


const SliderModal: React.FunctionComponent<SliderModalProps> = (props) => {
    const {
      data = [],
      isVisible = false,
      toggleVisiable,
      initialIndex = 0,
    } = props
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const indexRef = React.useRef(currentIndex)
    indexRef.current = currentIndex

    const onScroll = React.useCallback((event) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setCurrentIndex(roundIndex);
      }
    }, []);
    return (  
      <Modal
        animationType="fade"
        visible={isVisible}
      >
        <View style={styles.container} >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.btnCloseModal}
              onPress={toggleVisiable}
            >
              <Text style={{color: 'white'}}>x</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{flex: 1}}>
            <FlatList
              pagingEnabled={true}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index}: any) => <SliderImage key={index} src={item.src}/>}
              onScroll={onScroll}
            />
          </View>

          <View style={styles.bottom}>
            <Counter 
              currentIndex={currentIndex + 1}
              totalImage={data.length}
            />
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    opacity: 0.4
  },
  btnCloseModal: {
    alignSelf: "flex-end",
    right: 10,
    bottom: 20,
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default SliderModal