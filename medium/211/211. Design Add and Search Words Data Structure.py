class WordDictionary:

    def __init__(self):
        self.trie = {}

    def addWord(self, word: str) -> None:
        cur = self.trie

        for s in word:
            if s not in cur:
                cur[s] = {}
            cur = cur[s]
        # end
        cur[''] = {}

    def search(self, word: str) -> bool:
        return self.dfs(word, 0, self.trie)

    def dfs(self, words: str, pos = 0, cur = None) -> bool:
        if len(words) == pos:
          return '' in cur
        if words[pos] in cur:
          return self.dfs(words, pos + 1, cur[words[pos]])
        if words[pos] == '.':
          for c in cur:
            if self.dfs(words, pos + 1, cur[c]):
              return True
        return False


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
