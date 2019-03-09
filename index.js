var getContributors = require('github-contributors-file');
global.fetch = require("node-fetch");
require('dotenv').config();

function htmlContributor (avatarUrl, login, url) {
  return `
    <a style="display: inline-block; margin-right: 4px" href="${url}">
      <img src="${avatarUrl}" height="30px" width="30px" alt="${login}" target="_blank" style="border-radius: 15px;"/>
    </a>
  `;
}
module.exports = {
  hooks: {
    "page": function(page) {
      
      return new Promise((resolve, reject) => {

        const owner = this.options.pluginsConfig['contributors-each-page'].owner;
        const repository = this.options.pluginsConfig['contributors-each-page'].repository;
        const title = this.options.pluginsConfig['contributors-each-page'].title ? this.options.pluginsConfig['contributors-each-page'].title : null;
        const token = process.env.GH_TOKEN ? process.env.GH_TOKEN : ''
        const titleHtml = title ? '<h2>' + title + '</h2>' : '';
        
        let htmlContributors = '';

        getContributors(owner, repository, page.path, token).then((contributors) => {         
          contributorsInHtml = contributors.reduce((value, item) => {
            return value + htmlContributor(item.avatar_url, item.login, item.url);
          }, '');

          page.content = page.content + '<div style="margin-top: 16px;">' + titleHtml + contributorsInHtml + '</div>';
          resolve(page);
        }).catch((e) => {
          console.log('Contributors failed for page ' + page.path);
          console.log(e);
          resolve(page);
        });
      });
    }
  }
};