var getContributors = require('github-contributors-file');

function htmlContributor (avatarUrl, login, url) {
  return `
    <a style="float: left; display: inline-block;" href="${url}">
      <img src="${avatarUrl}" height="30px" width="30px" alt="${login}"/>
    </a>
  `;
}

module.exports = {
  // Map of hooks
  hooks: {
    "page": function(page) {
      const owner = this.options.pluginsConfig['contributors-each-page'].owner;
      const repository = this.options.pluginsConfig['contributors-each-page'].repository;
      let htmlContributors = '';

      getContributors(owner, repository, page.rawPath).then((contributors) => {
        console.log(contributors);
        

        htmlContributors = contributors.reduce((value, item) => {
          value = value + htmlContributor(item.avatar_url, item.login, item.url);
        }, '');

        console.log(htmlContributors);

        page.content = page.content + htmlContributors;
      });

      return page;
    }
  }
};