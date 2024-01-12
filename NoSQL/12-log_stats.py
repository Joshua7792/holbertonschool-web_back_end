#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient


def helper(query: dict) -> int:
    """
    Return the count of documents matching the query in the 'nginx' collection.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs.nginx
    return logs.count_documents(query)


def main():
    """ Provides some stats about Nginx logs stored in MongoDB. """
    print(f"{helper({})} logs")
    print("Methods:")
    print(f"\tmethod GET: {helper({'method': 'GET'})}")
    print(f"\tmethod POST: {helper({'method': 'POST'})}")
    print(f"\tmethod PUT: {helper({'method': 'PUT'})}")
    print(f"\tmethod PATCH: {helper({'method': 'PATCH'})}")
    print(f"\tmethod DELETE: {helper({'method': 'DELETE'})}")
    print(f"{helper({'method': 'GET', 'path': '/status'})} status check")


if __name__ == "__main__":
    main()
