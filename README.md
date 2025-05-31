# Welcome!

This is my personal website that I started building in 2020 to further my understanding of accessible web development. Its's built from scratch using Gatsby and is a constant work in progress. If you have any suggestions for improvement, I'm happy to hear them!

## How to Deploy Changes
1. Make the changes locally (and commit to remote obvi)
2. Run `npm run deploy`

## 📙 Todo

1. Redesign/structure the core user experience
   - Redo landing page with a photo of ME !
   - Figure out the best way to display previews/info abt my projects on the site, instead of directing folks to Github
   - Finish moving my resume over to https://jsonresume.org, then integrate its data into my site in a visually appealing way
1. ~~Fix the height issue on mobile devices where the vh is smaller than computed and content is hidden behind the navbar~~
1. Make the embedded pdf of my resume accessible to screen reader users
1. List some of the intentional choices I've made to improve site accessibility on my accessibility page
   - Atkinson Hyperlegible
   - Accessible color palettes
   - Focus indicators w/ focus-visible pseudo class
1. Add an easily-accessible way to contact me (like a form or smth)
1. Figure out if/how to add skip links back in
1. Create a way to automatically display and filter cool sites/resources on the resources page
   - also make an easy way to add links to the page, without deploying anything
1. Make sure the default font size is 16px, 18px, or 20px
1. Keep line lengths around 70 characters at most by setting `max-width: 70ch;` in the css
1. Add [AAC Shim](https://tools.openaac.org) to this site to improve the experience for users of AAC
1. ~~Give the mobile and web navbars the <nav> tag or otherwise specify that they are nav elements to make them more accessible~~
1. Make sure all images/logos are svg elements and not font glyphs, which are very inaccessible
1. Add animation for navbar links
1. Add an option to switch the site to the dyslexia-friendly font
1. Upgrade npm packages/dependencies
1. Add a page with they/them pronoun examples and FAQs
   - Use info from https://lgbtresourcecenter.uccs.edu/pronouns-101

## 🌟 Inspiration Sites

A redesign needs to happen, here's some inspo:

- https://brucelawson.co.uk/
- https://www.matuzo.at/
- https://www.tatianamac.com/
- https://cariefisher.com/
- https://brittanychiang.com
- so, so, so many more

## 🪲 Known Bugs

1. ~~flash of light when loading page~~
   - ~~especially noticeable on dark mode~~
   - ~~common issue, should be an easy fix~~
   - I think this was fixed in one of the theme plugins I use, but I'm not totally sure.
   - note: this may have been fixed by a dependency the site consumes!

## 💥 Resources to Add (At Some Point)

- [https://brucelawson.co.uk/](https://www.accessguide.io/guide/hover-and-focus)

<!-- AUTO-GENERATED-CONTENT:START (GATSBY STARTER) -->

## 🚀 Gatsby Quick start

1.  **Start developing with Gatsby.**

    Navigate into your new site’s directory and start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
