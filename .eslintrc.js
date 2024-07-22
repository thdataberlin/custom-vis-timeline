module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },

  parserOptions: {
    sourceType: "module",
  },

  extends: "eslint:recommended",

  // For the full list of rules, see: http://eslint.org/docs/rules/
  rules: {
    complexity: ["error", 55],
    "max-statements": ["error", 115],
    "no-unreachable": "warn",
    "no-useless-escape": "off",

    "no-console": "off",
    // To flag presence of console.log without breaking linting:
    //"no-console": ["warn", { allow: ["warn", "error"] }],

    "require-jsdoc": ["error", {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false
        }
    }],
    "valid-jsdoc": ["error", {
      requireReturnDescription: false,
      requireReturn: false,
      requireParamDescription: false,
      requireReturnType: true
    }],
    "guard-for-in": "warn",
  },
}
