#!/usr/bin/env python3
"""Take a string of int or float and convert to tuple"""
from typing import Tuple, Union


def to_kv(k: str, v: [Union[int, float]]) -> Tuple[str, float]:
    """Return tuple of str with float"""
    return(k, float(v ** 2))
