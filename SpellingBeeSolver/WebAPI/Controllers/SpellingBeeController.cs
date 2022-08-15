using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpellingBeeSolver;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellingBeeController : ControllerBase
    {
        [HttpGet("{value}")]
        public List<string> Get(string value)
        {
            List<string> result = Solver.GetValidWords(value);

            return result;
        }
    }
}
