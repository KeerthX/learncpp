# Lesson 1.2: Installing Visual C++

## Objective
To set up the development environment for coding in C++ using Visual Studio (or another IDE).

## Choosing an IDE

An Integrated Development Environment (IDE) simplifies the process of writing, running, and debugging code.  
Popular options include Visual Studio (Windows), Code::Blocks, and CLion.

## Installing Visual Studio for C++

1. **Step 1:** Go to Visual Studio's download page.
2. **Step 2:** Download the free Community Edition (if you're a student or hobbyist).
3. **Step 3:** Run the installer and select the "Desktop development with C++" option.
4. **Step 4:** Let the installation complete.

## Setting Up Visual Studio

- Open Visual Studio after installation.
- Create a new project by selecting `File > New > Project`.
- Choose C++ as the language and Console App as the template.
- Set up your project folder and click Create.

## Configuring Visual Studio for C++

- Ensure all necessary C++ components are installed via the Installer.
- Set up proper paths and include directories if using external libraries.

## Verifying the Installation

Write a simple C++ program like printing "Hello, World!" to ensure the setup works.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

- **Run the Program:** Press `Ctrl+F5` to run the program without debugging.
- If "Hello, World!" appears in the console, your setup is complete.

## Summary

- Visual Studio is one of the best IDEs for C++ development.
- Installation and setup are straightforward, and once done, you’re ready to start writing C++ code.
