# tailwind-jit-bug
This is the sample repo to repro the Tailwind breakpoints not working issue on CRA project.

## Steps to reproduce the bug

1. clone the repo and `yarn install` dependencies
2. `yarn start` to start the webpack devserver
3. Drag the browser border to make the width less than 640px and you can see the **break points `sm` not working in the `Body component`**

### Expected behavior

When turn off the `JIT` mode, the `breakpoints` works just fine. Layout fall back to `flex-col` when window size less than `640px`. See below:

![normal](./pics/normal.png)

### Breakpoints failed when turn on JIT mode

When `JIT` mode is on, the `breakpoints` failed. Layout persists `flex-row` even when window size less than `640px`. See below:

![bug](./pics/bug.png)
