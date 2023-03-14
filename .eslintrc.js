module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react'
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        indent: ['error', 4],
        'react/prop-types': [0],
        '@typescript-eslint/naming-convention': [1],
        '@typescript-eslint/strict-boolean-expressions': [0],
        '@typescript-eslint/no-misused-promises': [
            "error",
            {
              "checksVoidReturn": false
            }
          ]
    }
}
