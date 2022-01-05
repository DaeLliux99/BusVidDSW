using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class PasajeroLN
    {
        public Pasajero InsertarPasajero(Pasajero pasajero)
        {
            try
            {
                return new PasajeroDA().InsertarPasajero(pasajero);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
