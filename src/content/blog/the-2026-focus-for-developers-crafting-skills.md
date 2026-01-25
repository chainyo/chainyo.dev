---
title: "The 2026 Focus for Developers: Crafting Skills"
date: "2026-01-22"
summary: "Why I think skills, not prompts, define 2026 developer workflows, with a timeline and a practical example."
---

# The 2026 Focus for Developers: Crafting Skills

A year ago I typed random prompts with a loose guide. Sometimes it worked, often it did not.

This is how that turned into a simple system I can share with a team. I think the key skill in 2026 is crafting skills, not just prompts.

A skill is a short, named workflow or command in an AI tool. Some tools call it a workflow, some call it a command. I call it a skill because [Codex CLI](https://developers.openai.com/codex/cli) uses this term. And I use [Codex CLI](https://developers.openai.com/codex/cli).

## Case Study Timeline

### Phase 0: Random prompts, no guardrails
I was exploring and testing, and everything was improvised. The AI helped, but I could not repeat results.

My inputs were fuzzy and the tool did not know the rules of my repo.

In Python repos, the AI suggested [`pip`](https://pip.pypa.io/) when the project used [`uv`](https://docs.astral.sh/uv/). In TypeScript, it suggested [`npm`](https://www.npmjs.com/) when we used [`bun`](https://bun.com/).

I was mostly using auto-complete because prompting and agents were not reliable.

The outcome was big prompts, lots of rework, and me losing trust fast. So, I decided to keep AI out of core work and lean on auto-complete.

### Phase 1: Clear prompts
Then, I started to be more explicit: say the task, say the limits, say the output.

The results got better, but they depended on my energy.

Some days I gave a lot of context. Some days I was tired and skipped it. Some days I just insulted the AI for being dumb.

The outputs were not stable or reliable. The outcome was fewer misunderstandings, but I still had to repeat myself and the results were shaky.

So, I decided to add a short checklist before prompts so I would not skip key details.

### Phase 2: Context matters
I started to understand that context was super important. Prompts are not enough without context.

I found a clear summary in the OpenAI cookbook on context engineering and memory.

> “At its core, context engineering is about shaping what the model knows at any given moment.”
>
> — OpenAI Cookbook, [Context Engineering for Personalization](https://cookbook.openai.com/examples/agents_sdk/context_personalization)

My take is that good context is curated: keep long-term memory, keep session memory, trim the rest, and re-inject what matters.

In my view, the conclusion is simple—shape the context layer, do not just add more text.

The CLI tools are powerful, but they need to know my repo.

What are the branch rules? How do we do reviews? Which checks are required? Where are the product docs?

The AI has to see the same rules we see.

So, I started to write key notes in Markdown, but the files were scattered and the context still bloated.

I relied on tool summaries after the chat got too long and tried to restart from those Markdown files. The outputs were not great and I still had to do a lot by hand.

The outcome was better results with more context, but I spent more time managing it and fixing output.

I decided to keep only the most useful context and stop relying on long chat history.

### Phase 3: Agents and personas
I tried agents with personas: a reviewer, a designer, a product manager.

It sounded good at the beginning. In practice, it did not work well.

The automation between agents was not clean. They would hallucinate. They were too polite to each other and accepted work that was not great.

The outcome was more complexity on my side, but not better work.

I decided to drop the persona setup and stop trying to automate agent chains.

### Phase 4: Skills as the workflow
Now tools like [Codex CLI](https://developers.openai.com/codex/cli) support skills.

A skill is a short sequence of commands with or without user input.

This is where the value shows up. In practice, a model like [GPT-5.2-Codex](https://openai.com/index/introducing-gpt-5-2-codex/) shines when a skill loads only the exact context for a task.

It is not random. I know what a skill needs. The tool loads it and starts from there.

The best part is that a skill can be improved over time. If something goes wrong, I tweak the skill and add more rules or more context.

From what I see, the output gets better and expectations match.

It was day and night.

The outcome was repeatable workflows, smaller prompts, and outputs that matched my rules.

So, I decided to use lots of small skills because they cut repeat work and make results more predictable.

## What skills actually do (and why teams should share them)
Skills help us keep the same rules. I use them for:
- branch naming rules
- review workflow habits
- feature implementation checklists
- test and release rituals
- ideation phase with actionnable outputs

If you are on a team, sharing these skills is the fastest way to align.

A new teammate can run the same workflow you run, with the same repo knowledge built in.

The skill becomes the onboarding doc.

## Docs are the fuel for good AI workflows
A skill does not need to read everything about your product. It needs the right slices:
- the stack and tools
- the branch and review rules
- the test plan and required checks
- the product docs tied to the task
- the problem you want to solve

If your repo has clean, specific Markdown docs, skills can load only those files.

That cuts context and keeps the AI focused.

This is why keeping docs up to date is not busywork. It is the input for your AI workflows.

And it is a win-win: when docs are current, humans understand the code and the codebase better too.

There is no trade-off in documenting everything in Markdown files in the repo.

This is also part of context engineering.

> “Context engineering is the systematic process of designing and optimizing context collection, storage, management, and usage to enhance machine understanding and their task performance.”
>
> — [Context Engineering 2.0](https://arxiv.org/pdf/2510.26493)

If we want AI tools to be great at coding, I believe the goal is not just writing code faster.

It is to make software engineers strong at orchestration and architecture. That shift makes context engineering a key idea to understand, in my view.

I read it as: turn messy intent into clean, usable context. Skills are one of the most practical ways to do that.

In my opinion this Context Engineering 2.0 paper is a must read for all software engineers in 2026.

## Skills do not need to be complex
The first skills in a repo should not try to do a full feature from scratch.

Start with simple, boring work you repeat. Branch naming rules and review workflow are great examples.

Some of my most useful skills are tiny and specific.

One skill can do a single thing really well: check conventions, run checks, finalize a task. The power comes from clarity, not over-engineered steps.

Here is a skill I use to finalize [OpenSpec](https://openspec.dev/) task changes after approval.

It runs checks, fixes what it can, then commits and pushes:

```md title="Openspec Task Final Analyzer"
---
name: openspec-task-final-analyzer
description: Final analyzer for approved OpenSpec task changes. Use after user approval or when asked to finalize/commit and push; runs checks, fixes what it can, re-runs checks, then commits and pushes.
---

# OpenSpec Task Final Analyzer

## Overview
Run the final safety gates for an approved OpenSpec task: verify task checklist completion, run checks, fix issues if needed, then commit and push.

## Workflow

### 1) Confirm approval and scope
- Ensure the user has explicitly approved the reviewed changes.
- Confirm which task/change-id is being finalized and the intended commit message.
- If approval is missing, stop and send the user back to the implementer review gate.

### 2) Check working tree state
- Run `git status -sb` and identify unrelated or untracked changes.
- If unrelated changes exist, ask the user how to handle them before continuing.

### 3) Verify task checklist completion
- Open the change's `tasks.md` and confirm the target task step is marked complete (e.g., `3.4`).
- If the step is not complete, update `tasks.md` to reflect completion before running checks.

### 4) Run standard checks
- Use repo scripts when present: `bun run format`, `bun run lint`, `bun run typecheck`, `bun run test`.
- If any script is missing, ask the user for the preferred command.
- If a check fails:
  - Fix issues when possible (format/lint fixes, missing imports, minor test fixes).
  - Re-run the full check set after changes.
  - If failures require larger changes or product decisions, stop and request guidance.

### 5) Commit and push
- Stage only task-related changes; avoid unrelated files.
- Commit using `task(<task-id>): <short explanation>` unless the user provides a different message.
- Push to `origin` on the current branch.
- If `origin` or branch tracking is missing, stop and ask the user how to proceed.

### 6) Report results
- Confirm the checks ran and the commit/push succeeded.
- Provide the commit hash and any remaining follow-ups.
```

This skill is clear, simple, straightforward and saves me a lot of time every day.

## Spec-driven work makes skills better
I use [OpenSpec](https://openspec.dev/) on all my projects, even when there is no code.

You can use [GitHub Spec Kit](https://github.com/github/spec-kit) too, but in my case it is [OpenSpec](https://openspec.dev/). It is lightweight and easy to tweak. From what I see, it works with any kind of AI workflow or tool.

I do not need anything more to stay aligned between what I want in the codebase and what the AI needs to implement changes.

Every change is tracked as a spec in the repo. That makes the work predictable.

I see skills relying on the spec files instead of stuff only in my head or team members' heads.

In my experience, the more boring and repeatable the rules are, the better the outputs get. I have seen that the more precise and detailed things are, the better the model acts during implementation.

## The shift that matters
I really think skills are here to stay. In 2026, they should be your top priority, if you are a software engineer.

You do not have to do it all on day one. Build a little each day.

Add a new skill. Add a new rule. Track the changes. Review what happens in the repo.

It sounds boring, but I enjoy it. I would never go back.

I can run easily three different projects in parallel. Right now I am doing all of that at once: an iOS app with Expo, a FastAPI backend with AI integration, and a TypeScript React component for a website.

I even use a skill to write blog posts and social posts. I write them, and the AI assists me.

I feel the AI is no longer guessing. It is executing.

And it feels like a super power.
