using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace SpellingBeeSolver.Helpers
{
    public static class Util
    {
        public static void RandomSleep()
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
