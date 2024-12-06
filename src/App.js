import React from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const showAlert = (mensagem) => {
  Alert.alert("Entrada Inválida", mensagem, [
    { text: "Entendido", style: "cancel" },
  ]);
};

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, calcIMC] = React.useState("");
  const [defIMC, defineIMC] = React.useState("");

  const calcular = () => {
    const pesoFormat = parseFloat(peso);
    const alturaFormat = parseFloat(altura) / 100;

    if (isNaN(pesoFormat) || isNaN(alturaFormat)) {
      showAlert("Por favor, insira valores válidos para peso e altura.");
      setPeso("");
      setAltura("");
      console.log(`Error.`);
      return;
    }

    const imc = pesoFormat / (alturaFormat * alturaFormat);
    const imcFormatado = imc.toFixed(2);
    calcIMC(imcFormatado);

    var definicao = " ";
    if (imc < 18.5) {
      definicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      definicao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      definicao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      definicao = "Obesidade I";
    } else if (imc >= 35 && imc < 39.9) {
      definicao = "Obesidade II";
    } else {
      definicao = "Obesidade III";
    }
    defineIMC(definicao);
    setPeso("");
    setAltura("");
  };
  return (
    <View style={styles.main}>
      <View style={styles.formMain}>
        <Text style={styles.titulo}>Calculadora IMC</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Insira seu peso (kg)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="45..."
            keyboardType="numeric"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Insira sua altura (cm)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="158..."
            keyboardType="numeric"
          />
        </View>
        <View style={styles.output}>
          <Button title="Enviar" onPress={calcular} />

          <View style={styles.output_txt_conteiner}>
            <Text style={styles.output_txt}>Seu imc é: </Text>
            <Text style={styles.output_txt}>{imc}</Text>
          </View>
          <View style={styles.output_txt_conteiner}>
            <Text style={styles.output_txt}>Sua definição é: </Text>
            <Text style={styles.output_txt}>{defIMC}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  formMain: {
    width: "90%",
    maxWidth: 400,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
  },

  input: {
    height: 30,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 5,
    paddingHorizontal: 8,
    placeholderTextColor: "#C0C0C0",
    backgroundColor: "white",
  },

  label: {
    width: "50%",
    alignItems: "left",
    fontSize: 16,
    fontWeight: "bold",
  },

  output: {
    width: "100%",
  },

  output_txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "5%",
  },

  output_txt_conteiner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default App;
