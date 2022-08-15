using SpellingBeeSolver.Helpers;
using SpellingBeeSolver.Infrastructure;
using SpellingBeeSolver.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SpellingBeeSolver
{
    public static class Solver
    {
        public static List<string> GetValidWords(string letters)
        {
            List<string> result = new List<string>();

            EnglishDictionary.Words = DictionaryLoader.GetWordsFromFile();

            //foreach (string word in allWords)
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
                    result.Add(word);
                }
            });

            return result;
        }

        private static bool WordIsValid(string word, string letters)
        {
            Util.RandomSleep();

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
