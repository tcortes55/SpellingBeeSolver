using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class FreebeeGame
    {
        public string Letters { get; set; }
        public string Center { get; set; }
        public int Words { get; set; }
        public int Total { get; set; }
        public List<string> Wordlist { get; set; }
    }
}
