#!/usr/bin/env python3
"""
Module for simple helper function to implement pagination.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for a range of items to paginate.

    :param page: The current page number (1-indexed)
    :param page_size: The number of items per page
    :return: A tuple containing the start index and end index
    """
    end_index = page * page_size
    start_index = end_index - page_size
    return (start_index, end_index)
