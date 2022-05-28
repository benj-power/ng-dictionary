<img src="https://github.com/benj-power/oworms-ui/blob/develop/src/assets/image/logo.svg"></img> [![Maintainability](https://api.codeclimate.com/v1/badges/022c3d76d9caaf459fbc/maintainability)](https://codeclimate.com/github/noydb/oworms-ui/maintainability)
---

[Explanation of Name](https://memedocumentation.tumblr.com/post/163767097995/explained-oh-worm-meme)

[Swagger Documentation](https://oworms-api.herokuapp.com/swagger-ui/)

[Hosted Application](https://oworms.herokuapp.com)

[API Source Code](https://github.com/benj-power/oworms-api)

[Full Design + Prototype](https://jamieneslotech.invisionapp.com/console/share/KH37M1CTRA/839061901)

---
### About

A convenient way to store and find words. I was previously using a simple spreadsheet but as it grew, adding words proved to be inefficient and frankly annoying.

Being able to store and find words my way. Sure, one can find any word in existence on the internet, 
but I wanted a more elegant way to view words. If I google a word and it happens to also be the name 
of a company, the company will appear first (thanks SEO) and not the word.

### Commands

run with a proxy pointed to `localhost:8080`:\
`ng serve`

dev build:\
`yarn build`

production build:\
`ng build --aot --configuration production`

run on an express server:\
`node server.js`

generate base project using angular cli:\
`ng new oworms-ui --package-manager=yarn --routing --style=scss --prefix=ow`

[click here to setup locally hosted api](https://github.com/noydb/oworms-api#readme)

**Note: the details you capture under about -> credentials will be passed as query params (`u` & `bna`)**
**for "protected" endpoints**

---

### Features
- Viewing words, creating, updating words
- linking tags to words
- receive an email everytime a word is created or updated
- filtering by any of the available fields
- retrieve a random word
- view statistics on the application
- import spreadsheet of words
- export all words to csv

### Planned Features
- automated creation of words
- adding word with assistance/wizard
- more detailed statistics, daily, weekly stats, graphs, etc
- linking of synonyms and antonyms
- ability to delete words
- allowing multiple parts of speech and definitions to be linked to one word
- mobile responsiveness
- Full implementation of ui design
