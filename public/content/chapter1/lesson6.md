# Lesson 1.6: Using Input and Output Streams

## Introduction
In C++, input and output are handled using **streams**. A stream is essentially a sequence of bytes or data, and C++ provides several built-in streams to manage input and output.

## Output using `std::cout`
The `std::cout` object (from the `<iostream>` header) is used for output. It prints data to the standard output, typically the console. The `<<` operator (insertion operator) is used with `std::cout` to send data to the output stream.

### Example:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;  // Output to the console
    return 0;
}
```

In the above example:
- `"Hello, World!"` is sent to `std::cout`.
- `std::endl` inserts a new line (equivalent to `\n`) and flushes the output buffer.

## Input using `std::cin`
The `std::cin` object (also from the `<iostream>` header) is used for input. The `>>` operator (extraction operator) reads input from the standard input (keyboard).

### Example:
```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;  // Reading input
    std::cout << "You are " << age << " years old." << std::endl;
    return 0;
}
```

Here, the user is prompted to enter their age, which is stored in the `age` variable and then displayed.

## Working with Different Data Types
You can use `std::cin` and `std::cout` to work with different data types such as `int`, `float`, `char`, and `std::string`.

### Example:
```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    float height;
    
    std::cout << "Enter your name: ";
    std::cin >> name;  // Read string input

    std::cout << "Enter your height: ";
    std::cin >> height;  // Read float input

    std::cout << "Hello " << name << "! Your height is " << height << " meters." << std::endl;
    return 0;
}
```

## Handling Multiple Inputs
You can chain multiple `>>` operators to handle multiple inputs in one line.

### Example:
```cpp
int a, b;
std::cin >> a >> b;
```

## Summary
- C++ uses **streams** to manage input and output operations. The two main streams used are `std::cin` for input and `std::cout` for output, both provided by the `<iostream>` header.
- The **insertion operator** `<<` sends data to the output stream, and the **extraction operator** `>>` reads data from the input stream.
- You can handle multiple types of input and output (e.g., `int`, `float`, `string`) using these operators.
- You can chain input and output operations for multiple variables in a single line.
- The `std::endl` or `\n` is used to add a new line to the output.

These basic I/O operations form the foundation of interaction with the user in C++ programs.
