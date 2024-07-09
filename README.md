# Algorithm Notebook

## Setup
```bash
npm install
npm link
```

## Structure
```sh
root
|__ algorithms               # All algorithms 
        |__ <any-item>
            |__input.txt     # Input data
            |__ref.md        # Reference link 
            |__resolved.ts   # Your resolved code will be here
|__ cli                      # Custom command lines to simplify complex steps
|__ utils                    # Helper functions
```

## Command line
Using these cli to execute algorithm easily
### List all algorithm
```bash
algoCli list
```
### Execute algorithm
```bash
algoCli execute <algorithm-name>
```
