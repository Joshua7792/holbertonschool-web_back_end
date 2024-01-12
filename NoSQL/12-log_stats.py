#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient

def log_stats():
    """
    Provides stats about Nginx logs stored in MongoDB.
    """
    # Create a MongoClient to connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    
    # Access the 'logs' database and the 'nginx' collection
    nginx_collection = client.logs.nginx

    # Get the total number of logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # List of HTTP methods to check
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    # Print the count of each HTTP method
    print("Methods:")
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count the number of documents with method=GET and path=/status
    status_check = nginx_collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()
