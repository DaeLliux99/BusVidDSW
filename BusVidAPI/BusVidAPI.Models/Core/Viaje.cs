using System;
using System.Collections.Generic;
using System.Text;

namespace BusVidAPI.Modelos.Core
{
    public class Viaje
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public TimeSpan HoraInicio { get; set; }
        public int NroAsientosDisp { get; set; }
        public decimal Precio { get; set; }
        public int IdBus { get; set; }
        public string NroPlaca { get; set; }
        public int IdAdministrador { get; set; }
        public string Nombre { get; set; }
        public int IdCiudadInicio { get; set; }
        public string Inicio { get; set; }
        public int IdCiudadDestino { get; set; }
        public string Destino { get; set; }
    }
}
