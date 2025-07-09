import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type LeaderboardEntry = {
  name: string;
  points: number;
};

const leaderboardData: LeaderboardEntry[] = [
  { name: "Alice", points: 1500 },
  { name: "Bob", points: 1400 },
  { name: "Charlie", points: 1300 },
  { name: "David", points: 1200 },
  { name: "Eva", points: 1100 },
  { name: "Frank", points: 1000 },
  { name: "Grace", points: 900 },
  { name: "Hank", points: 800 },
];

const getBackgroundColor = (index: number): string => {
  switch (index) {
    case 0:
      return "#FFD700"; // Gold
    case 1:
      return "#C0C0C0"; // Silver
    case 2:
      return "#CD7F32"; // Bronze
    default:
      return "#F5F5F5";
  }
};

const Leaderboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      <FlatList
        data={leaderboardData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item, index }) => {
          const backgroundColor = getBackgroundColor(index);

          return (
            <View style={[styles.item, { backgroundColor }]}>
              <Text style={styles.rank}>{index + 1}.</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.points}>{item.points} pts</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  rank: {
    fontWeight: "bold",
    fontSize: 18,
    width: 40,
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginLeft: 10,
  },
  points: {
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    marginLeft: 10,
  },
});

export default Leaderboard;
