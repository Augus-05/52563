// Generated from MiniJavaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,89,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,5,12,73,8,12,10,12,12,12,
76,9,12,1,13,4,13,79,8,13,11,13,12,13,80,1,14,4,14,84,8,14,11,14,12,14,85,
1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,
12,25,13,27,14,29,15,1,0,4,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,
1,0,48,57,3,0,9,10,13,13,32,32,91,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,
1,0,0,0,1,31,1,0,0,0,3,40,1,0,0,0,5,48,1,0,0,0,7,52,1,0,0,0,9,54,1,0,0,0,
11,56,1,0,0,0,13,58,1,0,0,0,15,60,1,0,0,0,17,62,1,0,0,0,19,64,1,0,0,0,21,
66,1,0,0,0,23,68,1,0,0,0,25,70,1,0,0,0,27,78,1,0,0,0,29,83,1,0,0,0,31,32,
5,102,0,0,32,33,5,117,0,0,33,34,5,110,0,0,34,35,5,99,0,0,35,36,5,116,0,0,
36,37,5,105,0,0,37,38,5,111,0,0,38,39,5,110,0,0,39,2,1,0,0,0,40,41,5,99,
0,0,41,42,5,111,0,0,42,43,5,110,0,0,43,44,5,115,0,0,44,45,5,111,0,0,45,46,
5,108,0,0,46,47,5,101,0,0,47,4,1,0,0,0,48,49,5,108,0,0,49,50,5,111,0,0,50,
51,5,103,0,0,51,6,1,0,0,0,52,53,5,40,0,0,53,8,1,0,0,0,54,55,5,41,0,0,55,
10,1,0,0,0,56,57,5,123,0,0,57,12,1,0,0,0,58,59,5,125,0,0,59,14,1,0,0,0,60,
61,5,46,0,0,61,16,1,0,0,0,62,63,5,59,0,0,63,18,1,0,0,0,64,65,5,44,0,0,65,
20,1,0,0,0,66,67,5,43,0,0,67,22,1,0,0,0,68,69,5,45,0,0,69,24,1,0,0,0,70,
74,7,0,0,0,71,73,7,1,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,
1,0,0,0,75,26,1,0,0,0,76,74,1,0,0,0,77,79,7,2,0,0,78,77,1,0,0,0,79,80,1,
0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,28,1,0,0,0,82,84,7,3,0,0,83,82,1,0,
0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,88,6,14,0,
0,88,30,1,0,0,0,4,0,74,80,85,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniJavaScriptLexer extends antlr4.Lexer {

    static grammarFileName = "MiniJavaScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'function'", "'console'", "'log'", "'('", 
                         "')'", "'{'", "'}'", "'.'", "';'", "','", "'+'", 
                         "'-'" ];
	static symbolicNames = [ null, "FUNCTION", "CONSOLE", "LOG", "LPAREN", 
                          "RPAREN", "LBRACE", "RBRACE", "DOT", "SEMICOLON", 
                          "COMMA", "PLUS", "MINUS", "Identifier", "Number", 
                          "WS" ];
	static ruleNames = [ "FUNCTION", "CONSOLE", "LOG", "LPAREN", "RPAREN", 
                      "LBRACE", "RBRACE", "DOT", "SEMICOLON", "COMMA", "PLUS", 
                      "MINUS", "Identifier", "Number", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiniJavaScriptLexer.EOF = antlr4.Token.EOF;
MiniJavaScriptLexer.FUNCTION = 1;
MiniJavaScriptLexer.CONSOLE = 2;
MiniJavaScriptLexer.LOG = 3;
MiniJavaScriptLexer.LPAREN = 4;
MiniJavaScriptLexer.RPAREN = 5;
MiniJavaScriptLexer.LBRACE = 6;
MiniJavaScriptLexer.RBRACE = 7;
MiniJavaScriptLexer.DOT = 8;
MiniJavaScriptLexer.SEMICOLON = 9;
MiniJavaScriptLexer.COMMA = 10;
MiniJavaScriptLexer.PLUS = 11;
MiniJavaScriptLexer.MINUS = 12;
MiniJavaScriptLexer.Identifier = 13;
MiniJavaScriptLexer.Number = 14;
MiniJavaScriptLexer.WS = 15;



