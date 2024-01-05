#!/usr/bin/env python3
""" Measure the runtime """
import time
import asyncio
from typing import List


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the total execution time of the wait_n function"""
    start_time = time.time()  # Start time measurement
    asyncio.run(wait_n(n, max_delay))  # Execute wait_n asynchronously
    end_time = time.time()  # End time measurement
    total_time = end_time - start_time  # Calculate total duration

    return total_time / n  # Return average time per call
