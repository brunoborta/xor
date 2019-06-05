// importa o brain
import brain from 'brain.js';

// Cria a rede neural
const net = new brain.NeuralNetwork();

// Treina
console.log("TRAINANDO...");
net.train(
    [{input: [0, 0], output: [0]},
     {input: [0, 1], output: [1]},
     {input: [1, 0], output: [1]},
     {input: [1, 1], output: [0]}], {iterations: 300000, errorThresh: 0.000005, log: true});

// Executa
console.log("EXECUTANDO...")
console.log(net.run([0, 0])); // [0]
console.log(net.run([0, 1])); // [1]
console.log(net.run([1, 0])); // [1]
console.log(net.run([1, 1])); // [0]