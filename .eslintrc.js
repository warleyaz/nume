module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'jsx-a11y/label-has-for': [ 2, {
        'components': [ 'Label' ],
        'required': {
            'some': [ 'nesting', 'id' ]
        },
        "allowChildren": false,
    }],
      'react/jsx-filename-extension': [
          'warn',
          {extensions: ['.jsx', '.js']}
      ],
      'import/prefer-default-export': 'off',
        'linebreak-style': 0,
        'global-require': 0,
      "array-bracket-spacing": [ 2, "always", {
        "singleValue": false,
        "objectsInArrays": false,
        "arraysInArrays": false
      }],
      "arrow-parens": [ 2, "as-needed" ],
      "brace-style": [ 2, "stroustrup" ],
      "comma-dangle": [ 2, "always-multiline" ],
      "comma-spacing": [ 2, { "before": false, "after": true } ],
      "computed-property-spacing": [ 2, "never" ],
      "eol-last": 2,
      "guard-for-in": 2,
      "indent": [ 2, 2 ],
      // "jest/no-disabled-tests": 2,
      // "jest/no-focused-tests": 2,
      // "jest/prefer-to-have-length": 2,
      // "jest/valid-expect": 2,
      "jsx-quotes": [ 2, "prefer-single" ],
      "key-spacing": 2,
      "keyword-spacing": 2,
      "max-len": [ 2, 120, 2 ],
      "no-continue": 2,
      "no-debugger": 2,
      "no-eval": 2,
      "no-extra-semi": 2,
      "no-implicit-coercion": 2,
      // "no-magic-numbers": 2,
      "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0 }],
      "no-trailing-spaces": 2,
      "no-undef": 2,
      "no-unreachable": 2,
      "no-unused-expressions": 2,
      "no-unused-vars": 2,
      "no-with": 2,
      "object-curly-spacing": [ 2, "always", {
        "arraysInObjects": false,
        "objectsInObjects": false
      }],
      "quotes": [ 2, "single" ],
      "react/jsx-closing-tag-location": 2,
      "react/jsx-closing-bracket-location": [ 2, "tag-aligned" ],
      "react/jsx-tag-spacing": [ 2, { "beforeClosing": "never" }],
      "react/prefer-es6-class": 2,
      "react/prop-types": 2,
      "semi": [ 2, "always" ],
      "space-before-function-paren": [ 2, "never" ],
      "space-in-parens": [ 2, "never" ],
      "spaced-comment": [ 2, "always" ],
      "strict": [ 2, "safe" ],
      "valid-typeof": 2,
      "vars-on-top": 2,
      "react/prop-types": [2, { ignore: ['children'] }],
      "no-console": "off",
      "no-shadow":"off"
    },
    "overrides": [
      {
        "files": ["**/assets/**"],
        "rules": {
          "max-len": 0,
          "react/prop-types": 0
        }
      }
    ]
  };
