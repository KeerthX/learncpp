# Primitive Data Types and Type Modifiers

## Primitive Data Types

Primitive data types are the most basic data types available within a programming language. They are the building blocks for data manipulation and include:

### 1. Integer (int)

An integer represents any whole number.

- **Size**: 2 or 4 bytes
  - **Unsigned**: Ranges from 0 to \(2^{32} - 1\)
  - **Signed**: Ranges from \(-2^{31}\) to \(2^{31} - 1\)
    - **MSB (Most Significant Bit)**:
      - Negative: 1
      - Positive: 0

### 2. Float (float)

A float represents a number with a fractional part (decimal number).

- **Size**: 4 bytes (up to 7 decimal digits)
- **Double**: 8 bytes (up to 15 decimal digits)

### 3. Character (char)

A character represents alphabets and special characters.

- **Size**: 1 byte

### 4. Boolean (bool)

A boolean represents true or false values, often used in logical operations.

- **Values**: Zero (false) and One (true)
- **Size**: 1 byte

### Code to Check for Size of Data Types

Here is a simple C++ program to check the size of various primitive data types.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a;          // declaration
    cout << "Size of int: " << sizeof(a) << " bytes" << endl; // 4

    float b;        // declaration
    cout << "Size of float: " << sizeof(b) << " bytes" << endl; // 4

    char c;         // declaration
    cout << "Size of char: " << sizeof(c) << " bytes" << endl; // 1

    bool d;         // declaration
    cout << "Size of bool: " << sizeof(d) << " bytes" << endl; // 1

    return 0;
}
```

## Type Modifiers

Type modifiers are keywords that alter the meaning of the base data type to yield a new data type. They can change the size or range of the data type. Below is a table summarizing the type modifiers:

| Modifier   | Data Type | Description                                 | Size             | Range                                       |
|------------|------------|---------------------------------------------|------------------|---------------------------------------------|
| `signed`   | int        | Allows both positive and negative values    | 2 or 4 bytes     | \(-2^{31}\) to \(2^{31} - 1\)               |
| `unsigned` | int        | Allows only non-negative values             | 2 or 4 bytes     | 0 to \(2^{32} - 1\)                         |
| `signed`   | char       | Allows both positive and negative values    | 1 byte           | \(-128\) to \(127\)                         |
| `unsigned` | char       | Allows only non-negative values             | 1 byte           | 0 to \(255\)                                |
| `short`    | int        | Decreases the size of the int               | 2 bytes          | \(-32,768\) to \(32,767\)                   |
| `long`     | int        | Increases the size of the int               | 4 or 8 bytes     | \(-2^{63}\) to \(2^{63} - 1\)               |
| `long`     | double     | Increases the size and precision of double  | 8 or 16 bytes    | up to 15 decimal digits for 8 bytes, more for 16 bytes |

This table provides a summary of the type modifiers, their applicable data types, descriptions, sizes, and ranges.

### Code to Check for Size of Data Types after Size Modification

The following C++ program demonstrates the use of type modifiers and checks the sizes of modified data types.

```cpp
#include <iostream>
using namespace std;

int main() {
    int a;                  // declaration
    cout << "Size of int: " << sizeof(a) << " bytes" << endl; // 4

    float b;                // declaration
    cout << "Size of float: " << sizeof(b) << " bytes" << endl; // 4

    char c;                 // declaration
    cout << "Size of char: " << sizeof(c) << " bytes" << endl; // 1

    bool d;                 // declaration
    cout << "Size of bool: " << sizeof(d) << " bytes" << endl; // 1

    unsigned int e;         // declaration
    cout << "Size of unsigned int: " << sizeof(e) << " bytes" << endl; // 4

    short int f;            // declaration
    cout << "Size of short int: " << sizeof(f) << " bytes" << endl; // 2

    long int g;             // declaration
    cout << "Size of long int: " << sizeof(g) << " bytes" << endl; // 8

    double h;               // declaration
    cout << "Size of double: " << sizeof(h) << " bytes" << endl; // 8

    long double i;          // declaration
    cout << "Size of long double: " << sizeof(i) << " bytes" << endl; // 16

    signed char j;          // declaration
    cout << "Size of signed char: " << sizeof(j) << " bytes" << endl; // 1

    unsigned char k;        // declaration
    cout << "Size of unsigned char: " << sizeof(k) << " bytes" << endl; // 1

    return 0;
}
```

This detailed explanation and code examples should provide a comprehensive understanding of primitive data types and type modifiers in C++.

