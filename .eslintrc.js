module.exports = { 
  "extends": "airbnb-base",
  "rules": {
    "no-await-in-loop": "off",
    "no-constant-condition": "off",
  },
  "overrides": [
    {
      "files": ["*.test.js"],
      "rules": {
        "no-undef": "off"
      }
    },
    {
      "files": ["src/*.js"],
      "rules": {
        "no-console": "off",
      }
    },
  ]
};
