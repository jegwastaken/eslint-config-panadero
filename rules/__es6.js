// TODO:
module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    // require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',
    // require parentheses around arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',
    // enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'off',
    // require `super()` calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'off',
    // enforce consistent spacing around `*` operators in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'off',
    // disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'off',
    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',
    // disallow reassigning `const` variables
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'off',
    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',
    // disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'off',
    // disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': 'off',
    // disallow specified modules when loaded by `import`
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',
    // disallow `this`/`super` before calling `super()` in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'off',
    // disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'off',
    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'off',
    // require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'off',
    // require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'off',
    // require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',
    // require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'off',
    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'off',
    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'off',
    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'off',
    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'off',
    // require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'off',
    // require generator functions to contain `yield`
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'off',
    // enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': 'off',
    // enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',
    // require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'off',
    // require or disallow spacing around embedded expressions of template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'off',
    // require or disallow spacing around the `*` in `yield*` expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': 'off',
  },
};
