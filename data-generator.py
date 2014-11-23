import pymongo, os
from pymongo import MongoClient
import nltk


#################################
def extract_data(file):
    # Grab each unique word in a text file
    f = open(file,'rb')
    unique_word_data = set(f.read().split())

    # Extract sentences from text files
    tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
    fp = open(file)
    file_obj = fp.read()

    sentence_data = tokenizer.tokenize(file_obj)

    # Map each sentence to a word
    # Map sentences

    dictionary = dict()

    #print(unique_word_data)
    #print(sentence_data)
    for n in unique_word_data: # list of unique words
        word = n.decode("utf-8")
        for x in sentence_data: # list of sentences
            #print("word: " + word)
            #print("Sentence: " + x)
            if word in x:           # unique word is in sentence
                dictionary.setdefault(word, []).append(x)
    return dictionary


#################################
data_set = extract_data('dataset1.txt')
uri = "mongodb://Ibmb.com:49570/IbmCloud_95usgrmi_d1mul30q"

client = pymongo.MongoClient(uri)
db = client.get_default_database()

collection = db['dataset']
#sample = {
#        'word': 'cool',
#        'value': 'This sentence is here.'
#    }

#db.insert(sample)

for key, val in data_set.items():
    #print(key)
    post = {
        "word": key,
        "value": val
    }
    db.collection.save(post)
print("Finished...")



