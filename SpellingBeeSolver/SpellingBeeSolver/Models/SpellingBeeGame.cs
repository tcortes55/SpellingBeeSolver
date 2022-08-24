using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpellingBeeSolver.Model
{
    public class SpellingBeeGame
    {
        public string Letters { get; set; }
        public string Center { get; set; }
        public int Words { get; set; }
        public int Total { get; set; }
        public List<string> Wordlist { get; set; }
    }
}
