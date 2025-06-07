grammar MiniJavaScript;

// ========================
//      REGLAS SINTÁCTICAS
// ========================

program
  : functionDeclaration+ EOF
  ;

functionDeclaration
  : FUNCTION Identifier LPAREN parameterList? RPAREN LBRACE functionBody RBRACE
  ;

parameterList
  : Identifier (COMMA Identifier)*
  ;

functionBody
  : statement*
  ;

statement
  : expressionStatement
  | consoleStatement
  ;

expressionStatement
  : expression SEMICOLON
  ;

consoleStatement
  : CONSOLE DOT LOG LPAREN expression RPAREN SEMICOLON
  ;

expression
  : term ((PLUS | MINUS) term)*
  ;

term
  : Identifier
  | Number
  | LPAREN expression RPAREN
  ;

// ========================
//      REGLAS LÉXICAS
//  → ¡IMPORTANTE! Tokens reservados van primero
// ========================

FUNCTION   : 'function';
CONSOLE    : 'console';
LOG        : 'log';
LPAREN     : '(';
RPAREN     : ')';
LBRACE     : '{';
RBRACE     : '}';
DOT        : '.';
SEMICOLON  : ';';
COMMA      : ',';
PLUS       : '+';
MINUS      : '-';

Identifier : [a-zA-Z] [a-zA-Z0-9_]* ;
Number     : [0-9]+ ;
WS         : [ \t\r\n]+ -> skip ;
