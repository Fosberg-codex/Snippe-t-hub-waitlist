# Snippe-t-Hub Landing Page

SnippetHub is a platform for developers to share and discover code snippets across various programming languages and frameworks. This repository contains the source code for the SnippetHub landing page, built using the incredibly fast and modern SvelteKit framework and Tally Forms.

## Features

- **Responsive Design**: The landing page is fully responsive and optimized for various devices and screen sizes.
- **Waitlist Functionality**: Users can sign up for the waitlist to get early access to SnippetHub when it launches.
- **Svelte Components**: The UI components are built using Svelte, a reactive and efficient component framework.
- **Static Site Generation**: SvelteKit generates a static site for optimal performance and easy deployment.

## Design Engineering stacks
- **SvelteKit**
- **Tailwind CSS**
- **Waitlist form - Tally Forms**
- **Inspirations - Godly designs**
- **Daisy UI**

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Clone the repository
git clone git@github.com:Fosberg-codex/snippe-t-hub-waitlist.git

###  Install Dependencies
```bash
cd my-app
npm install
```

### Navigate to the main directory
cd my-app
### Start the development server
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
The landing page will be available at `http://localhost:5173/`.

### Building and production

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Customization

You can easily customize the landing page to fit your branding and requirements. Here are a few places to start:

### Update Content

- Edit the content in `src/routes/+page.svelte`, `src/routes/waitlist/+page.svelte`, and `src/routes/components/navbar.svelte`  to change the landing page text, value propositions, and call-to-action messages.

### Styling

- Modify the <styles></styles> in the +page.svelte files to change the colors, typography, and overall look and feel of the landing page.

### Waitlist Integration

The current implementation uses the embedding of Tally forms

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
