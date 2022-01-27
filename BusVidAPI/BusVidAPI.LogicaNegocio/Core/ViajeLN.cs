using BusVidAPI.AccesoDatos.Core;
using BusVidAPI.Modelos.Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.LogicaNegocio.Core
{
    public class ViajeLN
    {
        public List<Viaje> ListarViajes()
        {
            try
            {
                return new ViajeDA().ListarViajes();
            }
            catch (Exception)
            {
                return null;
                throw;
            }
        }
        public Viaje ObtenerViaje(int idViaje)
        {
            try
            {
                return new ViajeDA().ObtenerViaje(idViaje);
            }
            catch (Exception)
            {
                return null;
            }
        }
        public Viaje InsertarViaje(Viaje viaje)
        {
            try
            {
                return new ViajeDA().InsertarViaje(viaje);
            }
            catch (Exception)
            {
                return null;
            }
        }
        public Viaje ModificarViaje(Viaje viaje, int cantidad)
        {
            try
            {
                return new ViajeDA().ModificarViaje(viaje, cantidad);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
