using SpellingBeeSolver;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var timer = new Stopwatch();

            Console.WriteLine("Insert 7 letters (center letter first):");
            string letters = Console.ReadLine();

            Console.WriteLine($"Time before: {DateTime.Now}");
            timer.Start();
            List<string> result = Solver.GetValidWords(letters);
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
    }
}
