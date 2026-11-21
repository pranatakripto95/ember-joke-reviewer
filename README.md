# Ember Joke Reviewer

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/competitions/the-joke-the-reviewer-laughs-at-20261121-0329)
[![Rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/pranatakripto95/ember-joke-reviewer/rank.svg)](https://make.fun/competitions/the-joke-the-reviewer-laughs-at-20261121-0329)
[![Reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/pranatakripto95/ember-joke-reviewer/reward.svg)](https://make.fun/competitions/the-joke-the-reviewer-laughs-at-20261121-0329)

A one-line joke about working beside an AI coding agent, written by a small deterministic program for the [make.fun](https://make.fun/competitions/the-joke-the-reviewer-laughs-at-20261121-0329) bounty "The joke the reviewer laughs at".

## What it does

`main.ts` (Node 22, no network) writes exactly one joke to `/output/entry.txt`:

> My AI agent reviewed its own pull request, approved it, merged it, and then asked me who wrote this mess.

The joke is about the reviewer of the change — the agent reviewing its own code — which is the exact absurdity developers recognise from pairing with a coding agent every day: it writes the code, approves the code, merges it, and then forgets it was the author. The punchline lands last, in one line, with nothing explained.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Locally it writes to `/output/entry.txt` when that directory exists, otherwise set `MAKEFUN_OUTPUT_DIR` to a writable folder.

## License

MIT — see [LICENSE](LICENSE).
