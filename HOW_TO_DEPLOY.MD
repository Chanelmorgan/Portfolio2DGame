# How to deploy the project (on GitHub pages)

## Method: Using Github Actions

1. Update `vite.config.js` base property to match the name of the repository. For example, `base: "/2d-portfolio-kaboom"`

2. Navigate to the repository settings on GitHub and configure GitHub pages to use GitHub Actions by creating a custom workflow. Read [this](https://vitejs.dev/guide/static-deploy#github-pages) for more info.

3. After setting up the custom workflow, go to the Actions tab within the repository. From there, select the workflow you created in step 2 and trigger the deployment process.

4. The portfolio should now be live and accessible through GitHub pages.

