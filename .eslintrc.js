module.exports = {
    // Custom parser to apply ESLint rules to TS files
    "parser": "typescript-eslint-parser",
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["typescript", "prettier"],
    "env": {
        "browser": true,
        "jest": true,
        "jquery": true,
    },
    "rules": {
        // Allow JSX in JS, JSX, TS, TSX files
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx", "ts", "tsx"]
            }
        ],
        // Combine no-unused-vars from eslint and typescript plugin
        // To prevent false positives when importing types.
        "no-unused-vars": "error",
        "typescript/no-unused-vars": "error",

        "import/no-unresolved": "off",

        //Prettier config
        "prettier/prettier": ["error", {
            "tabWidth": 4,
            "singleQuote": true,
            "trailingComma": "es5"
        }],

        //Custom rules
        "no-use-before-define": 0
    }
};
