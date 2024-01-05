#!/usr/bin/env python3
"""Basic syntax for async"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Returns float: The actual delay time the coroutine waited."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
