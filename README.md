# [Resume](https://christofbecu.github.io/resume-project/) of Christof Becu

Based on [my resume](https://registry.jsonresume.org/ChristofBecu) made with [jsonresume.org](https://jsonresume.org/). I started this project to have more control over what and how the data is shown. It was also a good experience to keep my Angular knowledge up-to-date.

***

**TECH**
- Angular version 18
- Action to deploy and host to Github Pages
- Action to update gist for hosting printable one page resume on [registery.jsonresume.org](https://registry.jsonresume.org/ChristofBecu)
- The theme in this project is based on [Kendall](https://github.com/LinuxBozo/jsonresume-theme-kendall) by [LinuxBozo](https://github.com/LinuxBozo)

***
**RE-USE**

Feel free to use this repo. Follow these steps:

***run local***
- clone the repo and run ng serve

***setup your own resume***
- setup your resume.json as described in the [docs](https://jsonresume.org/schema). Save this file in public/assets
- add the link to your public [registry.jsonresume.org page](https://registry.jsonresume.org/) in the meta part of resume.json, as it is used in the code to access it as a printable page.

***setup automatic update of your resume gist***
- Create a github personal access token
- Create an Action Secret with the name TOKEN and as value the token just created
- Change the gist_id in gist.yml with the id of your own resume.json id 

***setup automatic deployment to github pages***
- nothing to do, will be deployed as https://yourGithubName.github.io/resume-project
