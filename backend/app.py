import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


@app.route("/", methods=["GET"])
def get_root():
    return jsonify({"message": "Hello, World!"})


@app.route("/call-openai", methods=["POST"])
def call_openai():
    data = request.json
    messages = [
        {
            "role": "system",
            "content": "Si pomočnik, ki pomaga analizirati krvne in urinske preiskave.",
        },
        {"role": "user", "content": data["prompt"]},
    ]
    try:
        completion = client.chat.completions.create(
            model="gpt-4-0125-preview",
            messages=messages,
        )
        response = completion.choices[0].message.content
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
