using SpellingBeeSolver.Helpers;
using SpellingBeeSolver.Infrastructure;
using SpellingBeeSolver.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpellingBeeSolver
{
    public static class Solver
    {
        public static SpellingBeeGame GetValidWords(string letters)
        {
            EnglishDictionary.Words = DictionaryLoader.GetWordsFromFile();

            List<string> wordList = new List<string>();

            //foreach (string word in EnglishDictionary.Words)
            //{
            //    if (WordIsValid(word, letters))
            //    {
            //        wordList.Add(word);
            //    }
            //}

            //wordList = wordList.OrderByDescending(w => w.Length).ThenBy(w => w).ToList();

            ConcurrentBag<string> wordCollection = new ConcurrentBag<string>();

            Parallel.ForEach(EnglishDictionary.Words, word =>
            {
                if (WordIsValid(word, letters))
                {
                    wordCollection.Add(word);
                }
            });

            wordList = wordCollection.AsEnumerable().OrderByDescending(w => w.Length).ThenBy(w => w).ToList();

            SpellingBeeGame gameResult = new SpellingBeeGame()
            {
                Center = letters[0].ToString(),
                Letters = letters.Substring(1),
                Words = wordList.Count,
                Total = 0,
                Wordlist = wordList,

            };

            return gameResult;
        }

        private static bool WordIsValid(string word, string letters)
        {
            //Util.RandomSleep();

            if (word.Length < 4)
            {
                return false;
            }

            if (!word.Contains(letters[0]))
            {
                return false;
            }

            foreach (char c in word)
            {
                if (!letters.Contains(c))
                {
                    return false;
                }
            }

            return true;
        }

    }
}
