# Lesson 1.5: Understanding C++ Syntax and Structure

## Objective
To grasp the fundamental syntax and structure of C++ programs and understand how the language is written.

## Basic Structure of a C++ Program
Every C++ program follows a general structure that includes:

1. **Preprocessor Directives**: Starts with `#include` to include libraries (e.g., `<iostream>`).
2. **Main Function**: The entry point where program execution begins.
3. **Statements and Expressions**: Inside the `main` function, these execute logic.
4. **Return Statement**: Used to exit the `main` function and send a return code to the OS.

```cpp
#include <iostream> // Preprocessor directive

int main() {
    std::cout << "Hello, World!" << std::endl; // Statement: output "Hello, World!"
    return 0; // Return statement indicating successful program completion
}
```

### Key Components:
- **Preprocessor Directives**: Start with `#`, like `#include`. These are commands to the compiler to include external code.
- **Curly Braces `{}`**: Indicate the beginning and end of a code block.
- **Semicolons `;`**: End every statement, like `std::cout << "text";`.

## Functions in C++
Functions allow you to divide your code into reusable sections. Every C++ program must have a `main()` function, but additional functions can be created as needed.

```cpp
int add(int a, int b) { // Function definition
    return a + b;
}

int main() {
    std::cout << add(3, 4) << std::endl; // Calling the add function
    return 0;
}
```

### Key Concepts:
- **Return Type**: Every function must specify the type of value it returns, like `int` for integers or `void` for no return value.
- **Parameters**: Functions can accept parameters to process data.

## Comments and Code Documentation
- **Single-line comments** start with `//` and help in explaining code.
- **Multi-line comments** are enclosed between `/*` and `*/`.

```cpp
// This is a single-line comment
/*
   This is a multi-line comment
*/
```

Comments are ignored by the compiler but are important for documentation and understanding code.

## Whitespace and Code Readability
In C++, whitespace (spaces, tabs, newlines) is ignored by the compiler but is crucial for code readability.

- Code that is clean and properly indented is easier to read and maintain.

```cpp
int main() {
    std::cout << "Hello" << std::endl;
    std::cout << "World" << std::endl;
    return 0;
}
```

- Use consistent indentation to visually separate code blocks.

## Naming Conventions
- **Variables**: Should be descriptive. Use `camelCase` for variable names like `userName`.
- **Functions**: Typically follow `camelCase`, starting with a lowercase letter, like `calculateTotal()`.
- **Constants**: Use uppercase letters, separated by underscores, e.g., `MAX_SIZE`.

## The `main()` Function
The `main` function is essential in any C++ program. It is where the program execution begins.

```cpp
int main() {
    std::cout << "This is the main function!" << std::endl;
    return 0;
}
```

- The function returns an integer (`int`) and uses `return 0;` to signal that the program executed successfully.

## Operators in C++
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%` (addition, subtraction, multiplication, division, modulus).
- **Assignment Operator**: `=` (assigns a value to a variable).
- **Comparison Operators**: `==`, `!=`, `<`, `>`, `<=`, `>=` (used to compare values).
- **Logical Operators**: `&&`, `||`, `!` (AND, OR, NOT for boolean expressions).

```cpp
int a = 5;
int b = 10;
bool result = (a < b); // true
```

## Summary
- C++ has a well-defined structure, starting with preprocessor directives, followed by the `main()` function.
- Each statement ends with a semicolon, and proper indentation enhances code readability.
- Comments are essential for documentation, and understanding operators is key to writing basic logic.
