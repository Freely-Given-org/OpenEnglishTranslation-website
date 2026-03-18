import { dirname } from 'path';
import { fileURLToPath } from 'url';
import nextConfig from 'eslint-config-next';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'build/**',
            'next.config.js',
            'eslint.config.mjs',
        ],
    },
    ...nextConfig,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },
        plugins: {
            'unused-imports': unusedImports,
        },
        rules: {
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'arrow-parens': 'off',
            'prefer-const': [
                'warn',
                {
                    destructuring: 'all',
                },
            ],
            '@typescript-eslint/array-type': [
                'warn',
                {
                    default: 'array-simple',
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
            '@typescript-eslint/explicit-member-accessibility': [
                'warn',
                {
                    accessibility: 'no-public',
                },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            // '@typescript-eslint/member-ordering': [
            //     'warn',
            //     {
            //         default: [
            //             // Index signature
            //             'signature',

            //             // Static
            //             'public-static-field',
            //             'protected-static-field',
            //             'private-static-field',
            //             'public-static-method',
            //             'protected-static-method',
            //             'private-static-method',

            //             // Fields
            //             'public-instance-field',
            //             'protected-instance-field',
            //             'private-instance-field',
            //             'public-abstract-field',
            //             'protected-abstract-field',
            //             'private-abstract-field',

            //             // Constructors
            //             'public-constructor',
            //             'protected-constructor',
            //             'private-constructor',

            //             // Methods
            //             'public-instance-method',
            //             'protected-instance-method',
            //             'private-instance-method',
            //             'public-abstract-method',
            //             'protected-abstract-method',
            //             'private-abstract-method',
            //         ],
            //     },
            // ],
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unused-vars': [
                'off',
                {
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-useless-constructor': 'warn',
            '@typescript-eslint/restrict-plus-operands': 'off',
            '@typescript-eslint/restrict-template-expressions': 'off',
            'react/no-unescaped-entities': 'off',
            'react-hooks/set-state-in-effect': 'warn',
            'comma-dangle': ['warn', 'always-multiline'],
            'import/default': 'off',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/order': [
                'warn',
                {
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    groups: [
                        ['builtin', 'external'],
                        ['internal'],
                        ['index', 'sibling', 'parent'],
                    ],
                    'newlines-between': 'always',
                },
            ],
            'import/no-unresolved': 'off',
            'no-empty': [
                'warn',
                {
                    allowEmptyCatch: true,
                },
            ],
            'no-irregular-whitespace': [
                'off',
                {
                    skipStrings: false,
                },
            ],
            'quote-props': ['warn', 'consistent-as-needed'],
            'sort-imports': [
                'warn',
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                },
            ],
        },
    },
];
