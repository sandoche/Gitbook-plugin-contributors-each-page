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
      "title": "Contributors"
    }
  }
}
```

To overcome the problem with the Github API, add a .env file on the root of your gitbook project, go there to create one: https://github.com/settings/tokens
```
GH_TOKEN=your_github_token
```
