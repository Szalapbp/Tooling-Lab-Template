JS Tooling
===================================
![Assignment Checks](https://github.com/IT3049C-Summer20/3-rock-paper-scissors-<GITHUB_USERNAME_HERE>/workflows/Assignment%20Checks/badge.svg)

Instructions to this assignment can be found [here](https://reedws.github.io/IT3049C/coursework/labs/tooling/).

## Checklist:
- [ x] update the assignment checks above to the correct link.
- [ x] make sure the assignment checks pass
- [ x] fill out the self evaluation and Reflection
- [ x] submit the repository link on Canvas

## Self-Evaluation: 
how many points out of 10 do you deserve on this assignment: 
Based on the performance of my application in its current state, I believe that a 7/10 would be reasonable. I think this because the issues that my application is having is surrounding the linting configuration. When I try to test the app in cypress, it tells me that import and export are not able to be used. I have reason to believe that this is because of the linting of the js files or lackthereof. I tried to fix this with multiple methods, one was reinstalling the eslint system, another was fixing linking errors in my package.json, and the final attempt after I found out that my app is trying to run off of the eslint.config.js format was to migrate my .eslintrc.json to the new format using a migration guide found on eslint.org. This failed to work for some reason and it tells me that npm cannot find the file I am referring to. I though maybe it was because it is now in a directory on wampserver but I am running the command from that directory so I am not sure. I believe that everything else about the assignment works and I believe that the cypress would work if the app was linting. I think I may have gotten spun around while trying to follow the instructions and code things for the earlier version fo eslint configuration.

## Self-Reflection:
I learned a lot about testing applications today and it is nice to see how it actually works with a walktrough after dealing with it on past assignments. I would like to think that my understanding of tests in this space is much more coherent and I was able to correctly identify what was going wrong with the expected and recieved error messages I was getting when coding the rock_paper_scissors-locig.texts.js. I really enjoy when I can feel proud of knowing exactly how all of this code fits together to test applications and much more proud when I am able to fix my mistakes so that it works properly. I am also becoming much more fluent in my ability to diagnose terminal and console errors aside from the npm and eslint issues I was having. Overall, I kind of enjoyed this assignment and the reliefe of fixing some of the issues and running tests correctly.

### How long it took me to finish this?
about 2.5 hours with coding and correcting.