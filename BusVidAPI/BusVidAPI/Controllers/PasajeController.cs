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
    [Route("api/Pasaje")]
    [ApiController]
    public class PasajeController : ControllerBase
    {
        // GET: api/<PasajeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PasajeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PasajeController>
        [HttpPost]
        public void Post([FromBody] Pasaje value)
        {
            ViajeLN viajeLN = new ViajeLN();
            Viaje viaje = viajeLN.ObtenerViaje(value.IdViaje);
            if (viaje.NroAsientosDisp - value.Cantidad >= 0){
                Pasajero pasajero = new Pasajero { Dni = value.Dni, Nombre = value.Nombre, Apellidos = value.Apellidos };
                pasajero = new PasajeroLN().InsertarPasajero(pasajero);
                value.IdPasajero = pasajero.Id;
                Pasaje pasaje = new PasajeLN().InsertarPasaje(value);
                viaje = viajeLN.ModificarViaje(viaje, value.Cantidad);
            }
        }

        // PUT api/<PasajeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PasajeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
