import { Text, View, StyleSheet } from "react-native";

export const Tasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tarea 1</Text>
      <Text style={styles.header}>Tarea 2</Text>
      <Text style={styles.header}>Tarea 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

});