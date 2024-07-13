# Playwright Multi Project Test Example

This repo is an example setup to house test for multiple project by defining them in `playwright.config.ts` file like below:

```typescript
projects: [
{
name:  'project1-smoke',
testDir:  './tests/project1/smoke',
use: { ...devices['Desktop Chrome'] },
},
]
```

## Folders

Under `tests/` folder there are 2 projects, `projects1/` and `project2/`. Each project has its `pom/` folder to house all the page object model definitions. There are addition sub folders such as `smoke/` `regression/` to group test for easiness.   

## NPM Command

below `npm` command added in `package.json` file for easiness. Note: `npm run all` will run all the tests for all projects in the `tests/` folder. Run `npm run report` to display report with tracing. Tracing have been turned on inside `playwright.config.ts`. You can refer to playwright docs for more option:  https://playwright.dev/docs/api/class-testoptions#test-options-trace
 ```json
 "scripts": {
"ui": "playwright test --ui",
"p1s": "playwright test --project=project1-smoke",
"p2s": "playwright test --project=project2-smoke",
"all": "playwright test",
"report": "playwright show-report"
},
```

