import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const index = () => {
  // Dummy data
  const user = {
    name: "John Doe",
    rank: 1,
    photo: require("../../assets/photo.png"),
  };
  const pieData = [
    { key: 1, value: 50, svg: { fill: "#600080" } },
    { key: 2, value: 30, svg: { fill: "#9900cc" } },
    { key: 3, value: 20, svg: { fill: "#c61aff" } },
  ];
  const listData = [
    { key: "1", title: "Item 1" },
    { key: "2", title: "Item 2" },
    { key: "3", title: "Item 3" },
  ];

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.rank}>Rank: {user.rank}</Text>
        </View>
        <Image source={user.photo} style={styles.photo} />
      </View>

      {/* Middle Section */}
      <View style={styles.middleSection}>
        {/* Middle section intentionally left blank */}
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#f8f8ff",
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 16,
    borderWidth: 2,
    borderColor: "#d1c4e9",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  userInfo: {
    flex: 1,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  rank: {
    fontSize: 16,
    color: "#888",
  },
  middleSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomSection: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fafaff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: "hidden",
    marginTop: 8,
  },
  listContent: {
    padding: 16,
  },
  listItem: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  listItemTitle: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
  separator: {
    height: 8,
  },
});
