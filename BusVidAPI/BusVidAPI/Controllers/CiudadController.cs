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
    [Route("api/Ciudad")]
    [ApiController]
    public class CiudadController : ControllerBase
    {
        // GET: api/<CiudadController>
        [HttpGet]
        public IEnumerable<Ciudad> Get()
        {
            List<Ciudad> ciudades = new CiudadLN().ObtenerCiudades();
            return ciudades;
        }

        // GET api/<CiudadController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CiudadController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CiudadController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CiudadController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
