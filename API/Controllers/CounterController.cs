using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CounterController : ControllerBase
    {
        private readonly ILogger<CounterController> _logger;
        private readonly ICounterService _counter;

        private int number;

        public CounterController(ILogger<CounterController> logger, ICounterService counter)
        {
            _counter = counter;
            _logger = logger;
        }

        [HttpGet("getCounter")]
        public int Get()
        {
            return _counter.getNumber();
        }

        [HttpPost("resetCounter")]
        public int ResetCounter() {
            return _counter.ResetCounter();
        }

        [HttpPut("incrementNumber")]
        public int PostIncrementNumber([FromBody] int n)
        {
            _counter.IncrementNumber(n);
            return _counter.getNumber();
        }

        [HttpPut("decrementNumber")]
        public int PostDecrementNumber([FromBody] int n)
        {
            _counter.DecrementNumber(n);
            return _counter.getNumber();
        }
    }
}