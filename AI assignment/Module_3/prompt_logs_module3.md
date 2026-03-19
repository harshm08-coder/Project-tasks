# AI Prompt Logs -- Module 3

## AI-Assisted Refactoring with IDE Tools

------------------------------------------------------------------------

# 1. Introduction

This document contains the prompt history used during the AI-assisted
refactoring of `legacy_code.py` into `refactored_sort.py`.

The prompts demonstrate structured AI usage, validation, and responsible
development practices.

------------------------------------------------------------------------

# 2. Prompt Log Details

------------------------------------------------------------------------

## Prompt 1 -- Code Analysis

**Prompt Used:** "Analyze this quicksort implementation and identify
code smells, structural issues, and improvement opportunities."

**AI Suggestions:** - Improve function documentation - Avoid mutating
input list - Separate input/output from business logic - Improve naming
clarity - Add error handling

**Action Taken:** - Reviewed suggestions - Planned modular refactoring -
Confirmed recursion logic manually before modifying

------------------------------------------------------------------------

## Prompt 2 -- Improve Readability

**Prompt Used:** "Refactor this function to improve readability and
follow clean code principles without changing functionality."

**AI Suggestions:** - Add type hints - Use TypeVar for generic support -
Improve docstrings - Create separate utility functions

**Action Taken:** - Implemented generic typing - Expanded
documentation - Improved naming consistency

------------------------------------------------------------------------

## Prompt 3 -- Avoid Input Mutation

**Prompt Used:** "Modify the quicksort implementation so that it does
not mutate the original list."

**AI Suggestions:** - Use random.choice() instead of pop() - Avoid
modifying input collection

**Action Taken:** - Replaced pop() with choice() - Verified original
list remains unchanged - Tested edge cases

------------------------------------------------------------------------

## Prompt 4 -- Add Descending Sort Feature

**Prompt Used:** "Add a function to sort the list in descending order
while maintaining modular structure."

**AI Suggestions:** - Create quick_sort_descending() - Reuse partition
logic - Reverse partition comparison

**Action Taken:** - Implemented quick_sort_descending() - Verified
recursion correctness - Added documentation examples

------------------------------------------------------------------------

## Prompt 5 -- Add Error Handling

**Prompt Used:** "Add proper error handling and input validation for
user input."

**AI Suggestions:** - Wrap input parsing in try/except - Create reusable
error display function - Handle empty input case

**Action Taken:** - Added parse_integer_input() - Added
display_error() - Added try/except in main()

------------------------------------------------------------------------

## Prompt 6 -- Improve User Experience

**Prompt Used:** "Improve CLI output formatting to make results clearer
for users."

**AI Suggestions:** - Display original list - Show ascending and
descending outputs clearly - Use formatted print statements

**Action Taken:** - Implemented display_results() - Structured console
output

------------------------------------------------------------------------

# 3. Validation & Manual Review

All AI suggestions were:

-   Manually reviewed
-   Tested for correctness
-   Validated against recursion logic
-   Checked for duplicate handling
-   Verified edge cases (empty list, duplicates, strings)

No AI-generated code was accepted without verification.

------------------------------------------------------------------------

# 4. Responsible AI Usage Reflection

During refactoring:

-   AI was used as a code assistant, not as a replacement for reasoning.
-   All logic was manually verified.
-   Recursion correctness was double-checked.
-   Type safety improvements were validated in IDE.
-   Error handling was tested with invalid inputs.

This ensured high-quality refactoring aligned with clean code
principles.

------------------------------------------------------------------------

# 5. Conclusion

The prompt engineering approach evolved from simple refactoring requests
to structured feature enhancement and defensive programming
improvements.

The AI-assisted process resulted in:

-   Improved modularity
-   Better type safety
-   Enhanced documentation
-   Stronger user interaction
-   Production-ready structure

This demonstrates practical and responsible AI-assisted software
refactoring.
