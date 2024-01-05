#!/usr/bin/env python3
""" Measure runtime for async comprehension """
from typing import List
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """Measure the runtime of executing async_comprehension four times in parallel."""
    start = time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time()
    return end - start
