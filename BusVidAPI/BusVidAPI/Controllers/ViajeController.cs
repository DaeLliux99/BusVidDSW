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
    [Route("api/Viaje")]
    [ApiController]
    public class ViajeController : ControllerBase
    {
        // GET: api/<ViajeController>
        [HttpGet]
        public IEnumerable<Viaje> Get()
        {
            return new ViajeLN().ListarViajes();
        }

        // GET api/<ViajeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ViajeController>
        [HttpPost]
        public void Post([FromBody] Viaje value)
        {
            Viaje viaje = new ViajeLN().InsertarViaje(value);
            CiudadExtremo ceIni = new CiudadExtremo { IdViaje = viaje.Id, IdCiudad = viaje.IdCiudadInicio, Tipo = "Inicio" };
            CiudadExtremo ceDes = new CiudadExtremo { IdViaje = viaje.Id, IdCiudad = viaje.IdCiudadDestino, Tipo = "Destino" };
            ceIni = new CiudadExtremoLN().InsertarCiudadExtremo(ceIni);
            ceDes = new CiudadExtremoLN().InsertarCiudadExtremo(ceDes);
        }

        // PUT api/<ViajeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ViajeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
