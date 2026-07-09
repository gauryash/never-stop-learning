---
title: Learning Rust
description: Systems programming with memory safety and performance
icon: "🦀"
---

## Why Rust?

Rust is a systems programming language that emphasizes safety, speed, and concurrency. It achieves memory safety without garbage collection through its ownership system.

## Key Concepts

### Ownership
Every value in Rust has a single owner. When the owner goes out of scope, the value is dropped.

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 is moved to s2
    // println!("{}", s1); // Error: s1 is no longer valid
}
```

### Borrowing
References allow you to use values without taking ownership.

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
}

fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);
    println!("Length: {}", len);
}
```

### Lifetimes
Lifetimes ensure that references are always valid.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

## Getting Started

### Install Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Hello World
```rust
fn main() {
    println!("Hello, world!");
}
```

### Build and Run
```bash
cargo new my_project
cd my_project
cargo run
```

## Learning Path

1. **Week 1-2**: Syntax, variables, basic types
2. **Week 3-4**: Ownership, borrowing, lifetimes
3. **Week 5-6**: Structs, enums, pattern matching
4. **Week 7-8**: Error handling, collections
5. **Week 9-12**: Concurrency, async/await, projects

## Resources

- [The Rust Book](https://doc.rust-lang.org/book/) - Official documentation
- [Rustlings](https://github.com/rust-lang/rustlings) - Small exercises
- [Exercism Rust Track](https://exercism.org/tracks/rust) - Practice problems
