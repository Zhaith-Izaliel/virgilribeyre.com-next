<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<br />
<div align="center">
<h1 align="center">🚀virgilribeyre.com</h1>

<p align="center">
    The sources of virgilribeyre.com, my professional website.
    <br />
    <br />
    <a href="https://virgilribeyre.com">Visit the Website</a>
    ·
    <a href="https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>

<!-- vim-markdown-toc GitLab -->

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Directory Structure](#directory-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

<!-- vim-markdown-toc -->

</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![virgilribeyre.com Screenshot][product-screenshot]](https://gitlab.com/bootstrapers/vue-typescript-bootstraper)
This is the source of my website, virgilribeyre.com. From there you can build it for yourself and check how I made it! It is built for modularity first, as such, it uses Markdown to render most of the content and data array easily fillable to add or modify content in a breeze.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Vue.js][vue]][vue-url]
- [![Vite.js][vite]][vite-url]
- [![Typescript]][typescript-url]
- [![TailwindCSS]][tailwindcss-url]
- [![Nix]][nix-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Working on this project is as simple as cloning the repository and
building on top of it. And if you are using Nix + Direnv as your daily driver,
you don't even need to think about the dependencies to install, as the flake
will spawn a convenient development shell for you.

### Prerequisites

- `NodeJS` ⩾ 21

If you intend to work with Nix:

- `Nix` ⩾ 2.18.1
- `Direnv` ⩾ 2.33.0

### Installation

1. Clone the repository:

```bash
git clone https://gitlab.com/Zhaith-Izaliel/virgilribeyre.com-next.git
```

2. (Optional) Allow direnv to gain access to the dependencies using Nix:

```bash
direnv allow
```

3. Install the NPM dependencies:

```bash
npm install
```

4. Start-up Vite and you're good to go!

```bash
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->

## Usage

- Running in a Development environment:

```bash
npm run dev
```

Vite enable Hot Reload by default, and will react to changes to your code as you
save.

- Generating production builds

```bash
npm run build
```

- Lint the entire code base

```bash
npm run lint && npm run lint:markup
```

There are 2 different commands, as Vue files needs to be linted with `vue-tsc`
directly, and not with ESLint.

- Build project with Nix:

```
nix build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- \[ \] Fix typos
- \[ \] Add a dropdown to sort skills by name or level
- \[ \] Add proper testing support
- \[ \] Switch to personal ESLint configuration

See the [open issues](https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. However, keep in mind these contributions **can not** concern the content of the website (ie. which skills or projects to add), as they should reflect what I can professionally do.

**Contributions are only available on GitLab.**

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project **on GitLab**
1. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
1. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`), your
   commit message should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specifications
1. Push to the Branch (`git push origin feature/AmazingFeature`)
1. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="http://virgilribeyre.com">virgilribeyre.com</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://linktr.ee/zhaith_izaliel">Virgil Ribeyre</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0</a></p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for their amazing README template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/gitlab/contributors/bootstrapers/vue-typescript-bootstraper.svg?style=for-the-badge&logo=gitlab
[contributors-url]: https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/graphs/master?ref_type=heads
[forks-shield]: https://img.shields.io/gitlab/forks/bootstrapers/vue-typescript-bootstraper.svg?style=for-the-badge&logo=gitlab
[forks-url]: https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/forks
[issues-shield]: https://img.shields.io/gitlab/issues/open/bootstrapers%2Fvue-typescript-bootstraper?style=for-the-badge
[issues-url]: https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/virgil-ribeyre-810135196/
[nix]: https://img.shields.io/badge/nix-0B1120?style=for-the-badge&logo=nixos
[nix-url]: https://nixos.org/
[product-screenshot]: images/screenshot.png
[stars-shield]: https://img.shields.io/gitlab/stars/bootstrapers/vue-typescript-bootstraper.svg?style=for-the-badge&logo=gitlab
[stars-url]: https://gitlab.com/bootstrapers/vue-typescript-bootstraper/-/starrers
[tailwindcss]: https://img.shields.io/badge/TailwindCSS-0B1120?style=for-the-badge&logo=tailwindcss
[tailwindcss-url]: https://tailwindcss.com/
[typescript]: https://img.shields.io/badge/Typescript-0B1120?style=for-the-badge&logo=typescript
[typescript-url]: https://www.typescriptlang.org/
[vite]: https://img.shields.io/badge/Vite-0B1120?style=for-the-badge&logo=vite
[vite-url]: https://vitejs.dev/
[vue]: https://img.shields.io/badge/Vue-0B1120?style=for-the-badge&logo=vuedotjs
[vue-url]: https://vuejs.org/
