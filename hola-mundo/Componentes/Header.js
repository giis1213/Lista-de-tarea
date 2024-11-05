import { Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LISTA DE TAREAS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 100,
    },
    header: {
      fontSize: 30,
      fontWeight: "bold",
      color: "black",
    }
    
  });
  