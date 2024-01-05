#!/usr/bin/env python3
"""multiple coroutines at the same time with async"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """spawn wait_random n times with max_delay"""
    tasks = [wait_random(max_delay) for i in range(n)]
    # creates list of n tasks
    result = []
    for task in asyncio.as_completed(tasks):
        result.append(await task)
    return result
