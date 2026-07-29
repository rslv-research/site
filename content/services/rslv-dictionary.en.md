+++
title = "RSLV Dictionary"
description = "Contextual text analysis and high-quality dictionary data for language products."
template = "dictionary.html"
weight = 10

[extra]
hero_title = "Meaning starts with context"
lead = "RSLV Dictionary understands each sentence, returning the right meanings and data from more than one million high-quality dictionary entries."

analysis_index = "01"
analysis_label = "Analysis"
analysis_title = "A dictionary that understands"
analysis_paragraphs = [
  "RSLV reads and understands the text before performing dictionary lookup. It identifies lexical items—including multi-word expressions and nonstandard forms—and ranks their possible meanings in context.",
  "Clear answers help learners understand the sentence as written, not just a translation of it. Product teams receive contextualized, structured data ready to use in downstream learning features.",
]
analysis_card_label = "Contextual lookup"

data_index = "02"
data_label = "Dictionary data"
data_title = "Dictionary data you can build on"
data_paragraphs = [
  "RSLV is grounded in more than one million structured English lexical entries—not a model generating definitions on demand. Learners get consistent, dependable results from one lookup to the next. Entries connect headwords, forms, and parts of speech to senses. Each sense includes definitions in multiple languages and its own difficulty label.",
  "Use the data with RSLV analysis or as a foundation for your own search, reading, and language-learning experiences.",
]

pipeline_index = "03"
pipeline_label = "Pipeline"
pipeline_title = "Use the whole stack—or only what you need"
pipeline_paragraphs = [
  "RSLV can process raw text from input to structured dictionary results, but the boundaries stay flexible. Send us raw text, provide your own tokenization, or connect RSLV analysis to your own dictionary data.",
]
cta_title = "Bring meaning in context to your product"
cta_body = "Talk with us about contextual analysis, dictionary data, or a managed integration."
cta_label = "Discuss RSLV Dictionary"

[[extra.analysis_examples]]
sentence = "<mark>In the end</mark>, she <mark>turned</mark> the offer <mark>down</mark>."

[[extra.analysis_examples.items]]
headword = "in the end"
pos = "prepositional phrase"
meaning = "結局"

[[extra.analysis_examples.items]]
headword = "turn down"
pos = "phrasal verb"
meaning = "却下する"

[[extra.analysis_examples]]
sentence = "<mark>The Great Wall</mark> <mark>runs</mark> across northern China."

[[extra.analysis_examples.items]]
headword = "Great Wall"
pos = "proper noun"
meaning = "万里の長城"

[[extra.analysis_examples.items]]
headword = "run"
pos = "verb"
meaning = "延びる"

[[extra.analysis_examples]]
sentence = "He <mark>ain't</mark> never <mark>gonna</mark> leave."

[[extra.analysis_examples.items]]
headword = "ain't"
pos = "nonstandard"
meaning = "is not / will not"
meaning_lang = "en"

[[extra.analysis_examples.items]]
headword = "gonna"
pos = "informal"
meaning = "going to"
meaning_lang = "en"

[[extra.data_examples]]
label = "Lexical entry"
headword = "take in"
pos = "phrasal verb"
forms_label = "Forms"
forms = "[take · takes · took · taking · taken] + in"

[[extra.data_examples.senses]]
index = "01"
label = "Common"
definition = "understand or absorb information"
translation = "理解する・のみ込む"

[[extra.data_examples.senses]]
index = "02"
label = "Uncommon"
definition = "trick or deceive someone"
translation = "だます・欺く"

[[extra.data_examples.senses]]
index = "03"
label = "Rare"
definition = "make clothing smaller by sewing"
translation = "（服を）詰める・小さく直す"

[[extra.pipeline_steps]]
kind = "endpoint"
title = "Input text"
body = "A sentence, passage, or document"

[[extra.pipeline_steps]]
kind = "replaceable"
title = "Text processing"
body = "Segmentation and tokenization"
tag = "RSLV or yours"

[[extra.pipeline_steps]]
kind = "rslv"
title = "Lexical analysis"
body = "Forms, expressions, and sense ranking"
tag = "RSLV"

[[extra.pipeline_steps]]
kind = "replaceable"
title = "Dictionary layer"
body = "Entries, senses, and translations"
tag = "RSLV or yours"

[[extra.pipeline_steps]]
kind = "endpoint"
title = "Structured result"
body = "Ready for your product"
+++
