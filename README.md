# Examples of unit testing without any test tooling

> Theoretically, if we didn't have a test runner, could we unit test?

In practice, it doesn't take much to write a minimal unit test tool (if it's a
small, limited use tool). Of course, if you have access to off the shelf unit
testing tools, they'll be way better than what you can roll on your own.
However, in a pinch, you could start TDDing with a trivial amount of test
tooling. 

I've done this professionally when working in a language with no off the shelf
test runners (Excel VBA). It also could be useful if you're developing with an
esoteric programming language (without an off the shelf test runner) or you're
working for a very short amount of time (days) in a programming language that
you're not familiar with, and it's not worth the time investment to learn about
the proper unit testing tools in the language. You may also find yourself in an
environment where you can't add any new dependencies, so it's outside of your
power to add an off the shelf test runner. None of these need be obstacles to
unit testing. This repo gives examples of bare-bones test runners that can be
built in minutes or hours and iterated on while you write unit tests.

## Test tooling parts

What do you need to run unit tests?
- pass/fail mechanism (the simplest is to throw a descriptive error on failure;
  more complicated mechanisms give statistics and show results from multiple
  failures)
- Assertion tools for comparing expected with actual
- test runner
   - with a manual/explicit test runner, each test method is explicitly called
   - the test runner may discover test methods (through reflection) so they
     don't have to be called explicitly
   - the test runner may discover test files so they don't have to be called
     explicitly
   - for small numbers of test methods and test files, it would be fine to call
     them all explicitly

## Examples

*Using these examples: each README has an example of the test runner output.
You can browse to the test file for the example to get an idea of what the test
syntax looks like. You'll see it's not that far off from familiar testing
tools.*

- [JavaScript (simple -- single test file, with test method discovery)](./javascript-simple)
- [JavaScript (with test method and testfile discovery)](./javascript-with-test-file-discovery)

## Contributing

Interested in contributing your own examples?
1. Submit a PR with
    1. your example in a subdirectory prefixed with the language of your choosing
    2. a README at the root of the subdirectory with test runner output examples (pass and fail)
    3. update the main README with a link and description of your example
