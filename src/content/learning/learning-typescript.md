---
title: Learning TypeScript
description: Type-safe JavaScript for large-scale applications
icon: "📘"
---

## What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type checking to JavaScript, catching errors at compile time rather than runtime.

## Why TypeScript?

- **Early error detection**: Catch bugs before running code
- **Better IDE support**: Autocomplete, refactoring, navigation
- **Self-documenting code**: Types serve as documentation
- **Scalability**: Essential for large codebases and teams

## Basic Types

```typescript
// Primitive types
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

// Arrays
let scores: number[] = [95, 87, 92];
let names: Array<string> = ["Alice", "Bob"];

// Tuples
let person: [string, number] = ["Alice", 30];

// Enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## Interfaces and Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  role?: "admin" | "user" | "guest";
}

type Status = "active" | "inactive" | "pending";

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

## Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>("hello");

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

## Getting Started

```bash
# Install TypeScript
npm install -g typescript

# Compile a file
tsc index.ts

# Initialize a project
tsc --init
```

## Learning Path

1. **Week 1**: Basic types, interfaces, functions
2. **Week 2**: Generics, enums, type narrowing
3. **Week 3**: Classes, decorators, modules
4. **Week 4**: Utility types, mapped types
5. **Week 5-6**: Advanced patterns, TypeScript with React/Node

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Try TS online
- [Type Challenges](https://github.com/type-challenges/type-challenges) - Practice problems
