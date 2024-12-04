import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

function App() {
  const [peso, onChangePeso] = React.useState("");
  const [altura, onChangeAltura] = React.useState("");
  const [imc, calcIMC] = React.useState("");
  var [defIMC, defineIMC] = React.useState("");

  const handleEnviar = () => {
    const pesoFormat = parseInt(peso);
    const alturaFormat = parseInt(altura) / 100;
    const imc = pesoFormat / (alturaFormat * alturaFormat);
    const imcFormatado = new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 2,
    }).format(imc);
    calcIMC(imcFormatado);
    if (imc < 18.5) {
      defIMC = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      defIMC = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      defIMC = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
      defIMC = "Obesidade I";
    } else if (imc >= 35 && imc < 39.9) {
      defIMC = "Obesidade II";
    } else {
      defIMC = "Obesidade III";
    }
    defineIMC(defIMC);
    onChangePeso("");
    onChangeAltura("");
  };
  return (
    <View style={styles.main}>
      <View style={styles.formMain}>
        <Text style={styles.titulo}>Calculadora IMC</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Insira seu peso (kg)</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePeso}
            value={peso}
            placeholder="45..."
            keyboardType="numeric"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Insira sua altura (cm)</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAltura}
            value={altura}
            placeholder="158..."
            keyboardType="numeric"
          />
        </View>
        <Button title="Enviar" onPress={handleEnviar} />
        <Text style={styles.output}>Seu imc é: {imc}</Text>
        <Text style={styles.output}>Sua definição é: {defIMC}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "60%",
    height: "80%",
    marginLeft: "20%",
    marginRight: "20%",
  },

  form: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: "10%",
  },

  formMain: {
    flex: 1,
    justifyContent: "center",
    width: "70%",
    height: "80%",
    marginLeft: "15%",
    marginRight: "15%",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
  },

  input: {
    height: "5%",
    width: "50%",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    padding: "2.5%",
    placeholderTextColor: "#C0C0C0",
  },

  label: {
    marginRight: "5%",
    width: "45%",
    alignItems: "left",
    fontSize: 18,
    fontWeight: "bold",
  },

  output: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "5%",
    textAlign: "center",
  },
});
export default App;
