# FastAPI-JavaScript
Interactive web interface templates with jQuery and Python. The backend is a REST API in Python developed with FastAPI while the frontend uses simple HTML, CSS (mainly with Bulma), and JavaScript that sends requests to the REST API and retrieves data responses.


## Purpose

This repository includes minimal working examples to help create interactive web interfaces that require JavaScript events such as input change or clicking a word. It should also help build a basic REST API.

*Note:* In this sense, please note that the Python files use very simple examples that you should replace with your own model.


## Auto-Suggest

The auto-suggest demo generates word suggestions as you type. Among use cases of this template are writing assistances, spelling checking, and interactive machine translation. Suggestions are triggered by a space as illustrated by this screenshot.
![Autosuggest](/autosuggest/autosuggest.png)

**To try the auto-suggest example:**

1. install the Python packages in [requirements.txt](/autosuggest/requirements.txt)
```
pip3 install -r requirements.txt
```
3. in the Terminal, navigate to the project's folder, and then run the command:
```
uvicorn app:app --reload
```
4. open [autosuggest.html](/autosuggest/autosuggest.html) in your browser (tested on Chrome and Safari);
5. test it by typing a few words and pressing a space; this should trigger a list of suggestions. When you click a suggestion, it replaces the last word with it.

To edit the Python code, you have two parts whose comment starts with "Place here the code...". Use the first part for general functions and code that should be loaded only once, while the second part inside the `complete()` function should include the code that takes the input text, preprocesses it, uses the prefix to get the rest of the text, etc. The current function returns "prefix" as a string, and "suggestions" as a list of strings.


## Acknowledgements

* The jQuery plugin [textarea-caret-position](https://github.com/component/textarea-caret-position) is used to get the coordinates of the caret in a textarea.
* A portion of the dataset of the most frequent words in English [unigram_freq.csv](https://www.kaggle.com/rtatman/english-word-frequency?select=unigram_freq.csv) is used for demonstration purposes in the Python code.


## Questions

If you have questions, feel free to [contact me](https://blog.machinetranslation.io/contact/).
