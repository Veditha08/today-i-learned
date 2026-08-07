# Software Testing

## Types of Tests
Unit Test: test individual functions in isolation
Integration Test: test interaction between modules
E2E Test: simulate full user flows
Regression Test: ensure new changes don't break old functionality

## Testing Pyramid
Many unit tests (fast, cheap)
Some integration tests
Few E2E tests (slow, expensive)

## Jest (JavaScript Testing)
describe: group related tests
test / it: individual test case
expect: assertion
toBe: strict equality
toEqual: deep equality
toThrow: expect error thrown
beforeEach / afterEach: setup/teardown

## Mocking
Replace real dependencies with controlled fakes.
jest.mock(): mock entire module
jest.fn(): mock individual function
mockResolvedValue(): mock async function
