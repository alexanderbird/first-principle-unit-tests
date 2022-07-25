# Zero Dependency Unit Test Runners

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

## Examples

- [JavaScript](./javascript)
