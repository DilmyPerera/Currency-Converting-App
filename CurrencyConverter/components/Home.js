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
  return <View></View>;
}
