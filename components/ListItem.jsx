import { Pressable, StyleSheet, Text, View } from "react-native";
import react from "react";

const ListItem = ({ item }) => {
    const { cantidad, name, type} = item;
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{name}{cantidad}{type}</Text>
        </View>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    item: {
        backgroundColor: '#f9c2ff',
        width: '50%',
        height: '50%',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 124,
    }
})

export default ListItem