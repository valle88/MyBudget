import { Pressable, StyleSheet, Text, View } from "react-native";
import react from "react";

const ListItem = ({ title}) => {

    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>

    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})

export default ListItem