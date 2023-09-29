using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpellingBeeSolver;
using SpellingBeeSolver.Model;
using WebAPI.Helpers;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpellingBeeController : ControllerBase
    {
        [HttpGet("{source}")]
        public async Task<IActionResult> GetAsync(string source, [FromQuery] string value)
        {
            switch (source.ToUpper())
            {
                case "NYT":
                    value = await GetNytInputValue();
                    break;
                case "FREEBEE":
                    value = await GetFreebeeInputValue();
                    break;
                case "SELF":
                    break;
                default:
                    return BadRequest();
            }

            SpellingBeeGame result = Solver.GetValidWords(value.ToLower());

            return Ok(result);
        }

        private async Task<string> GetFreebeeInputValue()
        {
            var url = @"https://freebee.fun/cgi-bin/today";
            var result = await HttpClientWrapper<SpellingBeeGame>.Get(url);

            return result.Center + result.Letters;
        }

        private async Task<string> GetNytInputValue()
        {
            var url = @"https://spelling-bee-scraper-034v.onrender.com/scrape";
            var result = await HttpClientWrapper<SpellingBeeGame>.Get(url);

            return result.Center + result.Letters;
        }
    }
}
