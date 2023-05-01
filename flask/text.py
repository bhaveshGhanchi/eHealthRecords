from flask import Flask,jsonify
from pymongo import MongoClient
import pandas as pd
import numpy as np


client=MongoClient("mongodb+srv://test:test@cluster0.mbaqegg.mongodb.net/?retryWrites=true&w=majority")
db=client["EHR"]
userData=db["userdatas"]
data = list(userData.find())
df = pd.DataFrame(data)
