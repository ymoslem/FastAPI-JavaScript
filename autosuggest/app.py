from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from nltk import edit_distance


# Place here the code the should be loaded only once
with open("words.txt", "r") as words:
    vocab = words.readlines()


class Source(BaseModel):
    sentence: str


app = FastAPI()

# "*" is for testing purposes only
# For deployment, change it to the allowed website(s)
origins = [
    "*"
]

app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)

@app.post("/autosuggest/")
async def complete(source: Source):

    sentence = source.sentence
    sentence = sentence.strip()

    # # Place here the code that should run with each request
    last_word = sentence.split(" ")[-1]
    prefix = " ".join(sentence.split(" ")[:-1])
    scores = [(edit_distance(last_word, word.strip()), word.strip()) for word in vocab]
    suggestions = sorted(scores)[:6]
    suggestions = [item[1] for item in suggestions]
    return {"prefix": prefix, "suggestions": suggestions}


if __name__ == '__main__':
    app.run()
