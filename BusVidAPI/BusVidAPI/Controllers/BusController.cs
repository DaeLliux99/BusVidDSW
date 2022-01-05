using BusVidAPI.LogicaNegocio.Core;
using BusVidAPI.Modelos.Core;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BusVidAPI.Controllers
{
    [Route("api/Bus")]
    [ApiController]
    public class BusController : ControllerBase
    {
        // GET: api/<BusController>
        [HttpGet]
        public IEnumerable<Bus> Get()
        {
            return new BusLN().ListarBuses();
        }

        // GET api/<BusController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BusController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BusController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BusController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
