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
    [Route("api/Administrador")]
    [ApiController]
    public class AdministradorController : ControllerBase
    {
        // GET: api/Administrador
        [HttpGet]
        public IEnumerable<Administrador> Get()
        {
            List<Administrador> admins = new List<Administrador>();
            admins = new AdministradorLN().ListarAdmins();
            return admins;
        }

        // GET api/Administrador/5
        [HttpGet("{dni}")]
        public Administrador Get(string dni)
        {
            try
            {
                AdministradorLN admin = new AdministradorLN();
                return admin.ObtenerAdmin(dni);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }

        [HttpGet("{dni}/{password}")]
        public Administrador Get(string dni, string password)
        {
            try
            {
                AdministradorLN admin = new AdministradorLN();
                return admin.ObtenerAdmin(dni, password);
            }
            catch (Exception ex)
            {
                string innerException = (ex.InnerException == null) ? "" : ex.InnerException.ToString();
                return null;
            }
        }

        // POST api/Administrador
        [HttpPost]
        public void Post([FromBody] Administrador value)
        {
            Administrador admin = new AdministradorLN().InsertarAdmin(value);
        }

        // PUT api/Administrador/5
        [HttpPut("{id}")]
        public void Put([FromBody] Administrador value)
        {
            Administrador administrador = new Administrador();
            administrador = new AdministradorLN().ModificarAdmin(value);
        }

        // DELETE api/Administrador/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            AdministradorLN adminLN = new AdministradorLN();
            adminLN.EliminarAdmin(id);
        }
    }
}
