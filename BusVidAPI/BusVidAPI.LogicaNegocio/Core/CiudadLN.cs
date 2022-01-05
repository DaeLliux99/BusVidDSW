using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class CiudadLN
    {
        public List<Ciudad> ObtenerCiudades()
        {
            try
            {
                List<Ciudad> ciudades = new CiudadDA().ObtenerCiudades();
                return ciudades;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
