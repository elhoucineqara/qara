# Personal Portfolio - El Houcine Qara

This portfolio was created with SvelteKit and TailwindCSS to showcase my skills, experiences, and projects as a full-stack developer.

## Technologies Used

- SvelteKit
- TypeScript
- TailwindCSS
- Font Awesome
- PostCSS
- Vite

## Features

- Responsive and modern design
- Smooth navigation
- Animations and transitions
- Contact form
- Skills presentation
- Project gallery
- Social media integration

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mon-portfolio.git
cd mon-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
mon-portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   └── contact/
│   ├── app.css
│   └── app.html
├── static/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

1. Modify personal information in the corresponding files
2. Add your own projects in `src/routes/projects/+page.svelte`
3. Customize styles in `src/app.css` and `tailwind.config.js`
4. Add your own images in the `static` folder

## Deployment

The site can be deployed on Vercel, Netlify, or GitHub Pages.

### Vercel

1. Create an account on [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Click "Deploy"

### Netlify

1. Create an account on [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Click "Deploy"

### GitHub Pages

1. Add the build script in `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d build"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

- Email: elhoucineqara114@gmail.com
- LinkedIn: [linkedin.com/in/el-houcine-qara-927b07302](https://www.linkedin.com/in/el-houcine-qara-927b07302/)
- GitHub: [github.com/yourusername](https://github.com/yourusername)
