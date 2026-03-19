"""
Quick Sort Algorithm Implementation

A pure Python implementation of the quick sort algorithm with randomized
pivot selection for optimal average-case performance.

Quick sort is a divide-and-conquer algorithm that:
1. Selects a pivot element from the array
2. Partitions other elements into those less than and greater than the pivot
3. Recursively sorts the sub-arrays

Time Complexity:
    - Best/Average: O(n log n)
    - Worst: O(n²) - rare with randomized pivot
Space Complexity: O(n) due to creating new lists


For doctests run following command:
    python3 -m doctest -v legacy_code.py

For manual testing run:
    python3 legacy_code.py
"""

from __future__ import annotations

from random import choice
from typing import TypeVar

T = TypeVar('T')


def quick_sort(collection: list[T]) -> list[T]:
    """Sort a list using the quicksort algorithm with randomized pivot selection.

    This implementation uses a randomized pivot to avoid worst-case O(n²) performance
    on already sorted or reverse-sorted inputs. The algorithm partitions elements
    around the pivot and recursively sorts the partitions.

    Args:
        collection: A mutable list of comparable items (integers, floats, strings, etc.).
                   The list can contain duplicates and will not be modified in place.

    Returns:
        A new list containing all elements from the input collection sorted in
        ascending order. The original list remains unchanged.

    Raises:
        TypeError: If elements in the collection are not comparable.

    Examples:
        >>> quick_sort([0, 5, 3, 2, 2])
        [0, 2, 2, 3, 5]
        >>> quick_sort([])
        []
        >>> quick_sort([-2, 5, 0, -45])
        [-45, -2, 0, 5]
        >>> quick_sort(['banana', 'apple', 'cherry'])
        ['apple', 'banana', 'cherry']

    Notes:
        - This creates new lists rather than sorting in-place
        - Uses <= for partitioning to handle duplicates correctly
        - Randomized pivot helps avoid worst-case scenarios
    """
    if len(collection) < 2:
        return collection

    pivot = choice(collection)

    lesser = [element for element in collection if element < pivot]
    equal = [element for element in collection if element == pivot]
    greater = [element for element in collection if element > pivot]

    return quick_sort(lesser) + equal + quick_sort(greater)


def quick_sort_descending(collection: list[T]) -> list[T]:
    """Sort a list in descending order using the quicksort algorithm.

    This is a convenience function that sorts a list in descending order
    by reversing the result of the ascending quicksort algorithm.

    Args:
        collection: A mutable list of comparable items (integers, floats, strings, etc.).
                   The list can contain duplicates and will not be modified in place.

    Returns:
        A new list containing all elements from the input collection sorted in
        descending order. The original list remains unchanged.

    Raises:
        TypeError: If elements in the collection are not comparable.

    Examples:
        >>> quick_sort_descending([0, 5, 3, 2, 2])
        [5, 3, 2, 2, 0]
        >>> quick_sort_descending([])
        []
        >>> quick_sort_descending([-2, 5, 0, -45])
        [5, 0, -2, -45]
        >>> quick_sort_descending(['banana', 'apple', 'cherry'])
        ['cherry', 'banana', 'apple']

    Notes:
        - This function leverages the ascending quicksort and reverses the result
        - Alternative implementation possible by inverting comparison operators
        - Time complexity remains O(n log n) with O(n) additional for reversal
    """
    if len(collection) < 2:
        return collection

    pivot = choice(collection)

    lesser = [element for element in collection if element < pivot]
    equal = [element for element in collection if element == pivot]
    greater = [element for element in collection if element > pivot]

    return quick_sort_descending(greater) + equal + quick_sort_descending(lesser)


def parse_integer_input(user_input: str) -> list[int]:
    """Parse a comma-separated string of integers into a list.

    Args:
        user_input: A string containing integers separated by commas.
                   Whitespace around numbers is automatically stripped.
                   Example: "1, 2, 3" or "1,2,3"

    Returns:
        A list of integers parsed from the input string.
        Example: "1, 2, 3" returns [1, 2, 3]

    Raises:
        ValueError: If the input contains non-integer values or is improperly formatted.
                   Example: "1, 2, abc" will raise ValueError.

    Examples:
        >>> parse_integer_input("1,2,3")
        [1, 2, 3]
        >>> parse_integer_input("10, 20, 30")
        [10, 20, 30]
        >>> parse_integer_input("-5, 0, 5")
        [-5, 0, 5]
    """
    return [int(item.strip()) for item in user_input.split(",")]


def display_results(original: list[int], sorted_asc: list[int], sorted_desc: list[int]) -> None:
    """Display original, ascending, and descending sorted lists.

    Args:
        original: The original unsorted list of integers.
        sorted_asc: The list sorted in ascending order.
        sorted_desc: The list sorted in descending order.
    """
    print(f"\nOriginal list:           {original}")
    print(f"Sorted (ascending):      {sorted_asc}")
    print(f"Sorted (descending):     {sorted_desc}")


def display_error(error: Exception) -> None:
    """Display user-friendly error message for invalid input.

    Args:
        error: The exception that was raised during input parsing.
    """
    print("\nError: Invalid input. Please enter only integers separated by commas.")
    print("Example: 5, 3, 8, 1")
    print(f"Details: {error}")


def main() -> None:
    """Main function to demonstrate quicksort with interactive user input.

    Prompts the user to enter comma-separated integers, sorts them using
    quicksort in both ascending and descending order, and displays all results.
    Includes error handling for invalid input.
    """
    try:
        user_input = input("Enter numbers separated by a comma:\n").strip()
        
        if not user_input:
            print("No input provided. Please enter at least one number.")
            return
        
        numbers = parse_integer_input(user_input)
        sorted_ascending = quick_sort(numbers)
        sorted_descending = quick_sort_descending(numbers)
        display_results(numbers, sorted_ascending, sorted_descending)
    
    except ValueError as error:
        display_error(error)
    
    except Exception as error:
        print(f"\nAn unexpected error occurred: {error}")


if __name__ == "__main__":
    main()