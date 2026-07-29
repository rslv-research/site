+++
title = "RSLV Dictionary"
description = "文脈解析と高品質な辞書データを、言語プロダクトのために。"
template = "dictionary.html"
weight = 10

[extra]
hero_title = "文脈に合った意味を"
lead = "RSLV Dictionaryは、文章全体を解析して文脈を捉え、100万件を超える高品質な辞書項目の中から、適切な意味や情報を返します。"

analysis_index = "01"
analysis_label = "解析"
analysis_title = "辞書も、まず文を読むべき"
analysis_paragraphs = [
  "RSLVは、文章を読み取って内容を理解したうえで、辞書検索を行います。複合語表現や非標準的な語形も含めて語彙項目を特定し、文脈に合う意味を優先します。",
  "学習者には、文の和訳に頼らず、英文そのものを理解するためのわかりやすい答えを提示します。プロダクトチームには、ほかの学習機能にそのまま使える、文脈を反映した構造化データを提供します。",
]
analysis_card_label = "文脈に応じた検索"

data_index = "02"
data_label = "辞書データ"
data_title = "学習の土台になるデータ"
data_paragraphs = [
  "RSLVが返すのは、モデルがその場で生成した情報ではなく、100万件を超える構造化された英語の語彙項目から取得した情報です。学習者には、いつでも安定した品質の結果を届けます。各項目では、見出し語、語形、品詞と語義が結び付けられています。各語義には、複数の言語による定義と、難易度ラベルが用意されています。",
  "RSLVの文脈解析と組み合わせるだけでなく、独自の検索・読解・言語学習機能の基盤としても利用できます。",
]

pipeline_index = "03"
pipeline_label = "パイプライン"
pipeline_title = "すべてでも、必要な部分だけでも"
pipeline_paragraphs = [
  "RSLVは、入力された文章から構造化された辞書検索結果までを一つの流れで処理できます。一方で、自社のトークン化処理を使う、RSLVの解析を自社の辞書データにつなぐなど、必要な部分だけを組み込むこともできます。",
]
cta_title = "ことばを読み解く力を"
cta_body = "文脈解析、辞書データ、マネージド導入についてご相談ください。"
cta_label = "RSLV Dictionaryについて相談する"

[[extra.analysis_examples]]
sentence = "<mark>In the end</mark>, she <mark>turned</mark> the offer <mark>down</mark>."

[[extra.analysis_examples.items]]
headword = "in the end"
pos = "前置詞句"
meaning = "結局"

[[extra.analysis_examples.items]]
headword = "turn down"
pos = "句動詞"
meaning = "却下する"

[[extra.analysis_examples]]
sentence = "<mark>The Great Wall</mark> <mark>runs</mark> across northern China."

[[extra.analysis_examples.items]]
headword = "Great Wall"
pos = "固有名詞"
meaning = "万里の長城"

[[extra.analysis_examples.items]]
headword = "run"
pos = "動詞"
meaning = "延びる"

[[extra.analysis_examples]]
sentence = "He <mark>ain't</mark> never <mark>gonna</mark> leave."

[[extra.analysis_examples.items]]
headword = "ain't"
pos = "非標準形"
meaning = "is not / will not"
meaning_lang = "en"

[[extra.analysis_examples.items]]
headword = "gonna"
pos = "口語形"
meaning = "going to"
meaning_lang = "en"

[[extra.data_examples]]
label = "語彙項目"
headword = "take in"
pos = "句動詞"
forms_label = "語形"
forms = "[take · takes · took · taking · taken] + in"

[[extra.data_examples.senses]]
index = "01"
label = "一般的"
definition = "情報を理解したり、吸収したりする"
translation = "理解する・のみ込む"

[[extra.data_examples.senses]]
index = "02"
label = "やや珍しい"
definition = "人をだます、欺く"
translation = "だます・欺く"

[[extra.data_examples.senses]]
index = "03"
label = "まれ"
definition = "縫って服を小さくする"
translation = "（服を）詰める・小さく直す"

[[extra.pipeline_steps]]
kind = "endpoint"
title = "テキスト入力"
body = "文・文章・文書"

[[extra.pipeline_steps]]
kind = "replaceable"
title = "テキスト処理"
body = "文分割・トークン化"
tag = "RSLVまたは自社"

[[extra.pipeline_steps]]
kind = "rslv"
title = "語彙解析"
body = "語形・複合語表現・語義ランキング"
tag = "RSLV"

[[extra.pipeline_steps]]
kind = "replaceable"
title = "辞書レイヤー"
body = "語彙項目・語義・訳"
tag = "RSLVまたは自社"

[[extra.pipeline_steps]]
kind = "endpoint"
title = "構造化結果"
body = "プロダクトですぐに利用"
+++
