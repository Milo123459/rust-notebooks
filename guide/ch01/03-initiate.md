# Initiate a project

The first step is initiating a project, and it's very easy!

Firstly, lets say you have already mae a directory for your project, for example: Ours for this is `rust-notebooks`, you CD into the directory, and run `cargo init`. This initiates a blank project.

Lets say you want Cargo to make the directory for you. Simply type `cargo new <poject-name>`, so for us, this'd be `cargo new rust-notebooks`.

Let's analyze what a freshly brewed project looks like.

```text
Cargo.lock
Cargo.toml
.gitignore
target/
src/
    main.rs
```

If for some reason, `.gitignore` isn't created, just add `target` to the gitignore file. You don't want to commit the target directory, trust me!

Now, lets talk about `src/main.rs` - the first few lines of our Rust project!

```rs
fn main() {
    println!("Hello, world.");
}
```
