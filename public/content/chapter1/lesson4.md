# Lesson 1.4: Creating and Running a Simple Program

## Objective
To write and execute a simple C++ program that introduces basic syntax, functions, and how to handle output.

## Writing Your First Program

Now that the IDE is set up and you have a basic understanding of its interface, let’s write your first program.

C++ programs typically start with the `main` function, which serves as the entry point for any C++ program.

```cpp
#include <iostream> // Preprocessor directive to include input-output stream

int main() {
    std::cout << "Welcome to LearnCPP!" << std::endl; // Output stream
    return 0; // Return 0 indicates successful execution
}
```

### Explanation:

- `#include <iostream>`: This directive tells the compiler to include the standard input/output stream (which allows you to use `std::cout` for printing to the console).
- `int main()`: The main function where the execution starts.
- `std::cout`: Sends output to the console.
- `std::endl`: Ends the current line and flushes the output buffer.
- `return 0`: Indicates that the program executed successfully.

## Compiling and Running

Press `Ctrl+F5` to run the program in Visual Studio.

If everything is correct, you will see the message "Welcome to LearnCPP!" in the console window.

If there are errors, Visual Studio will highlight them. Common issues include:

- Missing semicolons (`;`) at the end of statements.
- Mismatched brackets or parentheses.

## Understanding the Output Stream (`std::cout`)

`std::cout` stands for console output and is part of the `iostream` library.

Use `std::cout` to print text or variables to the screen.

### Example of Printing Variables:

```cpp
#include <iostream>

int main() {
    int age = 21;
    std::cout << "Your age is " << age << std::endl;
    return 0;
}
```

## Comments in C++

C++ allows you to add comments to your code, which are ignored by the compiler but helpful for documenting.

### Single-line comment:

```cpp
// This is a single-line comment
```

### Multi-line comment:

```cpp
/* 
   This is a 
   multi-line comment 
*/
```

## Basic Debugging

Debugging is the process of finding and fixing errors (bugs) in your code.

Visual Studio has built-in debugging tools. Set breakpoints by clicking next to a line number, then run the program with `F5`. The program will stop at the breakpoint, allowing you to inspect variables and see the execution flow.

- **Step-through Execution:** Use `F10` and `F11` to step through the code line by line for detailed inspection.

## Using Different Data Types

Variables in C++ can store different types of data, such as integers, floats, and characters.

### Example with Integers and Strings:

```cpp
#include <iostream>

int main() {
    int a = 5;
    int b = 10;
    std::cout << "The sum of a and b is: " << a + b << std::endl;
    return 0;
}
```

### Explanation:

- `int a = 5;` declares an integer variable `a` and assigns the value `5` to it.
- `std::cout << a + b;` outputs the result of `a + b` (in this case, 15).

## Summary

- In this lesson, we’ve written our first program, learned how to use `std::cout` for output, and explored some basic debugging techniques.
- We also learned about different data types, including how to use variables to store and manipulate data.
