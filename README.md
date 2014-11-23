# Grammatica

A project built at WildHacks (Northwestern). Grammatica let's users interact with a speech
and language service to provide instant feedback about correct english grammar usage as well
as correct colloquial and formal english usage.

## How this project is built.
1. A NodeJs web application handles all the calls made on the client-end.
2. NodeJs application is hosted by Bluemix.
3. The application serves a Bootstrap front-end that users interface.
4. Users send input to the application (text or speech) and the application processes it. The
input is processed by the languagetools API to catch "easy" grammar and spelling mistakes.
5. The processed input is then searched for in a mongoDB "sentence bank" (read more later).
6. Appropriate context is chosen to be the "corrected" user input and sent back to the user.
7. api.ai and Twilio provide extra features such as text media transfer ability and live speech.

### Matching speech
In step 5, we search for the input in a large data set stored in MongoDB. Having only
24 hours for this hackathon, a quick, albeit sloppy, solution was found to handle grammar
cases in which our language tool api would fail. For example, many language tools only
check for syntactical elements such as subject-verb agreement. A sentence such as "I is dog"
is clearly incorrect semantically which causes a problem. The solution is to capture
a large enough data set of "correct" sentences mapped to words and search this set for an
appropriate "correction". (Disclaimer: None of us have NLP experience (yet) and this app is the
first we have done so if you have any better ideas or documents to look, drop me a note
through my email - left side)

The "sentence bank" was created by processing text from project-gutenberg (free ebooks) and
feeding the data into a mongoDB hosted on MongoLabs.


## Stack
- Nodejs
- Bluemix w/ MongoLabs
- MongoDB
- Python
- JavaScript
- Bootstrap Framework
- languagetools API
- api.ai API
- Twilio API

## Log
11.23.14 : 
-Some features are currently incomplete. This is not the project version we're demoing at WildHacks.

## Built by (UIUC):
- Jimmy Guo
- Timmeh Chow
- Michelle Zheng
- Andrew Breckenridge
- Andy Vuong
