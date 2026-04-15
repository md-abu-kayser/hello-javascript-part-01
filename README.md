# Hello JavaScript - Part 01

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)

A comprehensive introduction to JavaScript programming fundamentals, designed for beginners and aspiring developers. This project covers essential concepts from basic syntax to advanced topics, with hands-on examples and practical tasks.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Tasks](#tasks)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Comprehensive Coverage**: From basic variables to advanced JavaScript concepts
- **Interactive Examples**: Hands-on code snippets for each topic
- **Practical Tasks**: Real-world exercises to reinforce learning
- **Modern JavaScript**: ES6+ syntax and best practices
- **Educational Focus**: Clear explanations and progressive difficulty
- **Open Source**: MIT licensed for learning and contribution

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **Visual Studio Code** (recommended) - [Download here](https://code.visualstudio.com/)
- Basic understanding of programming concepts (optional but helpful)

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/md-abu-kayser/hello-javascript-part-01.git
   cd hello-javascript-part-01
   ```

2. **Open in VS Code:**

   ```bash
   code .
   ```

3. **Install dependencies (if any):**
   ```bash
   npm install
   ```

## 💻 Usage

### Running Examples

Each JavaScript file in the `introduction-to-javascript/` directory can be executed using Node.js:

```bash
# Run a specific example
node introduction-to-javascript/variable.js

# Or run all examples
for file in introduction-to-javascript/*.js; do echo "Running $file"; node "$file"; done
```

### Learning Path

1. Start with `first.js` - Your first JavaScript program
2. Progress through variables, data types, and operations
3. Complete the tasks in `js-introduction-tasks/`
4. Check solutions in `js-introduction-tasks-solution/`

## 📁 Project Structure

```
hello-javascript-part-01/
├── introduction-to-javascript/
│   ├── first.js              # Your first JavaScript program
│   ├── variable.js           # Variable declaration and usage
│   ├── types.js              # Data types (string, number, boolean)
│   ├── number.js             # Number operations and math
│   ├── math.js               # Mathematical functions
│   ├── shorthand.js          # Shorthand operators
│   ├── mixedOp.js            # Mixed operations
│   ├── naming.js             # Naming conventions
│   └── INTRO_JS.md           # Detailed introduction guide
├── js-introduction-tasks/
│   ├── Task1.md              # First practical task
│   ├── Task2.md              # Second task
│   ├── Task3.md              # Third task
│   └── Task4.md              # Final task
├── js-introduction-tasks-solution/
│   ├── task1.js              # Solution for Task 1
│   ├── task2.js              # Solution for Task 2
│   ├── task3.js              # Solution for Task 3
│   └── task4.md              # Solution for Task 4
├── LICENSE                   # MIT License
└── README.md                 # This file
```

## 🔍 Examples

### Variables and Data Types

```javascript
// Variable declaration
var weight = 38;
let price = 38;
const year = 1995;

// Data types
let name = "JavaScript"; // String
let age = 25; // Number
let isActive = true; // Boolean

console.log(name, age, isActive);
```

### Mathematical Operations

```javascript
// Basic math
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;

// Advanced operations
let power = Math.pow(2, 3); // 8
let squareRoot = Math.sqrt(16); // 4

console.log(sum, difference, product, quotient, power, squareRoot);
```

## 📝 Tasks

This project includes four practical tasks to test your understanding:

1. **Task 1**: Basic variable manipulation
2. **Task 2**: Working with data types and operations
3. **Task 3**: Implementing mathematical functions
4. **Task 4**: Advanced JavaScript concepts

Solutions are provided in the `js-introduction-tasks-solution/` directory.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines

- Follow JavaScript ES6+ best practices
- Add comments to complex code sections
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Author**: Md Abu Kayser
- **GitHub**: [https://github.com/md-abu-kayser](https://github.com/md-abu-kayser)
- **Email**: abu.kayser.official@gmail.com

---

⭐ **Star this repository** if you found it helpful!

_Happy coding! 🚀_
