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
        [HttpGet("{source}")]
        public IActionResult Get(string source, [FromQuery] string value)
        {
            switch (source.ToUpper())
            {
                case "NYT":
                    value = GetNytInputValue();
                    break;
                case "FREEBEE":
                    value = GetFreebeeInputValue();
                    break;
                case "SELF":
                    break;
                default:
                    return BadRequest();
            }

            List<string> result = Solver.GetValidWords(value);

            return Ok(result);
        }

        private string GetFreebeeInputValue()
        {
            return "frebiys";
        }

        private string GetNytInputValue()
        {
            return "newyork";
        }
    }
}
