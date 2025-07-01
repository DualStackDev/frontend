import { View, StyleSheet, Text, Image } from "react-native";
import photo from "../../assets/photo.png";

const profile = () => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photoIcon} />
      <Text style={styles.name}>FULL NAME</Text>
      <Text style={styles.input}>email@domain.com</Text>
      <View style={styles.row}>
        <Text style={styles.halfInput}>PRN number</Text>
        <Text style={styles.halfInput}>Department</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  photoIcon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  name: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    textAlign: "center",
  },
});

export default profile;
