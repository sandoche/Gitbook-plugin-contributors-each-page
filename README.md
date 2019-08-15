# Gitbook-plugin-contributors-each-page
A gitbook plugins that adds the list of contributors for each page (works only with GitHub)

## Example

![example](example.png)

## Installation
```
npm install gitbook-plugin-contributors-each-page --save-dev
```

Update book.json, do not forget to replace owner and repository with your Github owner and Github repository name:
```
{
  "plugins": [
    "contributors-each-page"
  ],
  "contributors-each-page": {
      "owner": "naming-convention",
      "repository": "naming-convention-guides",
      "title": "Contributors",
      "excluded": ["README.md"]
    }
  }
}
```
Excluded contains the array of filepath of file where you don't want to add the contributors.

To overcome the problem with the Github API, add a .env file on the root of your gitbook project, go there to create one: https://github.com/settings/tokens
```
GH_TOKEN=your_github_token
```

## ⭐️ Show your support
Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer 
If you like this project, feel free to donate:
* PayPal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
