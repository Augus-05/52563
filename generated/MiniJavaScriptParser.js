// Generated from MiniJavaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJavaScriptListener from './MiniJavaScriptListener.js';
import MiniJavaScriptVisitor from './MiniJavaScriptVisitor.js';

const serializedATN = [4,1,15,82,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,30,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,40,8,2,10,2,12,
2,43,9,2,1,3,5,3,46,8,3,10,3,12,3,49,9,3,1,4,1,4,3,4,53,8,4,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,69,8,7,10,7,12,7,72,9,7,
1,8,1,8,1,8,1,8,1,8,1,8,3,8,80,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,
0,11,12,80,0,19,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,0,6,47,1,0,0,0,8,52,1,0,
0,0,10,54,1,0,0,0,12,57,1,0,0,0,14,65,1,0,0,0,16,79,1,0,0,0,18,20,3,2,1,
0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,
23,24,5,0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,5,13,0,0,27,29,5,4,0,0,28,
30,3,4,2,0,29,28,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,32,5,5,0,0,32,33,
5,6,0,0,33,34,3,6,3,0,34,35,5,7,0,0,35,3,1,0,0,0,36,41,5,13,0,0,37,38,5,
10,0,0,38,40,5,13,0,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,
0,0,0,42,5,1,0,0,0,43,41,1,0,0,0,44,46,3,8,4,0,45,44,1,0,0,0,46,49,1,0,0,
0,47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,47,1,0,0,0,50,53,3,10,5,0,
51,53,3,12,6,0,52,50,1,0,0,0,52,51,1,0,0,0,53,9,1,0,0,0,54,55,3,14,7,0,55,
56,5,9,0,0,56,11,1,0,0,0,57,58,5,2,0,0,58,59,5,8,0,0,59,60,5,3,0,0,60,61,
5,4,0,0,61,62,3,14,7,0,62,63,5,5,0,0,63,64,5,9,0,0,64,13,1,0,0,0,65,70,3,
16,8,0,66,67,7,0,0,0,67,69,3,16,8,0,68,66,1,0,0,0,69,72,1,0,0,0,70,68,1,
0,0,0,70,71,1,0,0,0,71,15,1,0,0,0,72,70,1,0,0,0,73,80,5,13,0,0,74,80,5,14,
0,0,75,76,5,4,0,0,76,77,3,14,7,0,77,78,5,5,0,0,78,80,1,0,0,0,79,73,1,0,0,
0,79,74,1,0,0,0,79,75,1,0,0,0,80,17,1,0,0,0,7,21,29,41,47,52,70,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJavaScriptParser extends antlr4.Parser {

    static grammarFileName = "MiniJavaScript.g4";
    static literalNames = [ null, "'function'", "'console'", "'log'", "'('", 
                            "')'", "'{'", "'}'", "'.'", "';'", "','", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, "FUNCTION", "CONSOLE", "LOG", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "DOT", "SEMICOLON", 
                             "COMMA", "PLUS", "MINUS", "Identifier", "Number", 
                             "WS" ];
    static ruleNames = [ "program", "functionDeclaration", "parameterList", 
                         "functionBody", "statement", "expressionStatement", 
                         "consoleStatement", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJavaScriptParser.ruleNames;
        this.literalNames = MiniJavaScriptParser.literalNames;
        this.symbolicNames = MiniJavaScriptParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.functionDeclaration();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 23;
	        this.match(MiniJavaScriptParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJavaScriptParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(MiniJavaScriptParser.FUNCTION);
	        this.state = 26;
	        this.match(MiniJavaScriptParser.Identifier);
	        this.state = 27;
	        this.match(MiniJavaScriptParser.LPAREN);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 28;
	            this.parameterList();
	        }

	        this.state = 31;
	        this.match(MiniJavaScriptParser.RPAREN);
	        this.state = 32;
	        this.match(MiniJavaScriptParser.LBRACE);
	        this.state = 33;
	        this.functionBody();
	        this.state = 34;
	        this.match(MiniJavaScriptParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJavaScriptParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(MiniJavaScriptParser.Identifier);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 37;
	            this.match(MiniJavaScriptParser.COMMA);
	            this.state = 38;
	            this.match(MiniJavaScriptParser.Identifier);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJavaScriptParser.RULE_functionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24596) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJavaScriptParser.RULE_statement);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.expressionStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniJavaScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.expression();
	        this.state = 55;
	        this.match(MiniJavaScriptParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniJavaScriptParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MiniJavaScriptParser.CONSOLE);
	        this.state = 58;
	        this.match(MiniJavaScriptParser.DOT);
	        this.state = 59;
	        this.match(MiniJavaScriptParser.LOG);
	        this.state = 60;
	        this.match(MiniJavaScriptParser.LPAREN);
	        this.state = 61;
	        this.expression();
	        this.state = 62;
	        this.match(MiniJavaScriptParser.RPAREN);
	        this.state = 63;
	        this.match(MiniJavaScriptParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniJavaScriptParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.term();
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11 || _la===12) {
	            this.state = 66;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 67;
	            this.term();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiniJavaScriptParser.RULE_term);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.match(MiniJavaScriptParser.Identifier);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(MiniJavaScriptParser.Number);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.match(MiniJavaScriptParser.LPAREN);
	            this.state = 76;
	            this.expression();
	            this.state = 77;
	            this.match(MiniJavaScriptParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniJavaScriptParser.EOF = antlr4.Token.EOF;
MiniJavaScriptParser.FUNCTION = 1;
MiniJavaScriptParser.CONSOLE = 2;
MiniJavaScriptParser.LOG = 3;
MiniJavaScriptParser.LPAREN = 4;
MiniJavaScriptParser.RPAREN = 5;
MiniJavaScriptParser.LBRACE = 6;
MiniJavaScriptParser.RBRACE = 7;
MiniJavaScriptParser.DOT = 8;
MiniJavaScriptParser.SEMICOLON = 9;
MiniJavaScriptParser.COMMA = 10;
MiniJavaScriptParser.PLUS = 11;
MiniJavaScriptParser.MINUS = 12;
MiniJavaScriptParser.Identifier = 13;
MiniJavaScriptParser.Number = 14;
MiniJavaScriptParser.WS = 15;

MiniJavaScriptParser.RULE_program = 0;
MiniJavaScriptParser.RULE_functionDeclaration = 1;
MiniJavaScriptParser.RULE_parameterList = 2;
MiniJavaScriptParser.RULE_functionBody = 3;
MiniJavaScriptParser.RULE_statement = 4;
MiniJavaScriptParser.RULE_expressionStatement = 5;
MiniJavaScriptParser.RULE_consoleStatement = 6;
MiniJavaScriptParser.RULE_expression = 7;
MiniJavaScriptParser.RULE_term = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniJavaScriptParser.EOF, 0);
	};

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_functionDeclaration;
    }

	FUNCTION() {
	    return this.getToken(MiniJavaScriptParser.FUNCTION, 0);
	};

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJavaScriptParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiniJavaScriptParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MiniJavaScriptParser.LBRACE, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(MiniJavaScriptParser.RBRACE, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_parameterList;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJavaScriptParser.Identifier);
	    } else {
	        return this.getToken(MiniJavaScriptParser.Identifier, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJavaScriptParser.COMMA);
	    } else {
	        return this.getToken(MiniJavaScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_functionBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_statement;
    }

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(MiniJavaScriptParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(MiniJavaScriptParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(MiniJavaScriptParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(MiniJavaScriptParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJavaScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniJavaScriptParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(MiniJavaScriptParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJavaScriptParser.PLUS);
	    } else {
	        return this.getToken(MiniJavaScriptParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiniJavaScriptParser.MINUS);
	    } else {
	        return this.getToken(MiniJavaScriptParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(MiniJavaScriptParser.Number, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJavaScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiniJavaScriptParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniJavaScriptParser.ProgramContext = ProgramContext; 
MiniJavaScriptParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MiniJavaScriptParser.ParameterListContext = ParameterListContext; 
MiniJavaScriptParser.FunctionBodyContext = FunctionBodyContext; 
MiniJavaScriptParser.StatementContext = StatementContext; 
MiniJavaScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
MiniJavaScriptParser.ConsoleStatementContext = ConsoleStatementContext; 
MiniJavaScriptParser.ExpressionContext = ExpressionContext; 
MiniJavaScriptParser.TermContext = TermContext; 
