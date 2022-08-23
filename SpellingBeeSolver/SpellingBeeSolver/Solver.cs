using SpellingBeeSolver.Helpers;
using SpellingBeeSolver.Infrastructure;
using SpellingBeeSolver.Model;
using System;
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
            List<string> wordList = new List<string>();

            EnglishDictionary.Words = DictionaryLoader.GetWordsFromFile();

            //foreach (string word in EnglishDictionary.Words)
            //{
            //    if (WordIsValid(word, letters))
            //    {
            //        result.Add(word);
            //    }
            //}

            Parallel.ForEach(EnglishDictionary.Words, word =>
            {
                if (WordIsValid(word, letters))
                {
                    wordList.Add(word);
                }
            });

            wordList = wordList.OrderByDescending(w => w.Length).ThenBy(w => w).ToList();

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
