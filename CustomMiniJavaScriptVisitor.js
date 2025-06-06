import MiniJavaScriptVisitor from './generated/MiniJavaScriptVisitor.js';

export default class CustomMiniJavaScriptVisitor extends MiniJavaScriptVisitor {
  constructor() {
    super();
    this.memory = new Map();
  }

  visitProgram(ctx) {
    return this.visitChildren(ctx);
  }

  visitFunctionDeclaration(ctx) {
    return this.visit(ctx.functionBody());
  }

  visitFunctionBody(ctx) {
    return this.visitChildren(ctx);
  }

  visitConsoleStatement(ctx) {
    const value = this.visit(ctx.expression());
    console.log("Salida:", value);
    return value;
  }

  visitExpression(ctx) {
    let result = this.visit(ctx.term(0));
    for (let i = 1; i < ctx.term().length; i++) {
      const op = ctx.children[2 * i - 1].getText();
      const right = this.visit(ctx.term(i));
      result = op === '+' ? result + right : result - right;
    }
    return result;
  }

  visitTerm(ctx) {
    if (ctx.Number()) return parseInt(ctx.Number().getText());
    if (ctx.expression()) return this.visit(ctx.expression());
    return 0;
  }
}

