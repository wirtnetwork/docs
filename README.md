# Wirt documentation

This repository houses the documentation for https://wirt.network .

Feel free to contribute to it if you think something is missing or you have a great tutorial!

## Contributing

- First of all [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository.
- Now create a new [markdown](https://www.markdownguide.org/basic-syntax) file in the `/docs` folder.
- When you are satisfied with your page add it to the sidebar in `docs/.vuepress/config.js`.
- [Push](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) changes to Github and create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

### Test your changes locally

[Install](https://github.com/nvm-sh/nvm#installing-and-updating)
- nodejs
- npm

After you have both installed on your computer run `npm install` in the root of this documentation repository that you cloned.
Run a local development server using `npm run dev:docs`.

You local version will now show up at `http://localhost:9090` in your browser.

