using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class PasajeLN
    {
        public Pasaje InsertarPasaje(Pasaje value)
        {
            try
            {
                return new PasajeDA().InsertarPasaje(value);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
