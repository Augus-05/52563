import fs from 'fs';
import antlr4 from 'antlr4';

import * as MiniJavaScriptLexerModule from './generated/MiniJavaScriptLexer.js';
import * as MiniJavaScriptParserModule from './generated/MiniJavaScriptParser.js';
import CustomMiniJavaScriptVisitor from './CustomMiniJavaScriptVisitor.js';

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);

// === 1. ANÁLISIS LÉXICO ===
const lexer = new MiniJavaScriptLexerModule.default(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// === 2. TABLA DE LEXEMAS Y TOKENS ===
console.log("\n🔍 Tabla de lexemas - tokens:");
console.log("--------------------------------------");
console.log("Lexema\t\t→ Token");
console.log("--------------------------------------");
for (const token of tokens.tokens) {
  if (token.type > 0) {
    const tokenName = MiniJavaScriptLexerModule.default.symbolicNames[token.type];
    console.log(`${token.text}\t\t→ ${tokenName}`);
  }
}

// === 3. ANÁLISIS SINTÁCTICO Y ÁRBOL ===
const parser = new MiniJavaScriptParserModule.default(tokens);
parser.buildParseTrees = true;
const tree = parser.program();

if (parser._syntaxErrors > 0) {
  console.error("\n❌ Error de sintaxis detectado.");
} else {
  console.log("\n✅ Entrada válida sintácticamente.");

  // Mostrar árbol de análisis sintáctico
  const treeText = tree.toStringTree(parser.ruleNames);
  console.log("\n🌲 Árbol de análisis sintáctico:");
  console.log(treeText);

  // === 4. INTERPRETACIÓN ===
  console.log("\n🧠 Interpretación del código:");
  const visitor = new CustomMiniJavaScriptVisitor();
  visitor.visit(tree);
}
