<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  ![brand](https://user-images.githubusercontent.com/50422794/210927623-aaef949f-e6f3-4ec6-b87b-59e78da564b8.png)


  <h3 align="center">DOCUMENTATION</h3>

  <p align="center">
    This documentation is for about a educative project
    <br />
    <br />
    <a href="https://shop-drab-seven.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/bryan0175">Check my github</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![favicon](https://user-images.githubusercontent.com/50422794/210928339-2496140e-5894-48f2-b29d-fcf5ac950f3b.png)

In this project i'm not only going to be building an advanced shopping cart using typescript and react but i'm also going to be structuring this project like a real world large scale project and that means that i'm going to have advanced file structure folder structure naming conventions best practices.

![image](https://user-images.githubusercontent.com/50422794/211107504-52cb2510-30cf-4080-8111-7a3b26133fc2.png)

You can see we have twice pages different, the only page that has any content is the store page, but the important thing is that if we add things to the cart, we can go to a different page, we can still open the cart and interact with it, we go back to our store and those changes will bring effect so the shopping cart will work on multiple pages there are multiple ways to interact for example with the plus minus buttons you can remove stuff by clicking this remove button you can remove stuff inside the shopping cart etc. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section have a list any major frameworks/libraries that i used to build project.

* <a href="https://reactjs.org">![image](https://user-images.githubusercontent.com/50422794/211116164-7b79fadd-869a-43e3-8053-a224f080f9c2.png)</a>
* <a href="https://react-bootstrap.github.io/">![image](https://user-images.githubusercontent.com/50422794/211116613-640f8d4b-14a2-439b-b16f-04e80f732dec.png)</a>
* <a href="https://www.typescriptlang.org/">![image](https://user-images.githubusercontent.com/50422794/211115885-4109d78c-7874-4286-95df-740a17471561.png)</a>
* <a href="https://react-icons.github.io/react-icons/">![image](https://user-images.githubusercontent.com/50422794/211116212-ef61c9ba-9787-42f1-917d-b49a15a2d75c.png)</a>
* <a href="https://reactrouter.com/en/main">![image](https://user-images.githubusercontent.com/50422794/211116261-6cda0e56-0192-4c44-a9ec-7f7f921e1f79.png)</a>
* <a href="https://vitejs.dev/">![image](https://user-images.githubusercontent.com/50422794/211116300-7c7fbe4b-0b0e-4bb7-9972-ef832ea71bd3.png)</a>
* <a href="https://www.npmjs.com/package/react-whatsapp">![image](https://user-images.githubusercontent.com/50422794/211116083-1ff4eb91-f7a6-47aa-ad14-07370b8caa26.png)</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Folder Structure -->
## Folder Structure

The base structure that i used to work in this project is basically this:

<ul>
  <li>
    <span><strong>/public/imgs</strong></span>
    <ul>
      <li>In this route are all the images, both backgrounds, brands and favicon</li>
    </ul>
  </li>
 <li>
    <span><strong>/src/components</strong></span>
    <ul>
      <li>First folder is called components and this is where all of our components are going to go things like our shopping cart our shopping cart items and so on ,this folder has 4 components:</li>
      <ul>
        <li>CardItem: This component has the products selected by the customer</li>
        <li>Navbar: This is the navigation bar, it has the brand of the company, the routes of the different pages and the icon of the shopping cart</li>
        <li>ShoppingCart: This component is a sidebar which contains the data of the products that the user wishes to buy and there is a button to be able to send all this information to the customer's WhatsApp</li>
        <li>StoreItem: This is the card that contains the json data that we are consuming locally</li>
      </ul>
    </ul>
  </li>
  <li>
    <span><strong>/src/context</strong></span>
    <ul>
      <li>This folder is to create context in your application you almost always have different react context or redux context that you're going to be working with in our case our entire shopping cart is going to fit inside of a context that we're going to put inside this folder.</li>
    </ul>
  </li>
  <li>
    <span><strong>/src/data</strong></span>
    <ul>
      <li>This is a folder thats going to contain any like json data we need for example our store items
are all json data by default so we con just put out store data in this data folder.</li>
    </ul>
  </li>
  <li>
    <span><strong>/src/hooks</strong></span>
    <ul>
      <li>Another folder i like to have is called a hooks folder this is for all your custom hooks such as use local storage which is a hook we're going to be using this project to make sure that if we add something to our cart and refresh our page it's going to stay in our cart.</li>
    </ul>
  </li>
  <li>
    <span><strong>/src/pages</strong></span>
    <ul>
      <li>This folder is going to be for our pages, we have a home page a store page and about page this is for representing those different pages those high level routes in our application.</li>
    </ul>
  </li>
  <li>
    <span><strong>/src/styles</strong></span>
    <ul>
      <li>In this folder I only have the styles of the navigation bar, the product cards and the home page.</li>
    </ul>
  </li>
  <li>
    <span><strong>/src/utilities</strong></span>
    <ul>
      <li>I have a folder for utilities so if we have different utility functions that do small things like formatting our currency that we want to do all over the place we can put that in this utilities folder now that right there is like the most basic of all folder structures that you can think of you can obviously add and remove folders as you need but for our project this is going to work perfectly.</li>
    </ul>
  </li>
</ul>


<!-- GETTING STARTED -->
## Getting Started

We are going to use veet to create our react app instead of create react app and it's just because I think it has better support for things like typescript and it just works great to do that we just need to run and then we just want to put a period here which says create the project in the current folder.

* npm
  ```sh
  $ npm create vite .
  ```
* Now when it run that it's going to ask me what i want to call this package we're just going to call it: ClientIRL-SHOES
  ```sh
  ? Package name: ClientIRL-SHOES
  ```
  
  ```sh
  ? Select a framework: >> - Use arrow-keys, Return to submit.
    vanilla
    vue
  > react
    preact
    lit
    svelte
  ```
  
  ```sh
  ? Select a variant: >> - Use arrow-keys, Return to submit.
    react
  > react-ts
  ```
* Once we select react and the typescript version of react we can just run the install method and then we can type npm rundev and that's going to give us just a boilerplate code and if we look in this source folder you'll see a lot of this looks really familiar this is very very similar to the create react app template
  ```sh
  $ npm i
  ```

  ```sh
  $ npm run dev
  ```
  
### Installation frameworks/libraries

_We are going to use some libraries and frameworks to be able to improve our code and the performance of our application in general._

* REACT ROUTER
  ```sh
  $ npm i react-router-dom
  ```
  React router is a js library that allows us to route pages on the client side.
  Client-side routing allows the application to update the URL
  from a link click without making another request for another document from the server.
  Instead, the app can immediately render a new user interface
  and make data requests to update the page with new information.

* REACT BOOTSTRAP
  ```sh
  $ npm i bootstrap react-bootstrap
  ```
  React Bootstrap replaces the Bootstrap JavaScript. Each component has 
  been built from scratch as a true React component, without unneeded dependencies like jQuery.

* REACT WHATSAPP
  ```sh
  $ npm i react-whatsapp
  ```
  React Whatsapp It is a library that allows us to analyze our application with 
  WhatsApp and so we can easily send messages from our application.

* REACT ICONS
  ```sh
  $ npm i react-icons
  ```
  For the icons we use React Icons, this is a library
  of icons, which allows us to use them as if they were components of react

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
