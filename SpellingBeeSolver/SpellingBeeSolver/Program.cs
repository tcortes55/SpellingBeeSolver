using SpellingBeeSolver.Infrastructure;
using SpellingBeeSolver.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace SpellingBeeSolver
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
            List<string> result = SpellingBeeSolver.GetValidWords(letters);
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

        //public static async Task<T> Get(string url, string username = null, string password = null)
        //{
        //    T result = null;
        //    using (var httpClient = new HttpClient())
        //    {
        //        var response = httpClient.GetAsync(new Uri(url)).Result;
        //        result = await response.Content.ReadAsStringAsync().ContinueWith((Task<string> x) =>
        //        {
        //            if (x.IsFaulted)
        //                throw x.Exception;

        //            result = JsonConvert.DeserializeObject<T>(x.Result);
        //        });
        //    }

        //    return result;
        //}
    }
}
