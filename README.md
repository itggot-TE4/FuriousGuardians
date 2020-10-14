[![Actions Status](https://github.com/itggot-TE4/TE4/workflows/tests/badge.svg)](https://github.com/itggot-TE4/Yala/actions)
# TE4
Template project for projects at TE4. 

Replace this with a description for the project. Remember to update the above template badge.

## Project management setup
- Use projects tab for adding kanban boards for issue tracking and bug triage board.
- Use issues and labels for assigning points to tasks and categorizing tasks.

## Code review
Code review is the process that happens after a new pull request is created and before the changes are merged to develop. It's a powerful tool for knowledge transfer. Use the following guidelines as a reference: https://github.com/thoughtbot/guides/tree/master/code-review

## Documentation
Self-documenting code is something to aim for. Types are the simplest and best documentation, improve legibility due to their well-defined meaning, and are checked at compile time<sup>1</sup>. For more high-level documentation about application code, one can choose to use tools such as [JSDoc](https://jsdoc.app/) or [docsify.js](https://docsify.js.org). Use the gh-pages to provide this documentation for other developers and users: https://itggot-te4.github.io/TE4/

## Testing
Every developer has heard of how useful tests are but to actually think in a TDD manner is something entirely different. Consider the different types of tests: https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html

## Continious integration
Every commit that is pushed to the remote should be free of syntax errors and should still pass the "build" phase + basic tests. To reinforce testing into an application a CI pipeline is put in place to check every commit and even update reports for code coverage or automatic merging of code. [Github actions](https://github.com/features/actions) is one of the simplest solutions to this. Update the .github/workflows yaml files for the project specific configuration. 

## Code quality
There are several tools that can be integrated into the CI pipeline. One of those tools can be used to monitor code quality. [Code climate](https://codeclimate.com/quality/) is a free application which has support for finding duplicated code and can be setup to reinfore a certain codestyle.

Another tool that can be used in the CI pipeline is [Semmle QL / LGTM](https://lgtm.com) for automatic security checks on new pull requests.

## Refactoring
Refactoring is the process of improving the design of existing code without altering its external behavior. It's a critical step in the process, but often overlooked <sup>2</sup>. This should be part of a strong code review culture on any serious project.

## Git flow
- Don't push to master, use a develop branch
- https://nvie.com/posts/a-successful-git-branching-model/
- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

<sup>1</sup>: [ioscpp guidelines](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md).  
<sup>2</sup>: https://thoughtbot.com/playbook/developing/refactoring
