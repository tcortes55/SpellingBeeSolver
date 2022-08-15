using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;

namespace SpellingBeeSolver.Infrastructure
{
    public class DictionaryLoader
    {
        public static string[] GetWordsFromFile()
        {
            string buildDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string dataFilePath = buildDir + @"\data\words_alpha.txt";

            string[] allWords = File.ReadAllLines(dataFilePath);
            
            return allWords;
        }
    }
}
