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
