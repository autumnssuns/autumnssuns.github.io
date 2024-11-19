---
layout: "@layouts/ProseLayout.astro"
title: Introduction to prompt engineering with GitHub Copilot
---

# Introduction to prompt engineering with GitHub Copilot

A course by Microsoft Learn, access at: https://learn.microsoft.com/en-us/training/modules/introduction-prompt-engineering-with-github-copilot/.

The following are notes / summaries from the course for my own learning purposes.

## Introduction

GitHub Copilot, powered by OpenAI, revolutionizes software development by understanding your project through its training on natural language and billions of lines of source code from public sources, including GitHub repositories. This enables it to offer context-aware suggestions.

To maximize GitHub Copilot's potential, prompt engineering is essential. It involves crafting clear and precise prompts to guide Copilot effectively.

In this module, you'll explore:
- Principles and best practices of prompt engineering.
- How GitHub Copilot processes prompts to generate context-aware responses.
- The data flow for code suggestions and chat in GitHub Copilot.
- The role of Large Language Models (LLMs) in Copilot and prompting.
- Techniques for creating effective prompts to enhance Copilot's performance.
- The relationship between prompts and Copilot's responses.
- How Copilot manages data from prompts, including secure transmission and content filtering.

## Prompt engineering foundations and best practices

Prompt engineering is the process of crafting clear instructions to guide AI systems, like GitHub Copilot, to generate context-appropriate code tailored to your project's specific needs. This ensures the code is syntactically, functionally, and contextually correct.

### Principles

Core rules for creating effective prompts:
- **Single**: Focus on a single, well-defined task or question.
- **Specific**: Provide explicit and detailed instructions.
- **Short**: Keep prompts concise and to the point.
- **Surround**: Use descriptive filenames and keep related files open for context.

### Best practices

- **Provide enough clarity**: Aim for explicitness in your prompts.
  - Example: `Write a Python function to filter and return even numbers from a given list`.
  - ![Screenshot of a Copilot chat with a Python prompt.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-python-prompt.png)
- **Provide enough context with details**: Enrich Copilot's understanding with context.
  - Example: Add comments at the top of your code.
  - ![Screenshot of comments added to code for better Copilot suggestions.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-add-comments-example.gif)
- **Provide examples for learning**: Clarify requirements and expectations with examples.
  - ![Screenshot of an example used to clarify prompts for Copilot.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-clarify-prompts-example.gif)

### Assert and iterate

- Iteration is key: Refine prompts based on initial outputs.
- Treat initial suggestions as steps in a dialogue.
- Enrich comments with added details and examples if needed.

### How Copilot learns from your prompts

- **Zero-shot learning**: Generates code without specific examples.
  - Example: Create a function to convert temperatures between Celsius and Fahrenheit.
  - ![Screenshot of Copilot creating a temperature conversion code from a comment.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-create-temp-conversion-from-comment.png)
- **One-shot learning**: Provides a single example for context-aware responses.
  - Example: Provide a temperature conversion function and ask for a similar one.
  - ![Screenshot of Copilot using an example to create similar temperature conversion code.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-create-temp-conversion-from-example.png)
- **Few-shot learning**: Uses several examples for balanced precision.
  - Example: Generate code that sends a greeting depending on the time of day.
  - ![Screenshot of Copilot generating greeting code based on multiple examples.](https://learn.microsoft.com/en-us/training/github/introduction-prompt-engineering-with-github-copilot/media/2-generate-greeting-code-from-examples.png)


## Summary

This module provides an introduction to prompt engineering with GitHub Copilot, emphasizing the importance of crafting clear and precise prompts. Key principles include focusing on single, specific tasks, providing enough context, and using examples to guide Copilot. The module also covers different learning approaches like zero-shot, one-shot, and few-shot learning, and highlights the iterative nature of refining prompts to achieve better code suggestions.

