using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace SpellingBeeSolver.Infrastructure
{
    public class DictionaryLoader
    {
        public static string[] GetWordsFromFile()
        {
            const string dataFilePath = ".\\data\\words_alpha.txt";
            string[] allWords = File.ReadAllLines(dataFilePath);
            
            return allWords;
        }
    }
}
