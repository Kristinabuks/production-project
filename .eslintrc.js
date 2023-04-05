module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
                }
        }
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
        'react',
        'i18next'
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        indent: ['error', 4],
        'react/prop-types': [0],
        'i18next/no-literal-string': [
            2, 
            {
                markupOnly: true, 
                ignoreAttribute: ['to', 'data-testid']
            }
        ],
        '@typescript-eslint/naming-convention': [1],
        '@typescript-eslint/strict-boolean-expressions': [0],
        '@typescript-eslint/no-misused-promises': [
            "error",
            {
              "checksVoidReturn": false
            }
          ]
    },
}
