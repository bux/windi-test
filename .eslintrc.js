module.exports = {
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "prettier",
    ],
    plugins: ["prettier"],

    rules: {
        "prettier/prettier": "error",
    },
}
