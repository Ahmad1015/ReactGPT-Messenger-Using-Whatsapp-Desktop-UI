from openai import OpenAI
from dotenv import load_dotenv
import sys
import os

load_dotenv()
api_key = os.getenv("API_KEY")
client = OpenAI(
    # This is the default and can be omitted
    api_key=api_key
)

def call_Chatgpt():
    data = sys.argv[2]
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": data,
            }
        ],
        model="gpt-3.5-turbo",
    )
    print( chat_completion.choices[0].message.content)

call_Chatgpt()