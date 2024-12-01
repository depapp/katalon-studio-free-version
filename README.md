# Free Katalon Studio
Execute Katalon Studio project on Github Actions with No Cost

## Usage
```yaml
uses: depapp/katalon-studio-free-version@v1.0.0
with:
  testSuitePath: 'Test Suites/Web/TS - Login'
  browserType: 'Chrome'
  executionProfile: 'default'
```
change the `testSuitePath`, `browserType`, `executionProfile` values to your own.
