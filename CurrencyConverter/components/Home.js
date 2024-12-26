import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
} from "react-native";
import { Provider as PaperProvider, Appbar } from "react-native-paper";

export default function Home() {
  const [lkr, setLKR] = useState("");
  const [usd, setUSD] = useState(null);

  const exchangeRate = 0.0034;

  const ConverToUSD = () => {
    const lkrValue = parseFloat(lkr);
    if (!isNaN(lkrValue)) {
      setUSD((lkrValue * exchangeRate).toFixed(2));
    } else {
      setUSD(null);
    }
  };
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Currency Converter" />
        </Appbar.Header>
        <View style={styles.contentContainer}>
          <Text style={styles.label}>Enter amount in LKR:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={lkr}
            onChangeText={setLKR}
            placeholder="Enter LKR"
          />
          <Button title="Convert to USD" onPress={convertToUSD} />
          {usd !== null && (
            <Text style={styles.resultText}>Equivalent in USD: ${usd}</Text>
          )}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
