using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace SpellingBeeSolver
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            const string dataFilePath = "..\\..\\..\\data\\words_alpha.txt";

            string[] allWords = File.ReadAllLines(dataFilePath);

            Console.WriteLine($"# of words = {allWords.Length}");

            Console.WriteLine("Insert 7 letters (center letter first):");
            string letters = Console.ReadLine();

            List<string> result = new List<string>();

            var timer = new Stopwatch();

            Console.WriteLine($"Time before: {DateTime.Now}");
            timer.Start();

            //foreach (string word in allWords)
            //{
            //    if (WordIsValid(word, letters))
            //    {
            //        result.Add(word);
            //    }
            //}

            Parallel.ForEach(allWords, word =>
            {
                if (WordIsValid(word, letters))
                {
                    result.Add(word);
                }
            });

            timer.Stop();

            Console.WriteLine("Result:");
            foreach (string word in result)
            {
                Console.WriteLine(word);
            }

            Console.WriteLine("\n");
            Console.WriteLine($"Time after: {DateTime.Now}");
            Console.WriteLine($"Total time = {timer.Elapsed}");
            Console.WriteLine("\n");
        }

        private static bool WordIsValid(string word, string letters)
        {
            RandomSleep();

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

        private static void RandomSleep()
        {
            var r = new Random();
            int n = r.Next(500);

            if (n < 2)
            {
                Thread.Sleep(1);
            }
        }
    }
}
