// Generated from c:/Users/Arbusto/Analizador/MiniJavaScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiniJavaScriptParser}.
 */
public interface MiniJavaScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MiniJavaScriptParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MiniJavaScriptParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(MiniJavaScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(MiniJavaScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void enterParameterList(MiniJavaScriptParser.ParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#parameterList}.
	 * @param ctx the parse tree
	 */
	void exitParameterList(MiniJavaScriptParser.ParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void enterFunctionBody(MiniJavaScriptParser.FunctionBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void exitFunctionBody(MiniJavaScriptParser.FunctionBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(MiniJavaScriptParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(MiniJavaScriptParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(MiniJavaScriptParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(MiniJavaScriptParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void enterConsoleStatement(MiniJavaScriptParser.ConsoleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void exitConsoleStatement(MiniJavaScriptParser.ConsoleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(MiniJavaScriptParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(MiniJavaScriptParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJavaScriptParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(MiniJavaScriptParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJavaScriptParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(MiniJavaScriptParser.TermContext ctx);
}