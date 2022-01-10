using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class BusLN
    {
        public List<Bus> ListarBuses()
        {
            try
            {
                List<Bus> buses = new BusDA().ListarBuses();
                return buses;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public Bus InsertarBus(Bus bus)
        {
            return new BusDA().InsertarBus(bus);
        }
    }
}
