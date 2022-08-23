﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpellingBeeSolver;
using WebAPI.Helpers;
using WebAPI.Models;

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
                    value = GetNytInputValue();
                    break;
                case "FREEBEE":
                    value = await GetFreebeeInputValue();
                    break;
                case "SELF":
                    break;
                default:
                    return BadRequest();
            }

            List<string> result = Solver.GetValidWords(value.ToLower());

            return Ok(result.OrderByDescending(w => w.Length).ThenBy(w => w));
        }

        private async Task<string> GetFreebeeInputValue()
        {
            var url = @"https://freebee.fun/cgi-bin/today";
            var result = await HttpClientWrapper<FreebeeGame>.Get(url);

            return result.Center + result.Letters;
        }

        private string GetNytInputValue()
        {
            return "newyork";
        }
    }
}
