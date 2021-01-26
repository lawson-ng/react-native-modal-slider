import * as React from 'react';
import { 
    Text, 
    StyleSheet 
} from 'react-native';


interface CounterProps{
    totalImage?: number,
    currentIndex: number,
}
const Counter: React.FunctionComponent<CounterProps> = (props) => {
    return (
        <Text style={styles.counter}>{props.currentIndex} / {props.totalImage}</Text>
    );
};

const styles = StyleSheet.create({
    counter: {
        color: 'grey',
        fontWeight: 'bold',
        marginVertical: 10,
    }
})

export default Counter